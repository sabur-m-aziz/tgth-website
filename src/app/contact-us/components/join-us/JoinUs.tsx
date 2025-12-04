"use client";
import { useSubscriptionForm } from "@/hooks";
import { Image, Input } from "@nextui-org/react";
import { FC, useEffect } from "react";
import { toast } from "sonner";
import JointUsButton from "./JointUsButton";

const JoinUs: FC = () => {
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
    <section className="relative">
      <Image
        src="/images/contact-us/newsletter.jpg"
        className="rounded-none w-full min-h-[280px] lg:min-h-[328px] object-cover"
        removeWrapper
        alt="industry"
      />
      <div className="container absolute top-1/2 left-1/2 z-10 text-center lg:text-left items-center justify-between -translate-x-1/2 -translate-y-1/2 lg:flex">
        <div>
          <h3 className="text-white font-bold text-xl lg:text-4xl">
            Want to join our team?
          </h3>
          <p className="text-white mt-2 lg:mt-4">
            We are always looking for talented people, We here to help you to
            open your bright future.
          </p>
        </div>
        <form action={action}>
          <div className="flex h-12 footer-form mt-6 lg:mt-0">
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
            <JointUsButton canSubmit={canSubmit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
