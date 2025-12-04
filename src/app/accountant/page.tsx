import HowitWorks from "./components/how-it-works/HowitWorks";
import CoreCapabilities from "./components/core-capabilities/Corecapabilities";
import { HeroSection } from "./components/hero";
import AccelerateSuccess from "./components/Accelerate-success/AccelerateSuccess";

import Roles from "@/components/common/Roles";
import CustomerContactUs from "@/components/common/contact-us/CustomContactUs";
import SaveClient from "@/components/common/SaveClient";
import WhyHiringUs from "@/components/common/WhyHiringUs";
import FAQ from "@/components/common/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Save Money with Expert Offshore Accountant Services",
  description:
    "Cut costs and enhance your financial management with TGTH’s offshore Accountant services. Our skilled accountants provide precise reporting and compliance, allowing you to allocate resources more effectively. Contact us today to streamline your accounting processes and save on expenses!",
  alternates: {
    canonical: "https://tgth.com.au/accountant",
  },
};

const pageData = {
  WhyHiringUs: {
    title: "Why Offshore Your Accounting with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Offshoring your accounting with TGTH can cut costs by up to 70%. Eliminate expenses tied to hiring, infrastructure, payroll tax, and software—while gaining access to skilled professionals familiar with Australian accounting standards.",
      },
      {
        title: "Fluent English Speakers with Strong Professional Experience",
        description:
          "Our Filipino accountants are university graduates, fluent in English, and experienced in Australian accounting platforms and compliance. They deliver clear communication, professional reporting, and dependable financial oversight that mirrors your in-house standards.",
      },
      {
        title: "Seamless Cultural Alignment with Australian Businesses",
        description:
          "The Philippines has a long-standing professional and cultural synergy with Australia. Our accountants are familiar with Aussie work ethics, business practices, and communication norms, allowing smooth collaboration from day one.",
      },
      {
        title: "Greater Financial Accuracy and Operational Efficiency",
        description:
          "TGTH accountants are trained to ensure error-free data, on-time reporting, and real-time financial insights. From BAS preparation to reconciliations and reporting, they help you stay compliant and confident in your financial decisions.",
      },
    ],
  },
  FAQS: {
    faqs: [
      {
        id: 1,
        question: "How soon can my outsourced accountant start?",
        answer:
          "Typically within 7–14 business days, depending on your systems and requirements.",
      },
      {
        id: 2,
        question: "Will they use my company’s accounting software?",
        answer:
          "Yes. We support Xero, MYOB, QuickBooks, and other cloud-based systems to fit your workflow.",
      },
      {
        id: 3,
        question: "Do you offer part-time and full-time options?",
        answer:
          "Absolutely. Choose between part-time or full-time roles, and scale up or down as needed.",
      },
      {
        id: 4,
        question: "Can they work during Australian business hours?",
        answer:
          "Yes. We align their schedules with your preferred time zone and operational hours.",
      },
      {
        id: 5,
        question: "How do you ensure accuracy and confidentiality?",
        answer:
          "All data is protected with secure systems, strict access control, and professional protocols in line with industry best practices.",
      },
      {
        id: 6,
        question: "Can I scale support during busy financial periods?",
        answer:
          "Yes. We can increase accounting resources during peak times like EOFY, tax season, or financial audits.",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      {/* <HeroBelowHeading /> */}
      <AccelerateSuccess />
      <CoreCapabilities />
      <HowitWorks />
      <WhyHiringUs
        title={pageData.WhyHiringUs.title}
        reasons={pageData.WhyHiringUs.reasons}
      />
      {/* <ClientReviews /> */}
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
