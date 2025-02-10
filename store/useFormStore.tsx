// store/useFormStore.ts
import {create} from "zustand";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
}

interface FormStore {
  step: number;
  formData: FormData;

  setFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

// Define your initial state here for clarity.
const initialState: FormStore = {
  step: 1,
  formData: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+1",
  },
  // Dummy functions – will be replaced by our store setup below.
  setFormData: () => {},
  nextStep: () => {},
  prevStep: () => {},
  reset: () => {},
};

export const useFormStore = create<FormStore>((set) => ({
  step: initialState.step,
  formData: initialState.formData,
  setFormData: (data: Partial<FormData>) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  reset: () =>
    set({
      step: initialState.step,
      formData: initialState.formData,
    }),
}));
