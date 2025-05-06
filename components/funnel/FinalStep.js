import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import { LoadScript, Autocomplete } from "@react-google-maps/api";

import SignatureCanvas from "react-signature-canvas";
import { useFormStore } from "@/public/store/FormData";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const libraries = ["places"];
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
import Confetti from "react-confetti";
import Script from "react-load-script";

export default function FinalStep({
  setErrors, // Ensure setErrors is received as a prop
  handleChange,
  setFormData,
  formData,
  handlePhoneChange,
  prequalifiedAmount,
  errors,
}) {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const addressInputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const primarySignatureRef = useRef(null);
  const coOwnerSignatureRef = useRef(null);

  const {
    data,
    updateFormData,
    updateNewFormData,
    setSign,
    setCoApplicationSignature,
  } = useFormStore();

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const addressComponents = place.address_components;

    const addressData = {
      businessAddress: "",
      city: "",
      state: "",
      zipCode: "",
    };

    addressComponents.forEach((component) => {
      const types = component.types;
      if (types.includes("street_number")) {
        addressData.businessAddress = `${component.long_name} ${addressData.businessAddress}`;
      }
      if (types.includes("route")) {
        addressData.businessAddress += ` ${component.short_name}`;
      }
      if (types.includes("locality")) {
        addressData.city = component.long_name;
      }
      if (types.includes("administrative_area_level_1")) {
        addressData.state = component.short_name;
      }
      if (types.includes("postal_code")) {
        addressData.zipCode = component.long_name;
      }
    });

    console.log("Parsed Address Data:", addressData);

    // Update all address fields in a single call to setFormData
    updateFormData(
      formData,
      "businessAddress",
      addressData.businessAddress.trim()
    );
    // Update all address fields in a single call to setFormData
    updateNewFormData({
      businessAddress: addressData.businessAddress.trim(),
      city: addressData.city,
      state: addressData.state,
      zipCode: addressData.zipCode,
    });
    setFormData((prevFormData) => ({
      ...prevFormData,
      businessAddress: addressData.businessAddress.trim(),
      city: addressData.city,
      state: addressData.state,
      zipCode: addressData.zipCode,
    }));

    // Log the updated form data
    console.log("Updated Form Data:", {
      businessAddress: addressData.businessAddress.trim(),
      city: addressData.city,
      state: addressData.state,
      zipCode: addressData.zipCode,
    });
  };

  const handleFeinChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 9) {
      value = value.slice(0, 9); // Limit to 9 digits
    }
    if (value.length > 2) {
      value = value.slice(0, 2) + "-" + value.slice(2); // Insert hyphen after the second digit
    }

    updateFormData("fein", value); // Update formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      fein: value,
    }));
  };
  const handleSubmit = () => {
    const primarySignature = primarySignatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    const coOwnerSignature = coOwnerSignatureRef.current
      ? coOwnerSignatureRef.current.getTrimmedCanvas().toDataURL("image/png")
      : null;

    if (!primarySignature) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        signature: "Primary signature is required",
      }));
      return;
    }

    if (data.OwnerShip >= 49 && !coOwnerSignature) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        signature2: "Co-owner signature is required",
      }));
      return;
    }

    // Clear any previous errors for the signature fields
    setErrors((prevErrors) => ({
      ...prevErrors,
      signature: "",
      signature2: "",
    }));

    // Proceed with form submission or next step
    console.log("Form submitted successfully");
  };

  useLayoutEffect(() => {
    setFormData(data);
  }, [formData]);

  console.log(formData, "formData");

  return (
    <>
      <div>
        {" "}
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
          onLoad={() => console.log("Google Maps API loaded successfully")}
          onError={() => console.error("Error loading Google Maps API")}
        />
        {showConfetti && (
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "20px 0",
          }}>
          CONGRATULATIONS! YOU HAVE BEEN PRE-QUALIFIED FOR:
          <br />
          <span
            style={{
              color: "#28a745",
              fontSize: "32px",
              display: "block",
              marginTop: "10px",
            }}>
            $
            {prequalifiedAmount.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </h2>
        <br />
        <h3> {"\n"} 🎉 Finish Application 🎉</h3>
        <br />
        <input
          type="text"
          name="dbaName"
          value={formData.dbaName}
          onChange={handleChange}
          placeholder="DBA Name"
          className="final-step-input"
        />
        {errors.dbaName && <p className="error-message">{errors.dbaName}</p>}
        <input
          type="text"
          name="fein"
          value={formData.fein}
          onChange={handleFeinChange} // Use custom handleFeinChange function
          placeholder="FEIN (Tax ID)/SSN"
          className="final-step-input"
        />
        {errors.fein && <p className="error-message">{errors.fein}</p>}
        <input
          type="tel"
          name="businessPhone"
          value={formData.businessPhone}
          onChange={handlePhoneChange}
          placeholder="Business Phone Number"
          className="final-step-input"
        />
        {errors.businessPhone && (
          <p className="error-message">{errors.businessPhone}</p>
        )}
        <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              ref={addressInputRef}
              type="text"
              name="businessAddress"
              value={data.businessAddress}
              onChange={handleChange}
              placeholder="Business Address"
              className="final-step-input"
            />
          </Autocomplete>

          {errors.businessAddress && (
            <p className="error-message">{errors.businessAddress}</p>
          )}

          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            placeholder="City"
            className="final-step-input"
          />
          {errors.city && <p className="error-message">{errors.city}</p>}

          <input
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            placeholder="State"
            className="final-step-input"
          />
          {errors.state && <p className="error-message">{errors.state}</p>}

          <input
            type="text"
            name="zipCode"
            value={data.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="final-step-input"
          />
          {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
        </LoadScript>
        <div className="mt-1">
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
            }}>
            SIGNATURE
          </p>

          {/* So the co-signer field should not show unless 50% ownership or less */}

          <SignatureCanvas
            ref={primarySignatureRef}
            penColor="black"
            canvasProps={{
              width: 250,
              height: 60,
              className: "sigCanvas",
              style: { width: "250px", height: "60px" },
            }}
            onEnd={() => {
              setSign(
                primarySignatureRef.current
                  .getTrimmedCanvas()
                  .toDataURL("image/png")
              );
            }}
          />

          {errors.signature && (
            <p className="error-message">{errors.signature}</p>
          )}
        </div>
        {data.OwnerShip >= 49 && (
          <div className="mt-1">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
              }}>
              CO-OWNER SIGNATURE
            </p>

            <SignatureCanvas
              ref={coOwnerSignatureRef}
              penColor="black"
              canvasProps={{
                width: 250,
                height: 60,
                className: "sigCanvas",
                style: { width: "250px", height: "60px" },
              }}
              onEnd={() => {
                setCoApplicationSignature(
                  coOwnerSignatureRef.current
                    .getTrimmedCanvas()
                    .toDataURL("image/png")
                );
              }}
            />

            {errors.signature2 && (
              <p className="error-message">{errors.signature2}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
