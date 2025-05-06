import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const accessToken = "pat-na1-0ee45f8f-1493-4507-ba13-03f84a20d1cd";
  const folderId = "189156370602";
  const formData = await request.formData();
  const statement1 = formData.get("statement1");
  const statement2 = formData.get("statement2");
  const statement3 = formData.get("statement3");
  const statement4 = formData.get("statement4");
  const companyName = formData.get("companyName");
  const consent = formData.get("consent") === "true";
  const isCalifornia = formData.get("isCalifornia") === "true";

  if (!statement1 || !statement2 || !statement3 || (isCalifornia && !statement4) || !consent) {
    return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
  }

  try {
    // STEP 1: Search company (only if companyName is provided and not "pleasetest")
    let companyId;
    if (companyName && companyName !== "pleasetest") {
      console.log(`Searching for company with name: ${companyName}`);
      const searchResponse = await axios.post(
        "https://api.hubapi.com/crm/v3/objects/companies/search",
        {
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "name",
                  operator: "EQ",
                  value: companyName
                }
              ]
            }
          ],
          properties: ["name"]
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Company search response:", searchResponse.data);

      if (searchResponse.data.total === 0) {
        console.log(`No company found for name: ${companyName}`);
        return NextResponse.json({ error: "Company not found." }, { status: 404 });
      }

      companyId = searchResponse.data.results[0].id;
      console.log(`Company found with ID: ${companyId}`);
    } else {
      console.log(`Skipping company search for companyName: ${companyName || "undefined"}`);
    }

    // STEP 2: Upload files (same as working code, no email or companyName)
    const uploadFile = async (file, fileName) => {
      const fileFormData = new FormData();
      fileFormData.append("file", file, fileName);
      fileFormData.append("options", JSON.stringify({
        access: "PUBLIC_INDEXABLE",
        overwrite: false,
        duplicateValidationStrategy: "NONE",
        duplicateValidationScope: "EXACT_FOLDER"
      }));
      fileFormData.append("folderId", folderId);

      const response = await axios.post(
        "https://api.hubapi.com/filemanager/api/v3/files/upload",
        fileFormData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    };

    const uploads = [
      uploadFile(statement1, statement1.name),
      uploadFile(statement2, statement2.name),
      uploadFile(statement3, statement3.name),
    ];
    if (isCalifornia) {
      uploads.push(uploadFile(statement4, statement4.name));
    }

    const files = await Promise.all(uploads);
    const fileIds = files.reduce((acc, file, index) => {
      acc[`statement${index + 1}`] = file.id;
      return acc;
    }, {});
    const urls = files.map(file => file.url).join("\n");

    // STEP 3: Update company with file URLs (only if companyId exists)
    if (companyId) {
      await axios.patch(
        `https://api.hubapi.com/crm/v3/objects/companies/${companyId}`,
        {
          properties: {
            bank_statement_urls: urls
          }
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          }
        }
      );
    }

    return NextResponse.json({ fileIds, message: companyId ? "Files uploaded and company updated." : "Files uploaded successfully." });
  } catch (error) {
    console.error("HubSpot API Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      correlationId: error.response?.data?.correlationId,
    });
    return NextResponse.json(
      { error: error.response?.data?.message || "Failed to upload files." },
      { status: error.response?.status || 500 }
    );
  }
}