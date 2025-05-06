import { parsePhoneNumber } from "libphonenumber-js";

export default function StepCompanyInfo({
  formData,
  handleChange,
  errors,
  handlePhoneChange,
}) {
  return (
    <div>
      <h2>Company Information</h2>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        className="company-info-input"
      />
      {errors.companyName && (
        <p className="error-message">{errors.companyName}</p>
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="company-info-input"
      />
      {errors.email && <p className="error-message">{errors.email}</p>}
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handlePhoneChange}
        placeholder="+1 (999)-999-9999"
        className="company-info-input"
      />
      {errors.phoneNumber && (
        <p className="error-message">{errors.phoneNumber}</p>
      )}
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="company-info-input"
      />
      {errors.fullName && <p className="error-message">{errors.fullName}</p>}
    </div>
  );
}
