import { Gallery, HeroSection } from "@/components";
import { CoreValues, DirectorsTalk, WhoWeAre } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exciting Journey of Team Global Talent Hub",
  description:
    "Discover TGTH's journey of over 6 years, focused on empowering businesses worldwide through offshore talent solutions.",
  alternates: {
    canonical: "https://tgth.com.au/about",
  },
};

export default function About() {
  return (
    <>
      <HeroSection
        title="About Us"
        description="We are committed to providing the best available talent for your roles, delivering personalised account support to assist in driving your business growth."
        imageUrl="/images/about/About TGTH.webp"
      />
      <WhoWeAre />
      <CoreValues />
      <DirectorsTalk />
      <Gallery />
    </>
  );
}
