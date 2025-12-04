import { HeroSection } from "@/components";
// import { faqItems } from "./data";
import { ContactInfo, JoinUs, LetsTalk } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact with Team Global Talent Hub (TGTH)",
  description:
    "Send Your Query via Email or Form and We will Get Back Shortly.",
  alternates: {
    canonical: "https://tgth.com.au/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <HeroSection
        title="Scale Smart, Start Offshoring"
        description="Have any questions? Reach out to us from our contact form and we will get back to you shortly."
        containerClassName="py-11"
        bgEarth
      />
      <LetsTalk />
      <ContactInfo />
      {/* <FAQ faqItems={faqItems} background="white" /> */}
      <JoinUs />
    </>
  );
}
