"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function BankStatement() {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    statement1: null,
    statement2: null,
    statement3: null,
    statement4: null,
    consent: false,
    isCalifornia: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, checked, files, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleDrop = (e, statement) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prev) => ({ ...prev, [statement]: file }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    // Validate form
    const requiredStatements = formData.isCalifornia ? 4 : 3;
    const statements = [
      formData.statement1,
      formData.statement2,
      formData.statement3,
      ...(formData.isCalifornia ? [formData.statement4] : []),
    ].slice(0, requiredStatements);

    if (!formData.email) {
      setError("Email is required.");
      setIsSubmitting(false);
      return;
    }

    // Check if email is unique using localStorage
    const usedEmails = JSON.parse(localStorage.getItem("usedEmails") || "[]");
    if (usedEmails.includes(formData.email)) {
      setError("This email has already been used. Please use a different email.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.companyName) {
      setError("Company Name is required.");
      setIsSubmitting(false);
      return;
    }

    if (statements.some((statement) => !statement)) {
      setError(`All ${requiredStatements} bank statements are required.`);
      setIsSubmitting(false);
      return;
    }
    if (!formData.consent) {
      setError("You must agree to data processing.");
      setIsSubmitting(false);
      return;
    }

    // Validate file types and sizes
    const maxSize = 100 * 1024 * 1024; // 100MB
    for (const file of statements) {
      if (!file.type.includes("pdf")) {
        setError("Only PDF files are allowed.");
        setIsSubmitting(false);
        return;
      }
      if (file.size > maxSize) {
        setError("Each file must be under 100MB.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const submitData = new FormData();
      statements.forEach((statement, index) => {
        submitData.append(`statement${index + 1}`, statement);
      });
      submitData.append("consent", formData.consent.toString());
      submitData.append("isCalifornia", formData.isCalifornia.toString());
      submitData.append("companyName", formData.companyName);

      // Send the form data to HubSpot
      const hubspotResponse = await fetch("/api/hubspot", {
        method: "POST",
        body: submitData,
      });

      const hubspotResult = await hubspotResponse.json();
      if (hubspotResult.error) {
        setError(hubspotResult.error);
        setIsSubmitting(false);
        return;
      }

      // Store file IDs and email in localStorage
      localStorage.setItem("hubspotFileIds", JSON.stringify(hubspotResult.fileIds));
      usedEmails.push(formData.email);
      localStorage.setItem("usedEmails", JSON.stringify(usedEmails));

      setSuccess("Bank statements uploaded and company updated successfully!");
    } catch (err) {
      setError("Failed to upload statements. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Upload Bank Statements">
        <section className="bank-statement-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bank-statement-page__form">
                  <h3 className="comment-one__title">Upload Bank Statements</h3>
                  <p>
                    Upload PDF bank statements {formData.isCalifornia ? "for the last four months" : "for the last three months"} (max 100MB each). Required fields are marked *.
                    <br />
                    <strong>Note:</strong> Your data is secure. See our <a href="/privacy-policy">Privacy Policy</a>.
                  </p>
                  <form onSubmit={handleSubmit} className="comment-form">
                    {error && (
                      <p className="error-message">
                        <i className="fas fa-exclamation-circle"></i> {error}
                      </p>
                    )}
                    {success && (
                      <p className="success-message">
                        <i className="fas fa-check-circle"></i> {success}
                      </p>
                    )}
                    {/* Email Input */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Email*</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                            className="text-input"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Company Name Input */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Company Name*</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your company name"
                            className="text-input"
                          />
                        </div>
                      </div>
                    </div>
                    {/* California Checkbox */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box consent-box">
                          <label>
                            <input
                              type="checkbox"
                              name="isCalifornia"
                              checked={formData.isCalifornia}
                              onChange={handleInputChange}
                            />
                            California region (requires 4 bank statements)
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Statement 1 Upload */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Bank Statement 1*</label>
                          <div
                            className="file-upload-dropzone"
                            onDrop={(e) => handleDrop(e, "statement1")}
                            onDragOver={handleDragOver}
                          >
                            <input
                              type="file"
                              name="statement1"
                              accept=".pdf"
                              onChange={handleInputChange}
                              required
                              id="statement1"
                              className="file-upload-input"
                            />
                            <label htmlFor="statement1" className="file-upload-label">
                              {formData.statement1 ? (
                                <span>{formData.statement1.name}</span>
                              ) : (
                                <span>Drag & drop or click to upload PDF</span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Statement 2 Upload */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Bank Statement 2*</label>
                          <div
                            className="file-upload-dropzone"
                            onDrop={(e) => handleDrop(e, "statement2")}
                            onDragOver={handleDragOver}
                          >
                            <input
                              type="file"
                              name="statement2"
                              accept=".pdf"
                              onChange={handleInputChange}
                              required
                              id="statement2"
                              className="file-upload-input"
                            />
                            <label htmlFor="statement2" className="file-upload-label">
                              {formData.statement2 ? (
                                <span>{formData.statement2.name}</span>
                              ) : (
                                <span>Drag & drop or click to upload PDF</span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Statement 3 Upload */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <label>Bank Statement 3*</label>
                          <div
                            className="file-upload-dropzone"
                            onDrop={(e) => handleDrop(e, "statement3")}
                            onDragOver={handleDragOver}
                          >
                            <input
                              type="file"
                              name="statement3"
                              accept=".pdf"
                              onChange={handleInputChange}
                              required
                              id="statement3"
                              className="file-upload-input"
                            />
                            <label htmlFor="statement3" className="file-upload-label">
                              {formData.statement3 ? (
                                <span>{formData.statement3.name}</span>
                              ) : (
                                <span>Drag & drop or click to upload PDF</span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Statement 4 Upload (California only) */}
                    {formData.isCalifornia && (
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box">
                            <label>Bank Statement 4*</label>
                            <div
                              className="file-upload-dropzone"
                              onDrop={(e) => handleDrop(e, "statement4")}
                              onDragOver={handleDragOver}
                            >
                              <input
                                type="file"
                                name="statement4"
                                accept=".pdf"
                                onChange={handleInputChange}
                                required
                                id="statement4"
                                className="file-upload-input"
                              />
                              <label htmlFor="statement4" className="file-upload-label">
                                {formData.statement4 ? (
                                  <span>{formData.statement4.name}</span>
                                ) : (
                                  <span>Drag & drop or click to upload PDF</span>
                                )}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Consent Checkbox */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box consent-box">
                          <label>
                            <input
                              type="checkbox"
                              name="consent"
                              checked={formData.consent}
                              onChange={handleInputChange}
                              required
                            />
                            I agree to the processing of my personal data.*
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__btn-box">
                          <button
                            type="submit"
                            className="thm-btn"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <i className="fas fa-spinner fa-spin"></i> Uploading...
                              </>
                            ) : (
                              "Upload Statements"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}