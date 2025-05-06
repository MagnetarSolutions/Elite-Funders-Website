export function getFormData() {
  if (typeof window !== "undefined") {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : {};
  }
  return {};
}
