export default function StepBusinessStart({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>When did your business start?</h2>
      <input
        type="month"
        name="businessStart"
        value={formData.businessStart}
        onChange={handleChange}
        className="business-start-input"
      />
      {errors.businessStart && (
        <p className="error-message">{errors.businessStart}</p>
      )}
    </div>
  );
}
