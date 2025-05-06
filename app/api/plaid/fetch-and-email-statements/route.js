import { NextResponse } from "next/server";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
      "Plaid-Version": "2020-09-14",
    },
  },
});

const plaidClient = new PlaidApi(configuration);
const isDev = process.env.NODE_ENV !== "production";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmailWithAttachments(to, subject, text, attachments) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

async function generatePDF(htmlContent) {
  try {
    const browser = await puppeteer.launch({
      args: isDev ? [] : chromium.args,
      defaultViewport: isDev ? null : chromium.defaultViewport,
      executablePath: isDev
        ? puppeteer.executablePath()
        : await chromium.executablePath(),
      headless: isDev ? false : chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle2" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    return pdfBuffer;
  } catch (error) {
    console.error("Puppeteer error:", error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const { access_token, email } = await request.json();
    console.log(access_token, email);
    console.log("Fetching statements and transactions");
    if (!access_token || !email) {
      return NextResponse.json(
        { error: "Access token and email are required" },
        { status: 400 }
      );
    }

    const listRequest = {
      access_token: access_token,
    };

    let statements;

    if (listRequest) {
      const listResponse = await plaidClient.statementsList(listRequest);
      const accounts = listResponse.data.accounts;
      statements = accounts[0]?.statements || [];

      if (statements.length === 0) {
        return NextResponse.json(
          { error: "No statements found" },
          { status: 404 }
        );
      }

      // Download all statements
      const attachments = await Promise.all(
        statements.map(async (statement) => {
          const downloadRequest = {
            access_token: access_token,
            statement_id: statement.statement_id,
          };
          const downloadResponse = await plaidClient.statementsDownload(
            downloadRequest,
            { responseType: "arraybuffer" }
          );
          const pdfBuffer = Buffer.from(downloadResponse.data);
          return {
            filename: `${statement.year}-${statement.month}-statement.pdf`,
            content: pdfBuffer,
          };
        })
      );

      // Fetch transactions from the last month to the current date
      const endDate = new Date().toISOString().split("T")[0];
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      const formattedStartDate = startDate.toISOString().split("T")[0];

      const transactionsRequest = {
        access_token: access_token,
        start_date: formattedStartDate,
        end_date: endDate,
      };

      const transactionsResponse = await plaidClient.transactionsGet(
        transactionsRequest
      );
      const transactions = transactionsResponse.data.transactions;

      const transactionsPerPage = 50; // Number of transactions per page
      const totalPages = Math.ceil(transactions.length / transactionsPerPage);

      let transactionsHtml = `
        <html>
          <head>
            <title>Transactions</title>
            <style>
              .page-break { page-break-after: always; }
            </style>
          </head>
          <body>
            <h1>Transactions</h1>
      `;

      for (let page = 0; page < totalPages; page++) {
        const start = page * transactionsPerPage;
        const end = start + transactionsPerPage;
        const transactionsPage = transactions.slice(start, end);

        transactionsHtml += `
          <table border="1" cellpadding="5" cellspacing="0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              ${transactionsPage
                .map(
                  (transaction) => `
                <tr>
                  <td>${transaction.date}</td>
                  <td>${transaction.name}</td>
                  <td>${transaction.amount}</td>
                  <td>${transaction.category.join(", ")}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
          ${page < totalPages - 1 ? '<div class="page-break"></div>' : ""}
        `;
      }

      transactionsHtml += `
          </body>
        </html>
      `;

      // Generate PDF from HTML
      const transactionsPdfBuffer = await generatePDF(transactionsHtml);

      // Add transactions PDF as an attachment
      attachments.push({
        filename: "transactions.pdf",
        content: transactionsPdfBuffer,
      });

      await sendEmailWithAttachments(
        email,
        "Your Requested Statements and Transactions",
        "Please find your requested statements and transactions attached.",
        attachments
      );

      return NextResponse.json({
        message: "Statements and transactions sent successfully",
      });
    } else {
      console.error(
        `Unexpected response format: ${listResponse}`,
        error instanceof Error ? error.message : String(error)
      );
    }
  } catch (error) {
    console.error(
      "Error in fetch-and-email-statements:",
      error instanceof Error ? error.message : String(error)
    );
    return NextResponse.json(
      { error: "Failed to fetch and email statements and transactions" },
      { status: 500 }
    );
  }
}
