import {
  defaultFormActionResult,
  DefaultFormActionResult,
  InputError,
} from "@/types/Form";
import { useState } from "react";
import contactFormSubmission from "../actions/ContactUsAction";
import { ContactForm, FormKey } from "../types";
import { contactUsSchema } from "./zodSchema";
import { useFormState } from "react-dom";

export const useContactForm = () => {
  const initialFormData: ContactForm = {
    firstName: "",
    lastName: "",
    email: "",
    area: "",
    message: "",
  };
  const [formData, setFormData] = useState<ContactForm>(initialFormData);
  const [errors, setErrors] = useState<InputError>({});

  const [result, action] = useFormState<DefaultFormActionResult, FormData>(
    contactFormSubmission,
    defaultFormActionResult
  );

  const resetForm = () => {
    setErrors({});
    setFormData({ ...initialFormData });
  };

  const validate = (): boolean => {
    const validation = contactUsSchema.safeParse(formData);
    if (validation.success) {
      setErrors({});
      return true;
    }
    const newErrors: InputError = {};
    validation.error.issues.forEach((issue) => {
      newErrors[issue.path[0]] = issue.message;
    });
    setErrors(newErrors);
    return false;
  };

  const validateField = (key: FormKey, value: string) => {
    const partialData = { ...formData, [key]: value };
    const validation = contactUsSchema.safeParse(partialData);

    if (!validation.success) {
      // Find the error specific to the updated field
      const fieldError = validation.error.issues.find(
        (issue) => issue.path[0] === key
      );
      if (fieldError) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [key]: fieldError.message,
        }));
      } else {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [key]: null,
        }));
      }
    } else {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [key]: null,
      }));
    }
  };

  const form = {
    data: {
      ...formData,
    },
    onChangeInput: ({ key, value }: { key: string; value: string }) => {
      validateField(key as FormKey, value);
      setFormData((current) => ({
        ...current,
        [key]: value,
      }));
    },
    result,
    action,
    errors,
    resetForm,
    validate,
  };

  return form;
};