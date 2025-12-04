import { FC } from "react";
import { HeroSection } from "@/components";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Faq = dynamic(() => import("./components/Faq"), { ssr: false });

export const metadata: Metadata = {
  title: "FAQ - TGTH",
  description: "Find Frequently Asked Questions and Satisfctory Answers.",
  alternates: {
    canonical: "https://tgth.com.au/faq",
  },
};

const FaqPage: FC = () => {
  return (
    <>
      <HeroSection
        title="FAQ"
        description="Find answers to frequently asked questions below. Make contact if you have any further queries."
      />
      <div className="container xl:flex my-6 sm:my-12 lg:my-24.1">
        <Faq />
      </div>
    </>
  );
};

export default FaqPage;
