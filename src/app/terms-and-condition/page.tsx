import { HeroSection } from "@/components";
import { FC } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const TermsAndCondition = dynamic(
  () => import("./components/TermsAndCondition"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Terms and Conditions - TGTH",
  description:
    "Understand the guidelines and conditions for using our platform.",
  alternates: {
    canonical: "https://tgth.com.au/terms-and-condition",
  },
};

const TermsAndConditionPage: FC = () => {
  return (
    <>
      <HeroSection
        title="Terms and Conditions"
        description="Understand the guidelines and conditions for using our platform."
      />
      <div className="container xl:flex my-6 sm:my-12 lg:my-24.1">
        <TermsAndCondition />
      </div>
    </>
  );
};

export default TermsAndConditionPage;
