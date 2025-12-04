import { ContactUs, ExtendingTeam, HeroSection } from "@/components";
import {
  ComprehensiveSolutions,
  GlobalTalent,
  LeverageGlobalTalent,
} from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailored and Efficient Offshore Services by TGTH",
  description:
    "With our Expert Team we are Ready to cater Services like Customer Support, Finance, IT Services, Digital Marketing, Logistics, Sales, HR Management etc.",
  alternates: {
    canonical: "https://tgth.com.au/our-services",
  },
};

export default function ServicePage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        description="At Team Global Talent Hub, we provide tailored offshoring solutions for diverse business needs, ensuring efficiency, quality, and seamless integration."
        imageUrl="/images/service/Tailored offshoring solutions by TGTH.webp"
        bgEarth
      />
      <GlobalTalent />
      {/* <Service /> */}
      <LeverageGlobalTalent />
      <ComprehensiveSolutions />
      {/* <OffshoreDetails /> */}
      <ExtendingTeam />
      <ContactUs />
      {/* <FAQ faqItems={faqItems} /> */}
    </>
  );
}
