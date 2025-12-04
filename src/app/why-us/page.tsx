import { OffshoreDetails, Service } from "@/components";
import { HeroSection } from "@/components";
import { CompanyStrategy, WhyPhilippines } from "./components";
import dynamic from "next/dynamic";
import { Metadata } from "next";
// import { faqItems } from "./data";
const CounterSection = dynamic(
  () => import("../../components/ui/counters-section/CounterSection"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Why Should you Work with TGTH?",
  description:
    "TGTH can be Your Perfect Partner to bring Sutainable Business Growth at Affordable Cost with Tailored Offshore Solutiuons from Philippines.",
  alternates: {
    canonical: "https://tgth.com.au/why-us",
  },
};

export default function About() {
  return (
    <>
      <HeroSection
        title="Why Us"
        description="Revolutionise your business with our offshoring services. Tap into a global pool of skilled professionals boosting your competitiveness in the market all while reducing your payroll and operational costs."
        imageUrl="/images/why-us/TGTH is the best offshoring solution provider.webp"
      />
      <CounterSection />
      <WhyPhilippines />
      <CompanyStrategy />
      <OffshoreDetails hasBG={false} />
      <Service hasBG />
      {/* <FAQ faqItems={faqItems} background="white" /> */}
    </>
  );
}
