import Dropdown from "./Dropdown";

const creditScoreOptions = [
  { value: "Excellent", label: "Excellent (720+)" },
  { value: "Good", label: "Good (680-719)" },
  { value: "Fair", label: "Fair (640-679)" },
  { value: "Poor", label: "Poor (639 or less)" },
];

export default function CreditScore({
  formData,
  handleChange,
  handleNextStep,
  handlePrevStep,
  errors,
}) {
  return (
    <div>
      <h2>What's your credit score?</h2>
      <Dropdown
        name="creditScore"
        value={formData.creditScore}
        options={creditScoreOptions}
        onChange={handleChange}
      />
      {errors.creditScore && <p>{errors.creditScore}</p>}
    </div>
  );
}
