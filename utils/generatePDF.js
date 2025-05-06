import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export default async function generatePDF(htmlContent, outputPath) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the content directly
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    // Generate PDF and save to file
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
    });

    await browser.close();
  } catch (error) {
    console.error("Puppeteer error:", error);
    throw error;
  }
}
