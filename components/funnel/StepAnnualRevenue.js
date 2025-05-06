export default function StepAnnualRevenue({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>What was your annual gross revenue last year?</h2>
      <input
        type="number"
        name="annualRevenue"
        value={formData.annualRevenue}
        onChange={handleChange}
        placeholder="Enter amount"
        className="revenue-input"
      />
      {errors.annualRevenue && (
        <p className="error-message">{errors.annualRevenue}</p>
      )}
    </div>
  );
}
