import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const formData = await request.formData();
  const statement1 = formData.get("statement1");
  const statement2 = formData.get("statement2");
  const statement3 = formData.get("statement3");
  const statement4 = formData.get("statement4");
  const consent = formData.get("consent") === "true";
  const isCalifornia = formData.get("isCalifornia") === "true";

  if (!statement1 || !statement2 || !statement3 || (isCalifornia && !statement4) || !consent) {
    return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
  }

  try {
    const uploadFile = async (file, fileName) => {
      const fileFormData = new FormData();
      fileFormData.append("file", file, fileName);
      fileFormData.append("options", JSON.stringify({
        access: "PUBLIC_INDEXABLE",
        overwrite: false,
        duplicateValidationStrategy: "NONE",
        duplicateValidationScope: "EXACT_FOLDER"
      }));
      fileFormData.append("folderId", "189156370602");

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
      // Extract file ID and URL from response.data.objects[0]
      return {
        id: response.data.objects[0].id,
        url: response.data.objects[0].url // Correctly access the URL
      };
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
    const fileUrls = files.map((file) => file.url); // Map to the extracted URLs

    // Log fileUrls to verify they are correct
    console.log("Uploaded File URLs:", fileUrls);

    return NextResponse.json({ fileIds, fileUrls });
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