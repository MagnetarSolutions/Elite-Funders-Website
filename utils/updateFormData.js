// import { useFormStore } from "@/public/store/FormData";

export const normalizeInputValue = (value) => {
  try {
    // Convert the value to a JSON string and then parse it back to ensure consistency
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    console.error("Error normalizing input value:", error);
    return value;
  }
};

export const updateFormData = (
  formData,
  setFormData,
  setErrors,
  name,
  value
) => {
  // const updateFormData = useFormStore((state) => state.updateDate);
  const normalizedValue = normalizeInputValue(value);
  const newFormData = {
    ...formData,
    [name]: normalizedValue,
  };
  setFormData(newFormData);
  localStorage.setItem("formData", JSON.stringify(newFormData));
  // updateFormData(newFormData);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: "",
  }));

  console.log("Updated formData:", newFormData);
};
