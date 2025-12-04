import {
  ContactUs,
  // CounterSection,
  ExtendingTeam,
  // FAQ,
  OffshoreDetails,
  Service,
} from "@/components";
import { About, HeroSection, IndustriesService } from "./components";
// import { faqItems } from "./data";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const CounterSection = dynamic(
  () => import("../../components/ui/counters-section/CounterSection"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "TGTH - Leading Offshore Staffing Company in Australia",
  description: "Grow business through offshore team building in Australia. Get the best solution for remote staffing and virtual assistant outsourcing from the Philippines.",
  alternates: {
    canonical: "https://tgth.com.au",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CounterSection />
      <About />
      <Service hasBG={false} />
      <OffshoreDetails />
      <IndustriesService />
      <ExtendingTeam />
      <ContactUs />
      {/* <FAQ faqItems={faqItems} /> */}
    </>
  );
}
