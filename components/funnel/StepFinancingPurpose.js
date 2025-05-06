import Dropdown from "./Dropdown";

const financingPurposeOptions = [
  { value: "Buying equipment", label: "Buying equipment" },
  { value: "Hiring employees", label: "Hiring employees" },
  { value: "Marketing", label: "Marketing" },
  { value: "Remodeling/Expansion", label: "Remodeling/Expansion" },
  { value: "Working Capital", label: "Working Capital" },
  { value: "Personal Use", label: "Personal Use" },
  { value: "Refinancing Debt", label: "Refinancing Debt" },
  { value: "Purchasing Inventory", label: "Purchasing Inventory" },
  { value: "Taxes", label: "Taxes" },
  { value: "Other", label: "Other" },
];

export default function StepFinancingPurpose({
  formData,
  handleChange,
  handleNextStep,
  handlePrevStep,
}) {
  return (
    <div>
      <h2>What do you need the financing for?</h2>
      <Dropdown
        name="financingPurpose"
        value={formData.financingPurpose}
        options={financingPurposeOptions}
        onChange={handleChange}
      />
    </div>
  );
}
