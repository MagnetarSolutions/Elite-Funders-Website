"use client";
import { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import BusinessType from "../../components/funnel/BusinessType";
import Layout from "@/components/layout/Layout";
import StepLoanAmount from "@/components/funnel/StepLoanAmount";
import Industry from "@/components/funnel/Industry";
import CreditScore from "@/components/funnel/CreditScore";
import StepMonthlyRevenue from "@/components/funnel/StepMonthlyRevenue";
import StepBankAccount from "@/components/funnel/StepBankAccount";
import StepFinancingPurpose from "@/components/funnel/StepFinancingPurpose";
import StepBusinessStart from "@/components/funnel/StepBusinessStart";
import StepCompanyInfo from "@/components/funnel/StepCompanyInfo";
import FinalStep from "@/components/funnel/FinalStep";
import { usePlaidLink } from "react-plaid-link";
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";
import {
  normalizeInputValue,
  updateFormData,
} from "../../utils/updateFormData";
import Preloader from "../../components/elements/Preloader";
import PDFForm from "@/app/application/page";
import { useFormStore } from "@/public/store/FormData";
import StepOwnerInfo from "@/components/funnel/StepOwnerInfo";
import { formatSSN, isValidSSN } from "@/utils/isValidSSN";
import { validateDate } from "@/utils/validateDate";
import axios from "axios";

let API = process.env.NEXT_PUBLIC_BASE_URL;

export default function Funnel() {
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

  const totalSteps = 13;
  const [prequalifiedAmount, setPrequalifiedAmount] = useState(0);
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      return savedFormData
        ? JSON.parse(savedFormData)
        : {
            businessType: data?.businessType || "Sole Proprietor",
            industry: data?.industry || "",
            amountNeeded: data?.amountNeeded || "",
            creditScore: data?.creditScore || "",
            monthlyRevenue: data?.monthlyRevenue || "",
            annualRevenue: "",
            hasBankAccount: data?.hasBankAccount || "",
            financingPurpose: data?.financingPurpose || "",
            businessStart: data?.businessStart || "",
            companyName: data?.companyName || "",
            email: data?.email || "",
            phoneNumber: data?.phoneNumber || "",
            fullName: data?.fullName || "",
            dbaName: data?.dbaName || "",
            fein: data?.fein || "",
            businessPhone: "",
            businessAddress: data?.businessAddress || "",
            city: data?.city || "",
            state: data?.state || "",
            zipCode: data?.zipCode || "",
            firstName: "",
            lastName: "",
            ownershipPercentage: data?.ownershipPercentage || "100",
            title: data?.title || "",
            dob: data?.dob || "",
            ownerAddress: data?.ownerAddress || "",
            ownerCity: data?.ownerCity || "",
            ownerState: data?.ownerState || "",
            ownerZipCode: data?.ownerZipCode || "",
            ownerFullName: data?.ownerFullName || "",
            ownerBirthDate: data?.ownerBirthDate || "",
            ownerSSN: data?.ownerSSN || "",
            ownerDriverLicense: data?.ownerDriverLicense || "",
            ownerDriverLicenseState: data?.ownerDriverLicenseState || "",
            ownerEmail: data?.ownerEmail || "",
            ownerCellPhone: data?.ownerCellPhone || data?.phoneNumber || "",
            ownerHomePhone: data?.ownerHomePhone || data?.phoneNumber || "",
            ownerStreetAddress: data?.ownerStreetAddress || "",
            sign: data?.sign || "",
            coApplicationOwnerShip: data?.coApplicationOwnerShip || "",
            OwnerShip: data?.OwnerShip || "",
            coApplicationSignature: data?.coApplicationSignature || "",
          };
    }
    return {};
  });
  const [errors, setErrors] = useState({});
  const [linkToken, setLinkToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [loading, setLoading] = useState(false); // Add loading state
  const router = useRouter();

  useLayoutEffect(() => {
    const newFormData = {
      ...formData,
      sign: sign,
    };
    setFormData(newFormData);
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(newFormData));
    }
  }, [sign]);

  useEffect(() => {
    const newFormData = {
      ...formData,
      coApplicationSignature: coApplicationSignature,
    };
    setFormData(newFormData);
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(newFormData));
    }
  }, [coApplicationSignature]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        setSign(savedFormData?.sign);
        setCoApplicationSignature(savedFormData?.coApplicationSignature);
      }
    }
  }, [sign, coApplicationSignature]);

  useEffect(() => {
    // if have formData in localStorage, update the state
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        updateNewFormData(JSON.parse(savedFormData));
      }
    }
  }, [sign, coApplicationSignature]);

  useEffect(() => {
    if (formData.monthlyRevenue) {
      const amount = calculatePrequalifiedAmount(formData.monthlyRevenue);
      setPrequalifiedAmount(amount);
    }
  }, [formData.monthlyRevenue]);

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
        console.log("Raw response:", text);
        const data = JSON.parse(text);
        console.log("Link token received:", data.link_token);
        setLinkToken(data.link_token);
      } catch (error) {
        console.error("Error fetching link token:", error);
      }
    };
    fetchLinkToken();
  }, []);

  const fetchAndEmailStatements = async (access_token) => {
    try {
      // use axios for fetch-and-email-statements post api request
      const { data } = await axios.post(
        `${API}/api/plaid/fetch-and-email-statements`,
        {
          access_token,
          email: "omar@thedynamic.dev",
          // email: "sonjoybarmon19@gmail.com",

          pageUrl: `${API}/application`,
        }
      );
      console.log("Statements fetched and emailed successfully:", data);
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

      // Fetch and email statements
      // setLoading(true);
      if (data.access_token) {
        setCurrentStep(13);
        localStorage.setItem("currentStep", 13);
        const res = await fetchAndEmailStatements(data.access_token);
      }

      // localStorage.setItem("currentStep", (currentStep + 1).toString());
    },
    [currentStep, formData.companyName]
  );

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onPlaidSuccess,
  });

  const calculatePrequalifiedAmount = (monthlyRevenue) => {
    const amount = parseFloat(monthlyRevenue) * 2.5;
    return Math.min(amount, 2000000); // Cap at 2 million
  };

  const handlePrevStep = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    localStorage.setItem("currentStep", prevStep.toString());

    // Scroll to top
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "ownerSSN") {
      const formattedInput = formatSSN(value);
      updateFormData(
        formData,
        setFormData,
        setErrors,
        "ownerSSN",
        formattedInput
      );
    } else {
      // Update the store data with the new value
      updateNewFormData({ [name]: value });
      updateFormData(formData, setFormData, setErrors, name, value);
    }
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    let formattedPhone = value;

    try {
      const phoneNumber = parsePhoneNumber(value, "US");
      if (phoneNumber) {
        formattedPhone = phoneNumber.format("NATIONAL");
      }
    } catch (error) {
      // If parsing fails, use the input value as is
    }

    updateNewFormData({ [name]: value });
    updateFormData(formData, setFormData, setErrors, name, value);
  };

  const getMaxHeight = (step) => {
    switch (step) {
      case 1:
        return "100%";
      case 2:
        return "450px";
      case 3:
        return "350px";
      case 4:
        return "500px";
      case 10:
        return "100%";
      case 9:
        console.log(currentStep, "CURRENT STEP!");
        return "56rem";
      case 11:
        console.log(currentStep, "CURRENT STEP!");
        return "100%";
      case 13:
        console.log(currentStep, "CURRENT STEP!");
        return "100%";
      default:
        return "34rem";
    }
  };

  // srcoll top function
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    const feinRegex = /^\d{2}-\d{7}$/;
    if (step === 3 && !formData.amountNeeded) {
      newErrors.amountNeeded = "Amount needed is required";
    }
    if (step === 5 && !formData.monthlyRevenue) {
      if (!formData.monthlyRevenue) {
        newErrors.monthlyRevenue = "Monthly estimated revenue is required";
      } else if (parseFloat(formData.monthlyRevenue) < 10000) {
        newErrors.monthlyRevenue =
          "Unfortunately Your business doesn't qualify for funding at this time";
      }
    }
    if (step === 6 && formData.hasBankAccount === "No") {
      newErrors.hasBankAccount = "Business bank account is required";
    }

    if (step === 8 && !formData.businessStart) {
      newErrors.businessStart = "Business start date is required";
    }
    if (step === 9) {
      if (!formData.companyName) {
        newErrors.companyName = "Company name is required";
      }
      if (!formData.email) {
        newErrors.email = "Email is required";
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone number is required";
      } else {
        try {
          if (!isValidPhoneNumber(formData.phoneNumber, "US")) {
            newErrors.phoneNumber = "Please enter a valid US phone number";
          }
        } catch (error) {
          newErrors.phoneNumber = "Please enter a valid US phone number";
        }
      }
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required";
      }
    }
    if (step === 10) {
      if (!formData.ownerFullName) {
        newErrors.ownerFullName = "Owner full name is required";

        scrollToTop();
      }

      if (!validateDate(formData.ownerBirthDate)) {
        newErrors.ownerBirthDate = "Owner must be at least 18 years old";

        scrollToTop();
      }

      if (!isValidSSN(data.ownerSSN)) {
        newErrors.ownerSSN = "Invalid SSN format.";

        scrollToTop();
      }

      // if (isValidSSN(formData.ownerSSN)) {
      //   newErrors.ownerSSN = "";
      // } else {
      //   newErrors.ownerSSN = "Invalid SSN format.";
      // }

      if (!formData.OwnerShip) {
        newErrors.OwnerShip = "required";
        scrollToTop();
      }
      if (!formData.ownerDriverLicense) {
        newErrors.ownerDriverLicense = "Driver license number is required";
        scrollToTop();
      }
      if (!formData.ownerDriverLicenseState) {
        newErrors.ownerDriverLicenseState = "Driver license state is required";
        scrollToTop();
      }
      if (!formData.ownerEmail) {
        newErrors.ownerEmail = "Owner email is required";
        scrollToTop();
      }
      if (!formData.ownerCellPhone) {
        newErrors.ownerCellPhone = "Owner cell phone is required";
        scrollToTop();
      }
      if (!formData.ownerStreetAddress) {
        newErrors.ownerStreetAddress = "Owner street address is required";
      }
      if (!formData.ownerCity) {
        newErrors.ownerCity = "Owner city is required";
      }
      if (!formData.ownerState) {
        newErrors.ownerState = "Owner state is required";
      }
      if (!formData.ownerZipCode) {
        newErrors.ownerZipCode = "Owner zip code is required";
      }
    }
    if (step === 11) {
      if (!formData.dbaName) {
        newErrors.dbaName = "DBA Name is required";
        scrollToTop();
      }
      if (!formData.fein) {
        newErrors.fein = "FEIN (Tax ID)/SSN is required";
        scrollToTop();
      } else if (!feinRegex.test(formData.fein)) {
        newErrors.fein = "FEIN must be in the format XX-XXXXXXX";
        scrollToTop();
      }
      if (!formData.businessPhone) {
        newErrors.businessPhone = "Business Phone Number is required";
        scrollToTop();
      }
      if (!formData.businessAddress) {
        newErrors.businessAddress = "Business Address is required";
      }
      if (!formData.city) {
        newErrors.city = "City is required";
      }
      if (!formData.state) {
        newErrors.state = "State is required";
      }
      if (!formData.zipCode) {
        newErrors.zipCode = "Zip Code is required";
      }
      if (sign === "") {
        newErrors.signature = "Primary signature is required";
      }

      if (data.OwnerShip <= 49 && !coApplicationSignature) {
        newErrors.signature2 = "Co-owner signature is required";
      }
    }
    if (step === 12) {
    }
    console.log(newErrors, "NEW ERRORS");
    setErrors(newErrors);
    console.log(newErrors, "NEW ERRORS");
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    const isValid = validateStep(currentStep);
    if (isValid) {
      if (currentStep === 13) {
        if (ready) {
          open();
        } else {
          console.error("Plaid Link is not ready");
        }
      } else {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        localStorage.setItem("currentStep", nextStep.toString());

        // Scroll to top
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
        }
      }
    } else {
      console.log("Validation errors:", errors);
    }
  };
  useEffect(() => {
    setProgressPercentage((currentStep / totalSteps) * 100);
  }, [currentStep, totalSteps]);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (currentStep === 11) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, totalSteps]);

  // useEffect(() => {
  //   setProgressPercentage((currentStep / totalSteps) * 100);
  // }, [currentStep, totalSteps]);

  useLayoutEffect(() => {
    if (currentStep === 12) {
      // Save formData to local storage
      localStorage.setItem("formData", JSON.stringify(formData));
      router.push("/plaid");
    }
  }, [currentStep, router, formData]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Layout isFunnel={1} footerStyle={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: "24rem",
            maxHeight: getMaxHeight(currentStep),
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
              maxHeight: getMaxHeight(currentStep),
              maxWidth: "72rem",
              minWidth: "23rem",
              borderRadius: "25px",
              boxShadow: "0 4px 4px 4px rgba(0, 0, 0, 0.05)",
            }}>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}>
                <span className="progress-bar-text">{`${Math.round(
                  progressPercentage
                )}%`}</span>
              </div>
            </div>
            <br />
            <h4 style={{ color: " #7D7D7D" }}> Business Funding </h4>
            <br />
            {currentStep === 1 && (
              <BusinessType
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <Industry
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 3 && (
              <StepLoanAmount
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 4 && (
              <CreditScore
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 5 && (
              <StepMonthlyRevenue
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 6 && (
              <StepBankAccount
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 7 && (
              <StepFinancingPurpose
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 8 && (
              <StepBusinessStart
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 9 && (
              <StepCompanyInfo
                formData={formData}
                handleChange={handleChange}
                handlePhoneChange={handlePhoneChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                errors={errors}
              />
            )}
            {currentStep === 10 && (
              <StepOwnerInfo
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                handlePhoneChange={handlePhoneChange}
                errors={errors}
                setErrors={setErrors}
                setCoApplicationSignature={setCoApplicationSignature}
                coApplicationSignature={coApplicationSignature}
              />
            )}
            {currentStep === 11 && (
              <FinalStep
                formData={formData}
                setErrors={setErrors}
                setFormData={setFormData}
                handleChange={handleChange}
                handlePhoneChange={handlePhoneChange}
                handlePrevStep={handlePrevStep}
                setCoApplicationSignature={setCoApplicationSignature}
                coApplicationSignature={coApplicationSignature}
                errors={errors}
                prequalifiedAmount={prequalifiedAmount}
              />
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: "4rem",
                fontWeight: "800",
              }}>
              {currentStep !== 1 && (
                <button onClick={handlePrevStep}>Back</button>
              )}
              {currentStep !== 12 && progressPercentage !== 100 && (
                <button onClick={handleNextStep}>Continue</button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
