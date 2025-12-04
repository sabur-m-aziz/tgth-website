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
    "Reduce Costs with Offshore Procurement Specialist Services",
  description:
    "Enhance your sales efficiency and reduce costs with TGTH’s offshore Sales Support services. Our dedicated team provides essential support to boost your sales efforts while saving money. Get in touch now to streamline your sales processes and improve profitability!",
  alternates: {
    canonical: "https://tgth.com.au/procurement-specialist",
  },
};

const pageData = {
  WhyHiringUs: {
    title: "Why Offshore Your Procurement with TGTH?",
    reasons: [
      {
        title: "Drive Cost Savings Without Sacrificing Quality",
        description:
          "With TGTH, you save up to 70% on procurement staff costs by outsourcing to highly trained professionals in the Philippines. Eliminate hiring overheads, reduce errors, and benefit from streamlined sourcing and negotiations that protect your margins.",
      },
      {
        title: "Qualified, Detail-Oriented Professionals Fluent in English",
        description:
          "Our Procurement Specialists are university-educated, fluent in English, and experienced in managing supplier pipelines, contract negotiations, and purchasing operations. They deliver professional communication, accurate reporting, and strong attention to detail.",
      },
      {
        title: "Cultural and Operational Fit for Australian Supply Chains",
        description:
          "The Philippines has a strong business and communication alignment with Australia. Our team members understand local vendor dynamics, compliance expectations, and purchasing standards—making the collaboration easy, consistent, and professional.",
      },
      {
        title: "Boost Efficiency Across Your Procurement Workflow",
        description:
          "From raising POs and tracking delivery timelines to maintaining accurate supplier databases and managing reorder points, our Procurement Specialists enhance your team’s productivity and help reduce procurement cycle times.",
      },
    ],
  },
  FAQS: {
    faqs: [
      {
        id: 1,
        question: "What procurement tasks can TGTH handle?",
        answer:
          "We support supplier sourcing, purchase order processing, RFQs, data entry, vendor follow-ups, and procurement reporting.",
      },
      {
        id: 2,
        question:
          "Can your specialist work with our procurement tools and ERPs?",
        answer:
          "Yes. Our team is experienced in tools like SAP, Oracle, NetSuite, Zoho, Microsoft Dynamics, and other custom platforms.",
      },
      {
        id: 3,
        question: "Are part-time or full-time roles available?",
        answer:
          "Yes. We offer part-time, full-time, and project-based procurement support based on your needs.",
      },
      {
        id: 4,
        question: "Will the specialist work in my time zone?",
        answer:
          "Yes. We adjust work schedules to match your Australian business hours for seamless communication and task coordination.",
      },
      {
        id: 5,
        question: "How do you ensure supplier data accuracy and compliance?",
        answer:
          "Through regular audits, structured workflows, and standard operating procedures, our team ensures full accuracy and compliance.",
      },
      {
        id: 6,
        question: "Can you scale procurement support during busy seasons?",
        answer:
          "Absolutely. We can rapidly expand your procurement team during peak inventory cycles or urgent sourcing periods.",
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
