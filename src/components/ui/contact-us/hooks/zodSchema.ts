import { z } from "zod";

export const contactUsSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  area: z.string().min(1, "Country is required"),
  message: z
    .string()
    .min(10, "Message is too short")
    .max(1000, "Message is too long"),
});
