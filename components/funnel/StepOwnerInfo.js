import { useFormStore } from "@/public/store/FormData";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useRef, useState, useLayoutEffect } from "react";
import Select from "react-select";
import { formatSSN, isValidSSN } from "@/utils/isValidSSN";
import Script from "react-load-script";

const libraries = ["places"];
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const stateOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export default function StepOwnerInfo({
  errors,
  setFormData,
  formData,
  handleChange,

  setErrors,
}) {
  const { data, updateNewFormData, updateFormData } = useFormStore();

  const autocompleteRef = useRef(null);
  const [autocompleteLoaded, setAutocompleteLoaded] = useState(false);

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
    setAutocompleteLoaded(true);
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const addressComponents = place.address_components;

    const addressData = {
      ownerStreetAddress: "",
      ownerCity: "",
      ownerState: "",
      zipCode: "",
    };
    const handlePhoneChange = (e) => {
      const { name, value } = e.target;
      updateFormData(name, value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
    const handleSSNBlur = (e) => {
      const { name, value } = e.target;
      if (!isValidSSN(value)) {
        alert("Invalid SSN format");
      }
    };
    addressComponents.forEach((component) => {
      const types = component.types;
      if (types.includes("street_number")) {
        addressData.ownerStreetAddress = `${component.long_name} ${addressData.ownerStreetAddress}`;
      }
      if (types.includes("route")) {
        addressData.ownerStreetAddress += ` ${component.short_name}`;
      }
      if (types.includes("locality")) {
        addressData.ownerCity = component.long_name;
      }
      if (types.includes("administrative_area_level_1")) {
        addressData.ownerState = component.short_name;
      }
      if (types.includes("postal_code")) {
        addressData.zipCode = component.long_name;
      }
    });
    updateNewFormData({
      ownerStreetAddress: addressData.ownerStreetAddress.trim().toString(),
      ownerCity: addressData.ownerCity,
      ownerDriverLicenseState: addressData.ownerState,
      ownerZipCode: addressData.zipCode,
    });
    setFormData((prevFormData) => ({
      ...prevFormData,
      ownerStreetAddress: addressData.ownerStreetAddress.trim().toString(),
      ownerCity: addressData.ownerCity,
      ownerDriverLicenseState: addressData.ownerState,
      ownerZipCode: addressData.zipCode,
    }));

    console.log("Updated Form Data:", {
      ownerStreetAddress: addressData.ownerStreetAddress.trim(),
      ownerCity: addressData.ownerCity,
      ownerDriverLicenseState: addressData.ownerState,
      ownerZipCode: addressData.zipCode,
    });
  };
  const handleSSNChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatSSN(value);
    console.log("formattedValue", formattedValue);
    updateFormData(name, formattedValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
  };

  const handleSSNBlur = (e) => {
    const { name, value } = e.target;
    if (!isValidSSN(value)) {
      alert("Invalid SSN format");
    }
  };
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  useLayoutEffect(() => {
    setFormData(data);
    // console.log("formData in StepOwnerInfo:", formData);
  }, [formData]);

  console.log(JSON.stringify(data, null, 2));
  console.log(data.ownerStreetAddress, "ownerStreetAddress");
  return (
    <div>
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
        onLoad={() => console.log("Google Maps API loaded successfully")}
        onError={() => console.error("Error loading Google Maps API")}
      />
      <h2>Owner Information</h2>
      <div className="owner_input_wrapper">
        <div className="w-100">
          <input
            type="text"
            name="ownerFullName"
            value={data.ownerFullName}
            onChange={handleChange}
            placeholder="Enter Owner Full Name"
            className="business-start-input"
          />
          {errors.ownerFullName && (
            <p className="error-message">{errors.ownerFullName}</p>
          )}
        </div>
        <div className="w-100">
          <input
            type="date"
            name="ownerBirthDate"
            value={data.ownerBirthDate}
            onChange={handleChange}
            className="business-start-input"
          />
          {errors.ownerBirthDate && (
            <p className="error-message">{errors.ownerBirthDate}</p>
          )}
        </div>
      </div>

      <div className="owner_input_wrapper">
        <div className="w-100">
          <input
            type="text"
            name="ownerSSN"
            value={data.ownerSSN}
            onChange={handleSSNChange}
            placeholder="XXX-XX-XXXX"
            onBlur={handleSSNBlur}
            className="company-info-input"
            maxLength={11}
          />
          {errors.ownerSSN && (
            <p className="error-message">{errors.ownerSSN}</p>
          )}
        </div>

        <div className="w-100 d-flex flex-column align-items-start justify-content-start gap-0">
          <div className="d-flex align-items-center gap-2">
            <input
              type="number"
              name="OwnerShip"
              value={data.OwnerShip}
              onChange={handleChange}
              placeholder="Enter Ownership"
              className="company-info-input"
              required
            />
            %
          </div>
          {errors.OwnerShip && (
            <p className="error-message -mt-2">{errors.OwnerShip}</p>
          )}
        </div>
      </div>

      <input
        type="text"
        name="ownerDriverLicense"
        value={formData.ownerDriverLicense}
        onChange={handleChange}
        placeholder="Enter Driver License Number"
        className="company-info-input"
      />
      {errors.ownerDriverLicense && (
        <p className="error-message">{errors.ownerDriverLicense}</p>
      )}
      <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            ref={autocompleteRef}
            type="text"
            name="ownerDriverLicenseState"
            value={data.ownerDriverLicenseState}
            onChange={handleChange}
            placeholder="Enter Driver License State"
            className="company-info-input"
          />
        </Autocomplete>
      </LoadScript>
      {!autocompleteLoaded && (
        <Select
          name="ownerDriverLicenseState"
          value={stateOptions.find(
            (option) => option.value === data.ownerDriverLicenseState
          )}
          onChange={(option) =>
            handleChange({
              target: { name: "ownerDriverLicenseState", value: option.value },
            })
          }
          options={stateOptions}
          className="company-info-input"
          placeholder="Select State"
        />
      )}
      {errors.ownerDriverLicenseState && (
        <p className="error-message">{errors.ownerDriverLicenseState}</p>
      )}
      <input
        type="text"
        name="ownerEmail"
        value={data.ownerEmail}
        onChange={handleChange}
        placeholder="Enter Your Email"
        className="company-info-input"
      />
      {errors.ownerEmail && (
        <p className="error-message">{errors.ownerEmail}</p>
      )}
      <div className="owner_input_wrapper">
        <div className="w-100">
          <input
            type="text"
            name="ownerCellPhone"
            value={data.ownerCellPhone || data.phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter Cell Phone Number"
            className="company-info-input"
          />
          {errors.ownerCellPhone && (
            <p className="error-message">{errors.ownerCellPhone}</p>
          )}
        </div>
        <div className="w-100">
          <input
            type="text"
            name="ownerHomePhone"
            value={data.ownerHomePhone || data.phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter Home Phone Number"
            className="company-info-input"
          />
          {errors.ownerHomePhone && (
            <p className="error-message">{errors.ownerHomePhone}</p>
          )}
        </div>
      </div>

      <input
        type="text"
        name="ownerStreetAddress"
        value={data.ownerStreetAddress}
        onChange={handleChange}
        placeholder="Enter Street Address"
        className="company-info-input"
      />
      {errors.ownerStreetAddress && (
        <p className="error-message">{errors.ownerStreetAddress}</p>
      )}
      <div className="owner_input_wrapper">
        <div className="w-100">
          <input
            type="text"
            name="ownerCity"
            value={data.ownerCity}
            onChange={handleChange}
            placeholder="Enter City"
            className="company-info-input"
          />
          {errors.ownerCity && (
            <p className="error-message">{errors.ownerCity}</p>
          )}
        </div>
        <div className="w-100">
          <input
            type="text"
            name="ownerState"
            value={data.ownerState}
            onChange={handleChange}
            placeholder="State"
            className="company-info-input"
          />
          {errors.ownerState && (
            <p className="error-message">{errors.ownerState}</p>
          )}
        </div>
        <div className="w-100">
          <input
            type="text"
            name="ownerZipCode"
            value={data.ownerZipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="company-info-input"
          />
          {errors.ownerZipCode && (
            <p className="error-message">{errors.ownerZipCode}</p>
          )}
        </div>
      </div>
    </div>
  );
}
