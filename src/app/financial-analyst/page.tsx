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
    "Maximise Savings with Offshore Financial Analyst Services",
  description:
    "Strengthen your financial strategy and save money with TGTH’s offshore Financial Analyst services. Our professionals provide insightful analysis that helps identify cost-saving opportunities. Get in touch now to optimise your financial planning and boost profitability!",
  alternates: {
    canonical: "https://tgth.com.au/financial-analyst",
  },
};

const pageData = {
  WhyHiringUs: {
    title: "Why Offshore Your Financial Analysis with TGTH?",
    reasons: [
      {
        title: "Cut Finance Costs While Gaining Strategic Expertise",
        description:
          "Hiring in-house analysts is expensive. With TGTH, you save up to 70% while gaining access to finance professionals trained in Australian reporting standards who deliver timely, accurate, and strategic analysis at scale.",
      },
      {
        title: "Qualified, English-Speaking Analysts with Global Experience",
        description:
          "Our Financial Analysts are university graduates in finance, accounting, or economics. They are fluent in English and well-versed in tools such as Excel, Power BI, and financial ERPs, ensuring professional communication and sharp financial thinking.",
      },
      {
        title:
          "Seamless Integration with Australian Business Culture and Tools",
        description:
          "The Philippines shares a strong cultural and operational alignment with Australia. Our analysts understand local financial expectations, timelines, and compliance standards, delivering reports and insights that feel in-house—without the local cost.",
      },
      {
        title: "Improve Accuracy, Agility, and Strategic Planning",
        description:
          "Our analysts don’t just crunch numbers—they help you uncover trends, evaluate risks, and model growth scenarios that support your business objectives. With TGTH, you can forecast with confidence and drive smarter financial strategies.",
      },
    ],
  },
  FAQS: {
    faqs: [
      {
        id: 1,
        question: "What tasks do TGTH Financial Analysts handle?",
        answer:
          "We cover budgeting, forecasting, cost analysis, profitability reviews, KPI dashboards, investor reporting, and variance analysis.",
      },
      {
        id: 2,
        question: "Can the analyst work with my accounting and ERP systems?",
        answer:
          "Yes. Our analysts are trained in tools like Xero, MYOB, QuickBooks, Excel, NetSuite, SAP, and data visualisation tools like Power BI and Tableau.",
      },
      {
        id: 3,
        question: "Do you offer flexible engagement options?",
        answer:
          "Absolutely. Choose between part-time, full-time, or project-based support based on your financial workload.",
      },
      {
        id: 4,
        question: "Will the analyst work during Australian business hours?",
        answer:
          "Yes. We align schedules to your preferred Australian time zone to ensure real-time collaboration and timely reporting.",
      },
      {
        id: 5,
        question: "How do you maintain data confidentiality?",
        answer:
          "We use secure, encrypted platforms and enforce strict NDAs and access control policies to protect your financial data.",
      },
      {
        id: 6,
        question: "Can you provide support during audits or board meetings?",
        answer:
          "Yes. Our analysts can assist with audit prep, board packs, investor reporting, and other strategic deliverables.",
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
