import HowitWorks from "./components/how-it-works/HowitWorks";
import CoreCapabilities from "./components/core-capabilities/Corecapabilities";
import { HeroSection } from "./components/hero";
import AccelerateSuccess from "./components/Accelerate-success/AccelerateSuccess";
import CustomerContactUs from "./components/contact-us/CustomContactUs";
import Roles from "@/components/common/Roles";
import SaveClient from "@/components/common/SaveClient";
import WhyHiringUs from "@/components/common/WhyHiringUs";
import FAQ from "@/components/common/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cut Marketing Costs with Offshore Graphic Designer Services",
  description:
    "Transform your branding without breaking the bank with TGTH’s offshore Graphic Designer services. Our talented designers create impactful visuals that resonate with your audience while helping you save on marketing expenses. Contact us today to elevate your brand affordably!",
  alternates: {
    canonical: "https://tgth.com.au/graphic-designer",
  },
};

const pageData = {
  WhyHiringUs: {
    title: "",
    reasons: [
      {
        title: "Cut Creative Costs Without Compromising Quality",
        description:
          "Hiring a full-time designer in-house can be costly. With TGTH, you reduce costs by up to 70% on design-related expenses including salaries, software licenses, and equipment—while gaining access to top-tier creative professionals.",
      },
      {
        title: "Skilled, English-Speaking Designers with Strong Portfolios",
        description:
          "Our designers are university-trained, fluent in English, and experienced in creating assets for Australian and global brands. From marketing collateral to UI/UX design, expect a high standard of creativity, communication, and responsiveness.",
      },
      {
        title: "Strong Cultural Alignment with Australian Brands",
        description:
          "The Philippines shares a design sensibility and work ethic that aligns closely with Australia. Our team understands your target audience, tone, and visual expectations—making the collaboration natural and the results on-point.",
      },
      {
        title: "Faster Turnaround and Flexible Design Support",
        description:
          "TGTH helps you stay ahead of your marketing and brand timelines. With flexible staffing and responsive communication, you can manage content calendars, seasonal campaigns, and branding needs without delays or creative bottlenecks.",
      },
    ],
  },
  FAQS: {
    faqs: [
      {
        id: 1,
        question: "What types of design projects can your designers handle?",
        answer:
          "Everything from logos, brochures, social media content, and ads to website graphics, email templates, and presentations.",
      },
      {
        id: 2,
        question: "Will they use our brand guidelines and assets?",
        answer:
          "Absolutely. Our designers are trained to work within your brand standards and collaborate with your team or marketing agency.",
      },
      {
        id: 3,
        question: "Can I hire a designer on a part-time or full-time basis?",
        answer:
          "Yes. We offer flexible options including project-based, part-time, and full-time designer engagements.",
      },
      {
        id: 4,
        question: "Will the designer work during Australian business hours?",
        answer:
          "Yes. We align your designer’s schedule to suit your working hours for smooth collaboration and fast feedback loops.",
      },
      {
        id: 5,
        question: "What design tools do your team use?",
        answer:
          "Our designers are proficient in Adobe Photoshop, Illustrator, InDesign, XD, Figma, Canva, and more.",
      },
      {
        id: 6,
        question: "Can you scale design support for big campaigns or rebrands?",
        answer:
          "Yes. We can increase design capacity quickly for product launches, rebrands, seasonal promotions, or multi-channel campaigns.",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <AccelerateSuccess />
      <CoreCapabilities />
      <HowitWorks />
      <WhyHiringUs
        title={pageData.WhyHiringUs.title}
        reasons={pageData.WhyHiringUs.reasons}
      />
      <SaveClient />
      <Roles />
      <div id="contact">
        <CustomerContactUs />
      </div>
      <FAQ faqs={pageData.FAQS.faqs} />
    </>
  );
};

export default page;
