import "./sonchoy.css";
// import "./sonchoy-responsive.css";
import "./pdfForm.css";
import "react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { syne, dm_sans } from "@/lib/font";

export const metadata = {
  title: "Elite-Funders",
  description: "Small Business Loans in Minutes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
