import Dropdown from "./Dropdown";

const bankAccountOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export default function StepBankAccount({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>Do you have a business bank account?</h2>
      <Dropdown
        name="hasBankAccount"
        value={formData.hasBankAccount}
        options={bankAccountOptions}
        onChange={handleChange}
      />
      {errors.hasBankAccount && (
        <p className="error-message">{errors.hasBankAccount}</p>
      )}
    </div>
  );
}
