import { NextResponse } from "next/server";
import axios from "axios";

export async function PATCH(request) {
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const { companyId, payload } = await request.json();

  try {
    const response = await axios.patch(
      `https://api.hubapi.com/crm/v3/objects/companies/${companyId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("HubSpot Patch API Error:", error);
    return NextResponse.json(
      { error: error.response?.data?.message || "Failed to update company." },
      { status: error.response?.status || 500 }
    );
  }
}