import { FAQ, Gallery, HeroSection } from "@/components";
import { JobList, Leadership } from "./components";
import { Metadata } from "next";
// import { faqItems } from "./data";

export const metadata: Metadata = {
  title: "Join TGTH Team and level up your Career",
  description:
    "All the Current Openning in TGTH are Listed below. Apply with Your full Confidence and Join the Thriving Team to Create Great Impact.",
  alternates: {
    canonical: "https://tgth.com.au/careers",
  },
};

export default function ServicePage() {
  return (
    <>
      <HeroSection
        title="Careers"
        description="We’re always searching for amazing people to join our team. Take a look at our current openings."
        imageUrl="/images/career/Career at TGTH.webp"
      />
      <JobList />
      <Leadership />
      <Gallery />
      {/* <FAQ faqItems={faqItems} /> */}
    </>
  );
}
