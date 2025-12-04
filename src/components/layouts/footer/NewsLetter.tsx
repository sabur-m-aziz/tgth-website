"use client";
import { FC, useEffect } from "react";
import InnerTitle from "./InnerTitle";
import { Input } from "@nextui-org/react";
import { useSubscriptionForm } from "@/hooks";
import { toast } from "sonner";
import NewsLetterButton from "./NewsLetterButton";

const NewsLetter: FC = () => {
  const { result, resetForm, action, data, canSubmit, errors, onChangeInput } =
    useSubscriptionForm();

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

  return (
    <div>
      <InnerTitle title="Our Newsletter" />
      <p className="font-medium md:font-normal text-[#CACACA] font-clearSans block">
        Subscribe to our newsletter to get our news & deals delivered to you.
      </p>
      <form action={action}>
        <div className="flex h-12 footer-form mt-4">
          <Input
            className="h-full form-component"
            label="Email Address"
            name="email"
            value={data.email}
            isInvalid={!!errors.email}
            // errorMessage={errors.email}
            onChange={(e) =>
              onChangeInput({ key: "email", value: e.target.value })
            }
          />
          <NewsLetterButton canSubmit={canSubmit} />
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
