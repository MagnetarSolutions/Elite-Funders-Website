import { NextResponse } from "next/server";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import { v4 as uuidv4 } from "uuid";

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

export async function POST(request) {
  try {
    const clientUserId = uuidv4();

    // Calculate the last 4 months' statement dates
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 4);
    console.log(startDate);
    console.log(endDate);
    const linkTokenCreateRequest = {
      user: {
        client_user_id: clientUserId,
        // email_address: 'user@example.com' // Replace with actual email
      },
      products: ["assets", "statements", "transactions"],

      statements: {
        start_date: startDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
        end_date: endDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
      },
      client_name: "Elite Funders",
      language: "en",
      country_codes: ["US"],
      transactions: {
        days_requested: 30,
      },
      //   webhook: 'https://sample-web-hook.com', // Replace with actual webhook URL
      redirect_uri: "https://efg-new-website-gray.vercel.app/apply/success",
    };

    const response = await plaidClient.linkTokenCreate(linkTokenCreateRequest);
    const linkToken = response.data.link_token;
    return NextResponse.json({ link_token: linkToken });
  } catch (error) {
    console.error("Error creating link token:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
