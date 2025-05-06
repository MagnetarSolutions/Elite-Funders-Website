import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const payload = await request.json();

  try {
    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/companies/search",
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
    console.error("HubSpot Search API Error:", error);
    return NextResponse.json(
      { error: error.response?.data?.message || "Failed to search companies." },
      { status: error.response?.status || 500 }
    );
  }
}