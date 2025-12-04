"use client";
import { type FC, useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem, Textarea } from "@nextui-org/react";
import { Button, PrimaryInput } from "@/components";
import { useContactForm } from "./hooks/useContactUsForm";
import { toast } from "sonner";
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

const ContactFormContent: FC<{
  containerClass?: string;
  buttonClass?: string;
  formClassName?: string;
}> = ({ containerClass, buttonClass, formClassName }) => {
  const [countryList, setCountryList] = useState<
    { name: string; code: string }[]
  >([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const { executeRecaptcha } = useReCaptcha();
  const { result, resetForm, action, data, errors, onChangeInput, validate } =
    useContactForm();

  useEffect(() => {
    const { message, success } = result;
    if (message && typeof success === "boolean") {
      if (success) {
        toast.success(message);
        resetForm();
      } else {
        toast.error(message);
      }
    }
  }, [result]);

  useEffect(() => {
    const loadCountryList = async () => {
      const { countryList } = await import("./data");
      setCountryList(countryList);
    };
    loadCountryList();

    // textarea getting inline height. can't resolved it by css
    const textarea = document.getElementById("custom-textarea");
    if (textarea) {
      textarea.style.removeProperty("height");
    }
  }, []);

  const handleFormSubmit = async (formData: FormData) => {
    if (!validate()) return;
    try {
      setIsVerifying(true);
      // Execute reCAPTCHA with action name
      const token = await executeRecaptcha("contact_form_submit");
      // console.log("token got =========> ", token);
      // Add the token to the form data
      formData.append("recaptchaToken", token);

      // Submit the form with the token
      action(formData);
    } catch (error) {
      toast.error("Failed to verify reCAPTCHA. Please try again.");
      console.error("reCAPTCHA error:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <form action={handleFormSubmit} className={formClassName}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${containerClass}`}
      >
        <PrimaryInput
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={onChangeInput}
          error={errors}
          required
        />
        <PrimaryInput
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={onChangeInput}
          error={errors}
          required
        />
        <PrimaryInput
          label="Email"
          type="email"
          name="email"
          value={data.email}
          onChange={onChangeInput}
          error={errors}
          required
        />
        <div className="flex flex-col">
          <Autocomplete
            name="area"
            size={"md"}
            label="Select Country *"
            className="w-full primary-select"
            selectedKey={
              countryList.find((c) => c.name === data.area)?.code || null
            }
            onSelectionChange={(key) => {
              const selectedCountry = countryList.find(
                (country) => country.code === key
              );
              onChangeInput({
                key: "area",
                value: selectedCountry ? selectedCountry.name : "",
              });
            }}
            isInvalid={!!errors?.area}
          >
            {countryList.map((country) => (
              <AutocompleteItem key={country.code} value={country.name}>
                {country.name}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          {errors?.area && (
            <p className="text-tiny text-danger mt-1">{errors.area}</p>
          )}
        </div>
      </div>
      <Textarea
        label={
          <div className="relative">
            Message <span className="absolute -right-2">*</span>
          </div>
        }
        className="primary-input mt-6"
        id="custom-textarea"
        rows={6}
        value={data.message}
        onChange={(e) => {
          onChangeInput({ key: "message", value: e.target.value });
        }}
        isInvalid={!!errors?.message}
        errorMessage={errors?.message}
        name="message"
      />

      <Button
        variant="primary"
        size="lg"
        text={isVerifying ? "Verifying..." : "Send Message"}
        containerClass={`mx-auto mt-6 ${buttonClass}`}
        disabled={isVerifying}
        type="submit"
      />
    </form>
  );
};

// Wrapper component that provides the ReCaptcha context
const ContactForm: FC<{
  containerClass?: string;
  buttonClass?: string;
  formClassName?: string;
}> = (props) => {
  // NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6Lc1YPgqAAAAACQF3CVLWm8OCLv2QTzM8a7dFE36
  return (
    <ReCaptchaProvider
      reCaptchaKey={"6Lc1YPgqAAAAACQF3CVLWm8OCLv2QTzM8a7dFE36"}
      useEnterprise={false}
    >
      <ContactFormContent {...props} />
    </ReCaptchaProvider>
  );
};

export default ContactForm;