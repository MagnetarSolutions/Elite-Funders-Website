import { create } from "zustand";
import { sanitizeFormData } from "@/utils/sanitizeFormData";
export const normalizeInputValue = (value) => {
  try {
    // Convert the value to a JSON string and then parse it back to ensure consistency
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    console.error("Error normalizing input value:", error);
    return value;
  }
};
const allowedFields = [
  "businessType",
  "industry",
  "amountNeeded",
  "creditScore",
  "monthlyRevenue",
  "annualRevenue",
  "hasBankAccount",
  "financingPurpose",
  "businessStart",
  "companyName",
  "email",
  "phoneNumber",
  "fullName",
  "dbaName",
  "fein",
  "businessPhone",
  "businessAddress",
  "city",
  "state",
  "zipCode",
  "firstName",
  "lastName",
  "ownershipPercentage",
  "title",
  "dob",
  "ownerAddress",
  "ownerCity",
  "ownerState",
  "ownerZipCode",
  "ownerFullName",
  "ownerBirthDate",
  "ownerSSN",
  "ownerDriverLicense",
  "ownerDriverLicenseState",
  "ownerEmail",
  "ownerCellPhone",
  "ownerHomePhone",
  "ownerStreetAddress",
  "sign",
  "coApplicationOwnerShip",
  "OwnerShip",
  "coApplicationSignature",
];

export const useFormStore = create((set) => ({
  data: {
    businessType: "Sole Proprietor",
    industry: "",
    amountNeeded: "",
    creditScore: "",
    monthlyRevenue: "",
    annualRevenue: "",
    hasBankAccount: "",
    financingPurpose: "",
    businessStart: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    fullName: "",
    dbaName: "",
    fein: "",
    businessPhone: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    ownershipPercentage: "100",
    title: "",
    dob: "",
    ownerAddress: "",
    ownerCity: "",
    ownerState: "",
    ownerZipCode: "",
    ownerFullName: "",
    ownerBirthDate: "",
    ownerSSN: "",
    ownerDriverLicense: "",
    ownerDriverLicenseState: "",
    ownerEmail: "",
    ownerCellPhone: "",
    ownerHomePhone: "",
    ownerStreetAddress: "",
    sign: "",
    coApplicationOwnerShip: 0,
    OwnerShip: 100,
    coApplicationSignature: "",
  },

  updateNewFormData: (newData) => {
    const sanitizedData = sanitizeFormData(newData, allowedFields);
    set((state) => {
      const updatedData = { ...state.data, ...sanitizedData };
      if (typeof window !== "undefined") {
        localStorage.setItem("formData", JSON.stringify(updatedData));
      }
      return { data: updatedData };
    });
  },

  setSign: (signature) =>
    set((state) => ({ data: { ...state.data, sign: signature } })),

  setCoApplicationSignature: (signature) =>
    set((state) => ({
      data: { ...state.data, coApplicationSignature: signature },
    })),

  // New function to update form data with normalization
  updateFormData: (name, value) =>
    set((state) => {
      const normalizedValue = normalizeInputValue(value);
      const newFormData = {
        ...state.data,
        [name]: normalizedValue,
      };
      localStorage.setItem("formData", JSON.stringify(newFormData));
      return { data: newFormData };
    }),

  currentStep:
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("currentStep") || "1", 10)
      : 1,
  setCurrentStep: (step) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", step.toString());
    }
    set({ currentStep: step });
  },
  // Fetch user from local storage and update the store
  fetchUser: async () => {
    const formData = await JSON.parse(localStorage.getItem("formData"));
    if (formData) {
      set((state) => ({ data: { ...state.data, ...formData } }));
    }
  },
}));
