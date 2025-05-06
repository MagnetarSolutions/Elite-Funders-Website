import Dropdown from "./Dropdown";

const industryOptions = [
  { value: "Construction", label: "Construction" },
  { value: "Transportation", label: "Transportation" },
  { value: "Restaurant", label: "Restaurant" },
  { value: "Retail", label: "Retail" },
  { value: "Trucking", label: "Trucking" },
  { value: "Other", label: "Other" },
];

export default function Industry({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>What industry are you in?</h2>
      <Dropdown
        name="industry"
        value={formData.industry}
        options={industryOptions}
        onChange={handleChange}
      />
      {errors.industry && <p className="error-message">{errors.industry}</p>}
    </div>
  );
}
