export const validateDate = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  const age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  // Check if the user is at least 18 years old
  return (
    age > 18 ||
    (age === 18 && month >= 0 && today.getDate() >= birthDate.getDate())
  );
};
