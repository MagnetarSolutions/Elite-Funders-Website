"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import FunnelHeader from "./header/FunnelHeader";
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"]; // Define the libraries array

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  wrapperCls,
  isFunnel,
}) {
  const [scroll, setScroll] = useState(0);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };
  // const handleMobileMenu = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setMobileMenu(!isMobileMenu);
  //   !isMobileMenu
  //     ? document.body.classList.add("mobile-menu-visible")
  //     : document.body.classList.remove("mobile-menu-visible");

  //   alert("button is working");
  // };

  // useEffect(() => {
  //   if (isMobileMenu) {
  //     document.body.classList.add("mobile-menu-visible");
  //   } else {
  //     document.body.classList.remove("mobile-menu-visible");
  //   }
  // }, [isMobileMenu]);

  // Popup
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup(!isPopup);

  // Sidebar
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!isSidebar);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
        {!headerStyle && !isFunnel && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {!isFunnel ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}

        {isFunnel ? (
          <FunnelHeader
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}

        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        <LoadScript
          googleMapsApiKey="KvCL4yVpUKEpl34N7D-WZtePUhc="
          libraries={libraries} // Use the libraries array here
        >
          {children}
        </LoadScript>
        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
        {/* {footerStyle == 2 ? <Footer2 /> : null}
        {footerStyle == 3 ? <Footer3 /> : null}
        {footerStyle == 4 ? <Footer4 /> : null}
        {footerStyle == 5 ? <Footer5 /> : null} */}
      </div>
      <BackToTop scroll={scroll} />
    </>
  );
}
