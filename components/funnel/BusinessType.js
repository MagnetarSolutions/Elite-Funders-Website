import Dropdown from "./Dropdown";

const businessTypeOptions = [
  { value: "Sole Proprietor", label: "Sole Proprietor" },
  { value: "Partnership", label: "Partnership" },
  { value: "LLC", label: "Limited Liability Company (LLC)" },
  { value: "C Corporation", label: "C Corporation" },
  { value: "S Corporation", label: "S Corporation" },
];

export default function BusinessType({ formData, handleChange }) {
  return (
    <div>
      <h2>What type of business do you own?</h2>
      <Dropdown
        name="businessType"
        value={formData.businessType}
        options={businessTypeOptions}
        onChange={handleChange}
      />
    </div>
  );
}
