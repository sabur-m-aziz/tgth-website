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
    "Save Money with Our Expert Offshore Finance Specialist Services",
  description:
    "Optimise your financial management and save costs with our Offshore Finance Specialists from the Philippines. Benefit from professional expertise while ensuring compliance and efficiency in your operations.",
  alternates: {
    canonical: "https://tgth.com.au/finance-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne: "Optimise Your Finances with Offshore Finance Specialists",
    titleTwo: "",
    description:
      "Enhance financial operations with skilled Finance Specialists from the Philippines, ensuring accuracy and efficiency.",
    image: "Finance Specialist.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Finance Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly qualified offshore Finance Specialists who ensure your financial operations run smoothly and strategically. From bookkeeping and payroll to financial reporting and analysis, our specialists deliver accurate, timely, and reliable support that strengthens decision-making and compliance.",
      "Our Finance Specialists are more than just number crunchers, they act as trusted partners who align financial processes with your business objectives. Whether you need day-to-day accounting support, assistance with compliance, or detailed financial analysis, TGTH ensures you have the expertise to manage finances effectively.",
      "By offshoring with TGTH, you reduce costs, minimise errors, and gain access to finance professionals who keep your accounts organised and your business on track for growth.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Offshore Finance Specialists",
    capabilities: [
      "Bookkeeping: Recording transactions and maintaining accurate financial records.",
      "Payroll processing: Managing employee wages, superannuation, and compliance requirements.",
      "Accounts payable & receivable: Handling invoicing, payments, and collections.",
      "Budget preparation: Assisting with the creation and monitoring of budgets.",
      "Financial reporting: Preparing monthly, quarterly, and annual reports with accuracy.",
      "Tax compliance support: Assisting with tax documentation and regulatory requirements.",
      "Bank reconciliation: Ensuring financial statements match bank records.",
      "Cash flow management: Monitoring inflows and outflows to maintain healthy liquidity.",
      "Expense tracking: Recording and categorising expenses for financial clarity.",
      "Forecasting & analysis: Providing insights into financial performance and future trends.",
      "Audit preparation: Compiling necessary documentation for internal or external audits.",
      "ERP and accounting software proficiency: Skilled in MYOB, Xero, QuickBooks, SAP, and other systems.",
      "Regulatory knowledge: Understanding compliance with Australian accounting standards.",
      "Process improvement: Identifying inefficiencies and suggesting cost-saving solutions.",
      "Attention to detail: Ensuring error-free data entry and reporting.",
      "Confidentiality & integrity: Safeguarding sensitive financial information.",
      "Team collaboration: Working alongside executives, accountants, and auditors.",
      "Time management: Meeting deadlines for reports, payroll, and compliance obligations.",
      "Adaptability: Supporting businesses through growth, restructuring, or seasonal demands.",
      "Problem-solving: Analysing discrepancies and implementing corrective actions.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a comprehensive discussion to assess your financial needs and specific challenges.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "We match you with qualified Finance Specialists who possess the skills and expertise relevant to your requirements.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your Finance Specialist integrates smoothly into your team, providing immediate support and enhancing your financial processes.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Finance Specialist with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Accuracy",
        description:
          "Offshoring financial functions with TGTH reduces labour and operational costs by up to 70%. You avoid expenses tied to recruitment, office space, and benefits, while gaining access to skilled finance professionals.",
      },
      {
        title: "Experienced Specialists with Global Expertise",
        description:
          "Our Finance Specialists in the Philippines are university-qualified, fluent in English, and experienced in working with international businesses. They bring technical proficiency and a strong understanding of global finance practices.",
      },
      {
        title: "Seamless Alignment with Australian Standards",
        description:
          "With familiarity in Australian accounting practices, taxation, and compliance, our team members ensure financial processes align with local requirements and expectations. This makes integration into your business straightforward and reliable.",
      },
      {
        title: "Enhanced Accuracy and Efficiency",
        description:
          "By partnering with TGTH, you gain dependable finance support that reduces errors, speeds up reporting, and strengthens financial oversight. Our specialists work within your systems and workflows, helping you make confident, informed decisions.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question:
          "What qualifications do your offshore Finance Specialists have?",
        answer:
          "Our specialists are experienced professionals, often with degrees in finance, accounting, or related fields.",
      },
      {
        id: 2,
        question: "How do you ensure high-quality candidates?",
        answer:
          "We conduct thorough vetting, including background checks and assessments, to ensure only the best are selected.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Finance Specialist?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity and alignment on financial goals.",
      },
      {
        id: 4,
        question: "What if I need to change my Finance Specialist?",
        answer:
          "You can request a different specialist at any time if your needs change.",
      },
      {
        id: 5,
        question:
          "How do I manage my offshore Finance Specialist effectively?",
        answer:
          "We provide tools and resources to facilitate task management and communication for seamless collaboration.",
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
