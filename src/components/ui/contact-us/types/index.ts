export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  area: string;
  message: string;
}

export type FormKey = keyof ContactForm;
