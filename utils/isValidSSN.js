export const isValidSSN = (ssn) => {
  // SSN pattern: XXX-XX-XXXX
  const ssnPattern = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
  return ssnPattern.test(ssn);
};

export const formatSSN = (value) => {
  // Remove all non-digits
  const cleanValue = value.replace(/\D/g, "");

  // Format the input into XXX-XX-XXXX
  const formattedValue = cleanValue
    .replace(/^(\d{3})(\d{2})(\d{0,4})$/, "$1-$2-$3")
    .replace(/[-]$/, ""); // Remove trailing dash if incomplete

  return formattedValue;
};
