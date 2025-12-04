import AccelerateSuccess from "@/components/common/AccelerateSuccess";
import CoreCapabilities from "@/components/common/Corecapabilities";
import HowItWorks from "@/components/common/HowitWorks";
import WhyHiringUs from "@/components/common/WhyHiringUs";
import FAQ from "@/components/common/FAQ";
import Roles from "@/components/common/Roles";
import SaveClient from "@/components/common/SaveClient";
import CustomerContactUs from "@/components/common/contact-us/CustomContactUs";
import { HeroSection } from "@/components/common/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Save Costs with Our Reliable Offshore Data Entry Specialist",
  description:
    "Improve your data management and save costs with our Offshore Data Entry Specialists from the Philippines. Enjoy accurate and efficient data handling that supports your business operations.",
  alternates: {
    canonical: "https://tgth.com.au/data-entry-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Optimise Efficiency with Offshore Data Entry Specialists",
    titleTwo: "",
    description:
      "Streamline your data management with skilled Data Entry Specialists from the Philippines, ensuring accuracy and speed.",
    image: "Data Entry Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Data Entry Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly trained offshore Data Entry Specialists who ensure your business records remain accurate, up-to-date, and well-organised. From entering and verifying information to managing databases and generating reports, our specialists help you maintain efficiency and data integrity across all departments.",
      "Our Data Entry Specialists are more than just administrators, they act as reliable extensions of your team, helping you process large volumes of information with speed and precision. Whether you're managing customer records, financial data, or inventory systems, TGTH ensures your data remains accurate, secure, and accessible when you need it most.",
      "By offshoring with TGTH, you gain a cost-effective solution that reduces in-house workload, minimises errors, and supports smarter decision-making.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Data Entry Specialists",
    capabilities: [
      "Data input: Accurately entering information into systems, spreadsheets, and databases.",
      "Data verification: Checking and correcting errors to ensure accuracy and consistency.",
      "Database management: Organising and maintaining large datasets.",
      "Document processing: Digitising, indexing, and categorising records.",
      "CRM updates: Managing customer records and account details.",
      "Inventory data management: Recording stock levels and product information.",
      "Financial data entry: Processing invoices, payments, and expense records.",
      "Order entry: Recording and tracking sales and purchase orders.",
      "Reporting: Generating basic reports and summaries for internal use.",
      "File management: Maintaining structured and accessible digital filing systems.",
      "Compliance checks: Ensuring data aligns with regulatory and company standards.",
      "Attention to detail: Minimising errors in data handling.",
      "Time management: Meeting deadlines in high-volume environments.",
      "Confidentiality: Handling sensitive business and customer information securely.",
      "Multitasking: Managing multiple data sources and systems simultaneously.",
      "Adaptability: Adjusting quickly to new tools, software, and processes.",
      "Process optimisation: Identifying opportunities for efficiency improvements.",
      "Collaboration: Working closely with finance, operations, and customer service teams.",
      "Technical proficiency: Skilled in Microsoft Office, Google Workspace, and ERP systems.",
      "Continuous learning: Staying updated with emerging data management practices.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a detailed consultation to understand your data entry needs and specific project requirements.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Data Entry Specialists from the Philippines who align with your operational needs.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Data Entry Specialist integrates smoothly into your team, providing immediate support and enhancing your data management processes.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Data Entry with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Accuracy",
        description:
          "Offshoring data entry with TGTH can reduce labour and operational costs by up to 70%. You gain access to skilled specialists without the expense of local hires.",
      },
      {
        title: "Experienced Specialists with Global Knowledge",
        description:
          "Our Data Entry Specialists in the Philippines are university-educated, fluent in English, and trained to manage complex data for businesses across industries.",
      },
      {
        title: "Seamless Integration with Australian Businesses",
        description:
          "The Philippines has strong cultural and professional alignment with Australia, ensuring clear communication and smooth process integration.",
      },
      {
        title:
          "Scalable, Reliable Support",
        description:
          "With TGTH, you can scale your data entry needs quickly. Our specialists deliver consistent accuracy and efficiency, enabling your business to operate with confidence.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Data Entry Specialists have?",
        answer:
          "Our specialists are trained professionals with experience in data management and proficient in various data entry software.",
      },
      {
        id: 2,
        question: "How do you ensure accuracy in data entry?",
        answer:
          "We implement a thorough selection process, including skills assessments and regular quality checks, to maintain high standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Data Entry Specialist?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity in data requirements and project expectations.",
      },
      {
        id: 4,
        question: "What if I need to change my Data Entry Specialist?",
        answer:
          "You can request a different specialist at any time if your needs or project requirements change.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Data Entry Specialist?",
        answer:
          "We provide tools and resources for effective communication and task management, ensuring a smooth workflow and collaboration.",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <HeroSection
        titleOne={pageData.Hero.titleOne}
        titleTwo={pageData.Hero.titleTwo}
        descrption={pageData.Hero.description}
        image={pageData.Hero.image}
      />
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
