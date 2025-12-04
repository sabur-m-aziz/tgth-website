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
    "Save Money with Offshore Customer Service Representatives",
  description:
    "Enhance customer satisfaction and reduce costs with TGTH’s offshore Customer Service Representative services. Our skilled team delivers exceptional support while helping you save on operational expenses. Contact us today to improve your service quality and budget!",
  alternates: {
    canonical: "https://tgth.com.au/customer-service-representative",
  },
};

const pageData = {
  WhyHiringUs: {
    title: "Why Offshore Your Customer Service with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Offshoring your customer service with TGTH can reduce Labour and operational expenses by up to 70%. You eliminate costs related to recruitment, office infrastructure, equipment, and employee benefits, while gaining access to highly skilled professionals who deliver exceptional service.",
      },
      {
        title: "Fluent English Speakers with Strong Professional Experience",
        description:
          "Our customer service specialists in the Philippines are fluent in English, university-educated, and have experience working in a variety of business support roles. You can expect clear, effective communication and service that mirrors the quality of in-house teams.",
      },
      {
        title: "Seamless Cultural Alignment with Australian Businesses",
        description:
          "The Philippines has a long-standing cultural and business connection with Australia. Our team members are familiar with Australian communication styles, values, and expectations, making interactions feel natural and aligned with your brand voice.",
      },
      {
        title: "Greater Efficiency and 24/7 Service Coverage",
        description:
          "With TGTH, you can offer round-the-clock customer support, quicker response times, and consistently meet service-level targets. Our teams integrate effortlessly with your tools and workflows, helping you enhance customer satisfaction and operational efficiency.",
      },
    ],
  },
  FAQS: {
    faqs: [
      {
        id: 1,
        question: "How soon can my outsourced assistant start?",
        answer:
          "Usually within 7–14 business days, depending on training and onboarding timelines.",
      },
      {
        id: 2,
        question: "Will they use my company’s systems and tools?",
        answer:
          "Yes. Our staff are trained to work within your existing systems, including CRMs and email platforms.",
      },
      {
        id: 3,
        question: "Do you provide part-time or full-time options?",
        answer:
          "We offer both. Scale your team up or down as your business demands.",
      },
      {
        id: 4,
        question: "Can they work during Australian business hours?",
        answer:
          "Absolutely. We align shifts with your time zone and preferred working hours.",
      },
      {
        id: 5,
        question: "How do you ensure quality and accountability?",
        answer:
          "Weekly reporting, KPI tracking, and direct supervisor oversight ensure consistent service delivery.",
      },
      {
        id: 6,
        question: "Is this service flexible for peak periods?",
        answer:
          "Yes. We can rapidly scale your team to meet seasonal or sudden demand spikes.",
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
