export default function StepMonthlyRevenue({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>What is your estimated monthly revenue? (Last 4 months)</h2>
      <input
        type="number"
        name="monthlyRevenue"
        value={formData.monthlyRevenue}
        onChange={handleChange}
        placeholder="Enter amount"
        className="revenue-input"
      />
      {errors.monthlyRevenue && (
        <p className="error-message">{errors.monthlyRevenue}</p>
      )}
    </div>
  );
}
