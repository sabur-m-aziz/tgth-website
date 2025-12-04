import { HeroSection } from "./components/hero";
import AccelerateSuccess from "@/components/common/AccelerateSuccess";
import CoreCapabilities from "@/components/common/Corecapabilities";
import HowItWorks from "@/components/common/HowitWorks";
import WhyHiringUs from "@/components/common/WhyHiringUs";
import FAQ from "@/components/common/FAQ";
import Roles from "@/components/common/Roles";
import SaveClient from "@/components/common/SaveClient";
import CustomerContactUs from "@/components/common/contact-us/CustomContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cut Costs with Expert Offshore Data Analyst Services",
  description:
    "Unlock valuable insights and save money with TGTH’s offshore Data Analyst services. Our experts analyse your data to inform strategic decisions, driving efficiency and reducing unnecessary spending. Get in touch now to optimise your data management and costs!",
  alternates: {
    canonical: "https://tgth.com.au/data-analyst",
  },
};

const pageData = {
  AccelerateSuccess: {
    title: "What an Offshore Data Analyst Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide experienced Data Analysts who turn raw numbers into actionable insights. From building dashboards and analysing trends to tracking KPIs and cleaning datasets, our analysts help you make better decisions, faster.",
      "They’re proficient in tools like Excel, Power BI, Google Data Studio, SQL, Tableau, and Python, capable of supporting teams across finance, marketing, operations, and sales. Whether you need help with weekly reports, forecasting models, or ad hoc data deep-dives, our offshore analysts work as a seamless extension of your internal team.",
      "With TGTH, you get accurate, reliable data support that reduces in-house workload and helps your team focus on strategy and execution, not spreadsheets.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Data Analyst",
    capabilities: [
      "Data collection: Gathering data from various sources, including databases, surveys, and external data feeds, to build comprehensive datasets for analysis.",
      "Data cleaning: Ensuring data accuracy and consistency by identifying and correcting errors or inconsistencies in datasets.",
      "Statistical analysis: Applying statistical methods and techniques to interpret data and derive meaningful insights that inform business decisions.",
      "Data visualisation: Creating visual representations of data (e.g., charts, graphs, dashboards) to clearly communicate findings and trends to stakeholders.",
      "Trend analysis: Identifying and analysing patterns and trends within data to forecast future outcomes and support strategic planning.",
      "Reporting: Preparing detailed reports that summarise findings, insights, and recommendations based on data analysis for management and stakeholders.",
      "Business intelligence: Utilising business intelligence tools (e.g., Tableau, Power BI) to provide interactive analyses and facilitate data-driven decision-making.",
      "Collaborative analysis: Working with cross-functional teams to understand data needs and provide analytical support for various projects.",
      "Predictive analytics: Developing models to predict future trends based on historical data, helping businesses to make proactive decisions.",
      "Database management: Assisting in the design and maintenance of databases to ensure efficient data storage, retrieval, and security.",
      "SQL proficiency: Using SQL (Structured Query Language) to query databases and extract relevant data for analysis.",
      "Continuous learning: Staying updated with the latest data analysis techniques, tools, and industry trends to enhance skills and improve analysis processes.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your data analysis needs and business objectives. Our team collaborates with you to define the scope of work, including the types of data to be analysed and specific goals for insights.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified data analysts who meet your specific requirements. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal data analyst, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to dive into your data, providing actionable insights that drive informed decision-making and enhance business performance.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Data Analyst Role with TGTH?",
    reasons: [
      {
        title: "High-Quality Insights, Lower Overhead",
        description:
          "Cut hiring costs by up to 70% while gaining access to analysts who deliver clean, clear, and business-ready insights. You skip recruitment delays and infrastructure expenses, while gaining immediate value.",
      },
      {
        title: "Proficient in Tools and Techniques",
        description:
          "Our analysts are skilled in tools like Excel, Power BI, SQL, Google Sheets, Tableau, and Python. From pivot tables to regression models, they can handle advanced analysis, automation, and reporting with ease.",
      },
      {
        title: "Aligned with Your Business Goals",
        description:
          "Fluent in English and trained to work with Australian companies, our analysts understand how to present data clearly, support team decision-making, and stay aligned with your KPIs and timelines.",
      },
      {
        title: "Scalable Support to Match Your Data Needs",
        description:
          "Need a part-time analyst for reporting, or a full-time resource embedded in your team? TGTH provides flexible solutions that grow with your business needs.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How quickly can a Data Analyst start?",
        answer:
          "Typically within 7–14 business days, depending on onboarding and access to systems.",
      },
      {
        id: 2,
        question: "What kind of reports can they create?",
        answer:
          "They can build custom dashboards, automate recurring reports, analyse trends, and provide executive summaries.",
      },
      {
        id: 3,
        question: "Can they use our existing tools and systems?",
        answer:
          "Yes. They work within your current data platforms like Excel, CRMs, Google Analytics, BI tools, and more.",
      },
      {
        id: 4,
        question: "Will they work during our business hours?",
        answer:
          "Absolutely. We align their schedule to your time zone for real-time collaboration and faster turnaround.",
      },
      {
        id: 5,
        question:
          "Are they experienced in both technical and business-facing work?",
        answer:
          "Yes. Our analysts bridge the gap between data and strategy, they clean and analyze data, but also explain what it means.",
      },
      {
        id: 6,
        question: "Is this a long-term or short-term solution?",
        answer:
          "Both. Whether you need ongoing analytics support or help with a specific project, TGTH provides the flexibility to fit your needs.",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <AccelerateSuccess
        title={pageData.AccelerateSuccess.title}
        paragraphs={pageData.AccelerateSuccess.paragraphs}
      />
      <CoreCapabilities
        title={pageData.CoreCapabilities.title}
        capabilities={pageData.CoreCapabilities.capabilities}
      />
      <HowItWorks steps={pageData.HowItWorks.steps} />
      <WhyHiringUs
        title={pageData.WhyHiringUs.title}
        reasons={pageData.WhyHiringUs.reasons}
      />
      <SaveClient />
      <Roles />
      <div id="contact">
        <CustomerContactUs />
      </div>
      <FAQ faqs={pageData.FAQ.faqs} />
    </>
  );
};

export default page;
