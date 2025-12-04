import { subscriptionAction } from "@/actions";
import {
  defaultFormActionResult,
  DefaultFormActionResult,
  InputError,
  SubscriptionForm,
  SubscriptionFormKey,
} from "@/types/Form";
import { useState } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";

const SubscriptionSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export const useSubscriptionForm = () => {
  const initialFormData: SubscriptionForm = {
    email: "",
  };
  const [formData, setFormData] = useState<SubscriptionForm>(initialFormData);
  const [errors, setErrors] = useState<InputError>({});

  const [result, action] = useFormState<DefaultFormActionResult, FormData>(
    subscriptionAction,
    defaultFormActionResult
  );

  const resetForm = () => {
    setErrors({});
    setFormData({ ...initialFormData });
  };

  const validateField = (key: SubscriptionFormKey, value: string) => {
    const partialData = { ...formData, [key]: value };
    const validation = SubscriptionSchema.safeParse(partialData);

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
      validateField(key as SubscriptionFormKey, value);
      setFormData((current) => ({
        ...current,
        [key]: value,
      }));
    },
    result,
    action,
    canSubmit: Boolean(
      formData.email && !Object.keys(errors).some((key) => errors[key] !== null)
    ),
    errors,
    resetForm,
  };

  return form;
};
