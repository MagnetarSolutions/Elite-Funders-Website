"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

export default function ApplicationFormPage() {
  const [windowDimension, setWindowDimension] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  return (
    <Layout isFunnel={1} footerStyle={1}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            maxWidth: "1200px",
            height: "850px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://snow-rodent-caraway.heyflow.site/elite-funders-application"
            width="100%"
            height="850"
            style={{
              border: "none",
              borderRadius: "8px",
            }}
            title="Elite Funders Application"
          />
        </div>
      </div>
    </Layout>
  );
}
