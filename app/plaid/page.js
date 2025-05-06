"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";
import Preloader from "../../components/elements/Preloader";
import Layout from "../../components/layout/Layout";
import { useFormStore } from "@/public/store/FormData";

let API = process.env.NEXT_PUBLIC_BASE_URL;

export default function PlaidPage() {
  const [linkToken, setLinkToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    data,
    updateNewFormData,
    coApplicationSignature,
    setCoApplicationSignature,
    setSign,
    sign,
    currentStep,
    setCurrentStep,
  } = useFormStore();

  useEffect(() => {
    const fetchLinkToken = async () => {
      try {
        const response = await fetch(`${API}/api/plaid/create-link-token`, {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const data = JSON.parse(text);
        setLinkToken(data.link_token);
      } catch (error) {
        console.error("Error fetching link token:", error);
      }
    };
    fetchLinkToken();
  }, []);

  const fetchAndEmailStatements = async (access_token) => {
    try {
      const formData = {
        ownerFullName: data.ownerFullName,
        ownerBirthDate: data.ownerBirthDate,
        ownerSSN: data.ownerSSN,
        ownerDriverLicense: data.ownerDriverLicense,
        ownerDriverLicenseState: data.ownerDriverLicenseState,
        ownerEmail: data.ownerEmail,
        ownerCellPhone: data.ownerCellPhone,
        ownerHomePhone: data.ownerHomePhone,
        ownerStreetAddress: data.ownerStreetAddress,
        ownerCity: data.ownerCity,
        ownerState: data.ownerState,
        ownerZipCode: data.ownerZipCode,
        companyName: data.companyName,
        businessStart: data.businessStart,
        fein: data.fein,
        state: data.state,
        businessType: data.businessType,
        fullTimeEmployees: data.fullTimeEmployees,
        partTimeEmployees: data.partTimeEmployees,
        homeBasedBusiness: data.homeBasedBusiness,
        businessAddress: data.businessAddress,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        monthlyRevenue: data.monthlyRevenue,
        phoneNumber: data.phoneNumber,
        ext: data.ext,
        email: data.email,
        socialSecurityNumber: data.socialSecurityNumber,
        driversLicenseNumber: data.driversLicenseNumber,
        driversLicenseState: data.driversLicenseState,
        ownershipPercentage: data.ownershipPercentage,
        requestedFundingAmount: data.requestedFundingAmount,
        useOfFunds: data.useOfFunds,
        sign: data.sign,
        coApplicationSignature: data.coApplicationSignature,
        title: data.title,
        coTitle: data.coTitle,
      };

      const { data: responseData } = await axios.post(
        `${API}/api/plaid/fetch-and-email-statements`,
        {
          access_token,
          email: "omar@thedynamic.dev",
          pageUrl: `${API}/application`,
          formData,
        }
      );
      console.log("Statements fetched and emailed successfully:", responseData);
    } catch (error) {
      console.error("Error fetching and emailing statements:", error);
    }
  };

  const onPlaidSuccess = useCallback(
    async (public_token, metadata) => {
      console.log("Plaid Link success", public_token, metadata);
      const response = await fetch(`${API}/api/plaid/exchange-public-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_token }),
      });
      const data = await response.json();

      setAccessToken(data.access_token);

      if (data.access_token) {
        const res = await fetchAndEmailStatements(data.access_token);
        router.push("/application");
      }
    },
    [router]
  );

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onPlaidSuccess,
  });

  if (loading) {
    return <Preloader />;
  }

  return (
    <Layout isFunnel={1} footerStyle={1}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          minHeight: "24rem",
          maxHeight: "100%",
          height: "100%",
          padding: "20px 0",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            paddingLeft: "32px",
            paddingRight: "32px",
            margin: "2rem",
            position: "relative",
            maxHeight: "100%",
            maxWidth: "72rem",
            minWidth: "23rem",
            borderRadius: "25px",
            boxShadow: "0 4px 4px 4px rgba(0, 0, 0, 0.05)",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <h2>Connect Your Bank Account</h2>
            <p>
              Please connect your bank account to proceed with the application.
            </p>
            {ready ? (
              <button
                style={{
                  marginLeft: "28%",
                  marginRight: "28%",
                  marginTop: "2rem",
                  padding: "1rem",
                  borderRadius: "10px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => open()}
                disabled={!ready}>
                Connect Bank Account
              </button>
            ) : (
              <p>Loading bank connection...</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
