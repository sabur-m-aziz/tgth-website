export interface DefaultFormActionResult {
  error?: any;
  success?: boolean;
  message?: string;
}

export const defaultFormActionResult: DefaultFormActionResult = {
  error: undefined,
  success: undefined,
  message: undefined,
};

export type DefaultActionFn = (
  _: DefaultFormActionResult,
  formData: FormData
) => Promise<DefaultFormActionResult>;

export type InputError = { [key: string]: string | null };

export interface SubscriptionForm {
  email: string;
}

export type SubscriptionFormKey = keyof SubscriptionForm;
