export default function StepLoanAmount({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>How much money do you need?</h2>
      <input
        type="number"
        name="amountNeeded"
        value={formData.amountNeeded}
        onChange={handleChange}
        placeholder="Enter amount"
        className="loan-amount-input"
      />
      {errors.amountNeeded && (
        <p className="error-message">{errors.amountNeeded}</p>
      )}
    </div>
  );
}
