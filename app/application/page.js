"use client";
import { useFormStore } from "@/public/store/FormData";
import Image from "next/image";
import Link from "next/link";
import { useState, useLayoutEffect, useEffect } from "react";
import { getFormData } from "@/utils/getFormData";
const formData = getFormData();
export function escapeHtml(unsafe) {
  if (typeof unsafe !== "string") {
    return "";
  }
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// export const htmlContent = `
// <div class="container pdf_form_wrapper">
//   <div class="mb-1">
//     <a href="/" class="d-flex align-items-center">
//       <img width="68" height="68" src="/assets/images/resources/efg.svg" alt="" />
//       <span class="elite-funding__logo mobileLogo"> Elite Funders</span>
//     </a>
//   </div>
//   <div>
//     <div>
//       <p class="text-center main_title">Business Loan Application</p>
//     </div>
//     <div class="form">
//       <div class="py-2 form_title">
//         <h6 class="text-center">COMPANY INFORMATION</h6>
//       </div>
//       <div class="input_wrapper">
//         <div class="width_60 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Legal Name of Entity:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.companyName || ""
//             )}" disabled />
//           </div>
//         </div>
//         <div class="width_40 leftBorder d-flex gap-2 align-items-center topBorder input_content">
//           <div class="input_title">
//             <strong>Business Inception Date:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.businessStart || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title text-nowrap">
//             <strong>Federal Tax ID (EIN):</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.fein || ""
//             )}" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder input_content">
//           <div class="input_title text-nowrap">
//             <strong>State Where Business Was Formed:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.state || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Legal Structure:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.businessType || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex flexColumn gap-2 flex-nowrap align-items-center">
//           <div class="d-flex fullWidth align-items-center gap-2 input_content">
//             <div class="input_title text-nowrap">
//               <strong>Full Time Employees:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//           <div class="d-flex fullWidth align-items-center gap-2 topBorder input_content">
//             <div class="input_title text-nowrap">
//               <strong>Part Time Employees:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Home Based Business:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Business Address:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.businessAddress || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth flexColumn d-flex gap-2 flex-nowrap align-items-center">
//           <div class="d-flex align-items-center gap-2 fullWidth input_content">
//             <div class="input_title text-nowrap">
//               <strong>City:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.city || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>State:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.state || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>ZIP Code:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.zipCode || ""
//               )}" disabled />
//             </div>
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Estimated Monthly Revenue:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.monthlyRevenue || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex flexColumn gap-2 flex-nowrap align-items-center">
//           <div class="d-flex align-items-center gap-2 input_content fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Phone:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.phoneNumber || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 input_content topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Ext:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Website:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="width_60 flexColumn d-flex gap-2 flex-nowrap align-items-center">
//           <div class="d-flex align-items-center gap-2 input_content fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Ownership of Business Location:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.ownerAddress || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 input_content topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Rented:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 input_content topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Owned by Business:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//         </div>
//         <div class="width_40 leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>If Owned, Property Value:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownershipPercentage || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="width_60 flexColumn d-flex gap-2 flex-nowrap align-items-center">
//           <div class="d-flex align-items-center gap-2 input_content fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Landlord Name:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>Landlord Phone:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//         </div>
//         <div class="width_40 leftBorder d-flex gap-2 align-items-center topBorder fullWidth">
//           <div class="input_title">
//             <strong>Monthly Rent:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="d-flex align-items-center gap-2 input_content">
//           <div class="input_title text-nowrap">
//             <strong>Landlord Type:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="d-flex align-items-center gap-2 topBorder input_content">
//           <div class="input_title text-nowrap">
//             <strong>Management Company</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="d-flex align-items-center gap-2 topBorder input_content">
//           <div class="input_title text-nowrap">
//             <strong>Sole Ownership</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="d-flex align-items-center gap-2 topBorder input_content">
//           <div class="input_title text-nowrap">
//             <strong>Corporation</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="d-flex align-items-center gap-2 topBorder input_content">
//           <div class="input_title text-nowrap">
//             <strong>Other:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <!-- business owner start here -->
//       <div class="py-2 form_title">
//         <h6 class="text-center">BUSINESS OWNER</h6>
//       </div>
//       <div class="input_wrapper">
//         <div class="width_60 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Name:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerFullName || ""
//             )}" disabled />
//           </div>
//         </div>
//         <div class="width_40 leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Date of Birth:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerBirthDate || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-100 d-flex flexColumn gap-2 flex-nowrap justify-content-between align-items-center">
//           <div class="d-flex align-items-center gap-2 input_content">
//             <div class="input_title text-nowrap">
//               <strong>City:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.ownerCity || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>State:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.ownerState || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>ZIP Code:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.ownerZipCode || ""
//               )}" disabled />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Home Phone:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerHomePhone || ""
//             )}" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Mobile Phone:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerCellPhone || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 d-flex fullWidth gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>E-mail:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerEmail || ""
//             )}" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Social Security #:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerSSN || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex gap-2 align-items-center input_content">
//           <div class="input_title">
//             <strong>Driver's License #:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.ownerDriverLicense || ""
//             )}" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth flexColumn d-flex gap-2 flex-nowrap align-items-center leftBorder topBorder leftZero">
//           <div class="d-flex fullWidth align-items-center gap-2 input_content">
//             <div class="input_title text-nowrap">
//               <strong>Driver's License State:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.ownerDriverLicenseState || ""
//               )}" disabled />
//             </div>
//           </div>
//           <div class="d-flex fullWidth align-items-center gap-2 leftBorder topBorder">
//             <div class="input_title text-nowrap">
//               <strong>Ownership%:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.OwnerShip || ""
//               )}%" disabled />
//             </div>
//           </div>
//         </div>
//       </div>
//       <!-- CO-APPLICANT start here -->
//       <div class="py-2 form_title">
//         <h6 class="text-center">CO-APPLICANT</h6>
//       </div>
//       <div class="input_wrapper">
//         <div class="width_60 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Name:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="width_40 leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Date of Birth:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-100 d-flex flexColumn gap-2 flex-nowrap justify-content-between align-items-center">
//           <div class="d-flex align-items-center gap-2 input_content">
//             <div class="input_title text-nowrap">
//               <strong>City:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>State:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//           <div class="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
//             <div class="input_title text-nowrap">
//               <strong>ZIP Code:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Home Phone:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Mobile Phone:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 d-flex fullWidth gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>E-mail:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//           <div class="input_title">
//             <strong>Social Security #:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-50 fullWidth d-flex gap-2 align-items-center input_content">
//           <div class="input_title">
//             <strong>Driver's License #:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//         <div class="w-50 fullWidth flexColumn d-flex gap-2 flex-nowrap align-items-center leftBorder topBorder leftZero">
//           <div class="d-flex fullWidth align-items-center gap-2 input_content">
//             <div class="input_title text-nowrap">
//               <strong>Driver's License State:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="" disabled />
//             </div>
//           </div>
//           <div class="d-flex fullWidth align-items-center gap-2 leftBorder topBorder">
//             <div class="input_title text-nowrap">
//               <strong>Ownership%:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.coOwnership || ""
//               )}%" disabled />
//             </div>
//           </div>
//         </div>
//       </div>
//       <!-- LOAN REQUEST start here -->
//       <div class="py-2 form_title">
//         <h6 class="text-center">LOAN REQUEST</h6>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title text-nowrap">
//             <strong>Requested Funding Amount:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="" disabled />
//           </div>
//         </div>
//       </div>
//       <div class="input_wrapper">
//         <div class="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
//           <div class="input_title">
//             <strong>Use of Funds:</strong>
//           </div>
//           <div>
//             <input type="text" class="pdf_form_input" value="${escapeHtml(
//               formData?.useOfFunds || ""
//             )}" disabled />
//           </div>
//         </div>
//       </div>
//       <!-- CERTIFICATION AND AGREEMENT start here -->
//       <div class="py-2 form_title">
//         <h6 class="text-center">CERTIFICATION AND AGREEMENT</h6>
//       </div>
//       <div class="peragraph">
//         By signing and submitting to Elite Funding Group LLC DBA "Elite
//         Funders" this Business Loan Application ("Application"), each of the
//         undersigned certifies that (i) I am authorized to apply for business
//         financing on behalf of the entity identified above in the Company
//         Information section, (ii) the information provided within this
//         Application is true and accurate and (iii) I will promptly notify
//         Elite Funding Group of any material changes to such information.
//         This Application must be accompanied by additional supporting
//         documents and information as directed by a funder in order to be
//         considered for approval. If this Application is approved, the funder
//         may be Elite Funders, LLC or a third-party provider. By submitting
//         this Application, each of the undersigned authorizes Elite Funders,
//         LLC, and its agents, assignees and/or third-party providers to make
//         all inquiries deemed necessary to verify the accuracy of the
//         information provided in this Application (including requesting
//         business and personal credit bureau reports from credit reporting
//         agencies and other sources). Each of the undersigned agrees and
//         understands that Elite Funders, LLC will retain this Application and
//         all supporting documents and information whether or not this
//         Application is approved.
//       </div>
//       <div>
//         <div class="input_wrapper2">
//           <div class="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
//             <div class="input_title">
//               <strong>Business Owner Signature:</strong>
//             </div>
//             <div>
//               <img src="${escapeHtml(
//                 formData?.sign || ""
//               )}" alt="signature" width="150" height="50" class="mt-1" />
//             </div>
//           </div>
//           <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//             <div class="input_title">
//               <strong>Co-Applicant Signature:</strong>
//             </div>
//             <div>
//               <img src="${escapeHtml(
//                 formData?.coApplicationSignature || ""
//               )}" alt="signature" width="150" height="50" class="mt-1" />
//             </div>
//           </div>
//         </div>
//         <div class="input_wrapper2">
//           <div class="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content topBorder">
//             <div class="input_title">
//               <strong>Title:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.title || "Owner"
//               )}" disabled />
//             </div>
//           </div>
//           <div class="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
//             <div class="input_title">
//               <strong>Title:</strong>
//             </div>
//             <div>
//               <input type="text" class="pdf_form_input" value="${escapeHtml(
//                 formData?.coTitle || "Co-Owner"
//               )}" disabled />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// `;
const PDFForm = () => {
  const { data: globalFormData } = useFormStore();
  const [formData, setFormData] = useState(globalFormData || {});

  useEffect(() => {
    setFormData(globalFormData);
  }, [globalFormData]);

  useEffect(() => {
    // Retrieve formData from local storage
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  //   fetch("/api/generatePdf", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       formData: {
  //         companyName: "Example Company",
  //         businessStart: "01/01/2020",
  //         fein: "123456789",
  //         state: "CA",
  //         businessType: "LLC",
  //         ownerFullName: "John Doe",
  //         ownerBirthDate: "01/01/1980",
  //         ownerCity: "Los Angeles",
  //         ownerState: "CA",
  //         ownerZipCode: "90001",
  //         ownerHomePhone: "123-456-7890",
  //         ownerCellPhone: "098-765-4321",
  //         ownerEmail: "john.doe@example.com",
  //         ownerSSN: "123-45-6789",
  //         ownerDriverLicense: "D1234567",
  //         ownerDriverLicenseState: "CA",
  //         OwnerShip: "100",
  //         useOfFunds: "Business Expansion",
  //         sign: "signature-url",
  //         coApplicationSignature: "co-signature-url",
  //         title: "Owner",
  //         coTitle: "Co-Owner",
  //       },
  //       recipientEmail: "omar@thedynamic.dev", // Replace with the actual recipient email
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));

  return (
    <div className="container pdf_form_wrapper">
      {/* <button onClick={sendPDFToEmail}>Send Pdf</button> */}
      <div className="mb-1">
        <Link href="/" className="d-flex align-items-center">
          <Image
            width="68"
            height="68"
            src="/assets/images/resources/efg.svg"
            alt=""
          />
          <span className="elite-funding__logo mobileLogo"> Elite Funders</span>
        </Link>
      </div>
      <div>
        <div>
          <p className="text-center main_title">Business Loan Application</p>
        </div>
        <div className="form">
          <div className="py-2 form_title">
            <h6 className="text-center">COMPANY INFORMATION</h6>
          </div>
          <div className="input_wrapper">
            <div className="width_60 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Legal Name of Entity:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.companyName || ""}
                  disabled
                />
              </div>
            </div>
            <div className="width_40 leftBorder d-flex gap-2 align-items-center topBorder input_content">
              <div className="input_title">
                <strong>Business Inception Date:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.businessStart || ""}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title text-nowrap">
                <strong>Federal Tax ID (EIN):</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.fein}
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder input_content">
              <div className="input_title text-nowrap">
                <strong>State Where Business Was Formed:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.state}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Legal Structure:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.businessType}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex flexColumn gap-2 flex-nowrap align-items-center">
              <div className="d-flex fullWidth align-items-center gap-2 input_content">
                <div className="input_title text-nowrap">
                  <strong>Full Time Employees:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex fullWidth align-items-center gap-2 topBorder input_content">
                <div className="input_title text-nowrap">
                  <strong>Part Time Employees:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Home Based Business:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Business Address:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.businessAddress}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="input_wrapper">
            <div className="w-50 fullWidth flexColumn d-flex gap-2 flex-nowrap align-items-center">
              <div className="d-flex align-items-center gap-2 fullWidth input_content">
                <div className="input_title text-nowrap">
                  <strong>City:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.city}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>State:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.state}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>ZIP Code:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.zipCode}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Estimated Monthly Revenue:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.monthlyRevenue}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex flexColumn gap-2 flex-nowrap align-items-center">
              <div className="d-flex align-items-center gap-2 input_content fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Phone:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.phoneNumber}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 input_content topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Ext:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Website:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={""}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="width_60 flexColumn d-flex gap-2 flex-nowrap align-items-center">
              <div className="d-flex align-items-center gap-2 input_content fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Ownership of Business Location:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.ownerAddress}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 input_content topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Rented:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 input_content topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Owned by Business:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="width_40 leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>If Owned, Property Value:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownershipPercentage}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="width_60 d-flex flexColumn gap-2 flex-nowrap align-items-center">
              <div className="d-flex align-items-center gap-2 input_content fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Landlord Name:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>Landlord Phone:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="width_40 leftBorder d-flex gap-2 align-items-center topBorder fullWidth">
              <div className="input_title">
                <strong>Monthly Rent:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={""}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="d-flex align-items-center gap-2 input_content">
              <div className="input_title text-nowrap">
                <strong>Landlord Type:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 topBorder input_content">
              <div className="input_title text-nowrap">
                <strong>Management Company</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>{" "}
            <div className="d-flex align-items-center gap-2 topBorder input_content">
              <div className="input_title text-nowrap">
                <strong>Sole Ownership</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 topBorder input_content">
              <div className="input_title text-nowrap">
                <strong>Corporation</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 topBorder input_content">
              <div className="input_title text-nowrap">
                <strong>Other:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
          </div>

          {/* business owner start here */}
          <div className="py-2 form_title">
            <h6 className="text-center">BUSINESS OWNER</h6>
          </div>
          <div className="input_wrapper">
            <div className="width_60 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Name:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerFullName}
                  disabled
                />
              </div>
            </div>
            <div className="width_40 leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Date of Birth:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerBirthDate}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-100 d-flex flexColumn gap-2 flex-nowrap justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-2 input_content">
                <div className="input_title text-nowrap">
                  <strong>City:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.ownerCity}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>State:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.ownerState}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>ZIP Code:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.ownerZipCode}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Home Phone:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerHomePhone}
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Mobile Phone:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerCellPhone}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 d-flex fullWidth gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>E-mail:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerEmail}
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Social Security #:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerSSN}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex gap-2 align-items-center input_content">
              <div className="input_title">
                <strong>Driver's License #:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.ownerDriverLicense}
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth flexColumn d-flex gap-2 flex-nowrap align-items-center leftBorder topBorder leftZero">
              <div className="d-flex fullWidth align-items-center gap-2 input_content">
                <div className="input_title text-nowrap">
                  <strong>Driver's License State:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.ownerDriverLicenseState}
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex fullWidth align-items-center gap-2 leftBorder topBorder  ">
                <div className="input_title text-nowrap">
                  <strong>Ownership%:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={`${formData?.OwnerShip}%`}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CO-APPLICANT start here */}
          <div className="py-2 form_title">
            <h6 className="text-center">CO-APPLICANT</h6>
          </div>
          <div className="input_wrapper">
            <div className="width_60 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Name:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="width_40 leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Date of Birth:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={""}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-100 d-flex flexColumn gap-2 flex-nowrap justify-content-between align-items-center">
              <div className="d-flex  align-items-center gap-2 input_content">
                <div className="input_title text-nowrap">
                  <strong>City:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>State:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 leftBorder topBorder fullWidth">
                <div className="input_title text-nowrap">
                  <strong>ZIP Code:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Home Phone:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Mobile Phone:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={""}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 d-flex fullWidth gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>E-mail:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
              <div className="input_title">
                <strong>Social Security #:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={""}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Driver's License #:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={""}
                  disabled
                />
              </div>
            </div>
            <div className="w-50 fullWidth flexColumn d-flex gap-2 flex-nowrap align-items-center leftBorder topBorder leftZero">
              <div className="d-flex fullWidth align-items-center gap-2 input_content">
                <div className="input_title text-nowrap">
                  <strong>Driver's License State:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex fullWidth align-items-center gap-2 leftBorder topBorder">
                <div className="input_title text-nowrap">
                  <strong>Ownership%:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={`${formData?.co}%`}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          {/* LOAN REQUEST start here */}
          <div className="py-2 form_title">
            <h6 className="text-center">LOAN REQUEST</h6>
          </div>
          <div className="input_wrapper">
            <div className="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title text-nowrap">
                <strong>Requested Funding Amount:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value=""
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="input_wrapper">
            <div className="w-100 d-flex gap-2 flex-nowrap align-items-center input_content">
              <div className="input_title">
                <strong>Use of Funds:</strong>
              </div>
              <div>
                <input
                  type="text"
                  className="pdf_form_input"
                  value={formData?.useOfFunds || ""}
                  disabled
                />
              </div>
            </div>
          </div>

          {/* CERTIFICATION AND AGREEMENT start here */}
          <div className="py-2 form_title">
            <h6 className="text-center">CERTIFICATION AND AGREEMENT</h6>
          </div>

          <div className="peragraph">
            By signing and submitting to Elite Funding Group LLC DBA "Elite
            Funders" this Business Loan Application ("Application"), each of the
            undersigned certifies that (i) I am authorized to apply for business
            financing on behalf of the entity identified above in the Company
            Information section, (ii) the information provided within this
            Application is true and accurate and (iii) I will promptly notify
            Elite Funding Group of any material changes to such information.
            This Application must be accompanied by additional supporting
            documents and information as directed by a funder in order to be
            considered for approval. If this Application is approved, the funder
            may be Elite Funders, LLC or a third-party provider. By submitting
            this Application, each of the undersigned authorizes Elite Funders,
            LLC, and its agents, assignees and/or third-party providers to make
            all inquiries deemed necessary to verify the accuracy of the
            information provided in this Application (including requesting
            business and personal credit bureau reports from credit reporting
            agencies and other sources). Each of the undersigned agrees and
            understands that Elite Funders, LLC will retain this Application and
            all supporting documents and information whether or not this
            Application is approved.
          </div>

          <div>
            <div className="input_wrapper2">
              <div className="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content">
                <div className="input_title">
                  <strong>Business Owner Signature:</strong>
                </div>
                <div>
                  <Image
                    src={formData?.sign || ""}
                    alt="signature"
                    width={150}
                    height={50}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
                <div className="input_title">
                  <strong>Co-Applicant Signature:</strong>
                </div>
                <div>
                  <Image
                    src={formData?.coApplicationSignature || ""}
                    alt="signature"
                    width={150}
                    height={50}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="input_wrapper2">
              <div className="w-50 fullWidth d-flex gap-2 flex-nowrap align-items-center input_content topBorder">
                <div className="input_title">
                  <strong>Title:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.title || "Owner"}
                    disabled
                  />
                </div>
              </div>
              <div className="w-50 fullWidth leftBorder d-flex gap-2 align-items-center topBorder">
                <div className="input_title">
                  <strong>Title:</strong>
                </div>
                <div>
                  <input
                    type="text"
                    className="pdf_form_input"
                    value={formData?.coTitle || "Co-Owner"}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFForm;
