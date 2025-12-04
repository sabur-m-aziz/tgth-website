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
    "Reduce Costs with Offshore AR & AP Specialist Services",
  description:
    "Improve your cash flow and minimise overhead with TGTH’s offshore AR and AP Specialist services. Our experts ensure timely payments and accurate invoicing, helping you save money while enhancing your financial operations. Get in touch now to boost your efficiency and reduce costs!",
  alternates: {
    canonical: "https://tgth.com.au/ar-ap-specialist",
  },
};

const pageData = {
  AccelerateSuccess: {
    title: "What an Offshore AR/AP Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide reliable, detail-oriented Accounts Receivable (AR) and Accounts Payable (AP) Specialists who help you manage the flow of money in and out of your business—accurately and efficiently.",
      "From processing invoices and issuing payments to reconciling accounts and following up on overdue balances, our specialists support your finance team with precision and consistency.",
      "They are experienced in tools like Xero, MYOB, QuickBooks, SAP, and NetSuite, and can work directly inside your existing systems. Whether you're a small business or a large enterprise, they act as a seamless extension of your accounting function, helping reduce manual errors, prevent payment delays, and improve financial visibility.",
      "By offshoring your AR/AP processes with TGTH, you gain a dependable partner who helps you save time, reduce costs, and stay compliant, while freeing up your internal team to focus on higher-value work.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our AR and AP Specialist",
    capabilities: [
      "Accounts Receivable Management: Managing the collection of outstanding invoices and ensuring timely payments from clients to maintain cash flow.",
      "Invoice Processing: Creating, issuing, and tracking invoices for goods and services provided, ensuring accuracy and compliance with company policies.",
      "Accounts Payable Management: Overseeing the processing of vendor invoices, ensuring timely payments to suppliers while managing cash flow effectively.",
      "Reconciliation: Performing regular reconciliations of accounts receivable and accounts payable to identify discrepancies and ensure accurate financial records.",
      "Payment Processing: Managing various payment methods (e.g., checks, electronic transfers) to ensure all transactions are processed accurately and on time.",
      "Credit Management: Assessing customer creditworthiness and managing credit limits to mitigate financial risk for the business.",
      "Reporting: Generating reports on accounts receivable and accounts payable performance, providing insights into cash flow and financial health.",
      "Dispute Resolution: Addressing and resolving any discrepancies or disputes with clients or vendors regarding invoices and payments.",
      "Data Entry: Accurately entering financial data into accounting systems to maintain up-to-date records for reporting and analysis.",
      "Collaboration with Teams: Working closely with finance, sales, and operations teams to ensure alignment on cash flow management and financial processes.",
      "Compliance and Auditing: Ensuring adherence to financial regulations and internal policies during accounts receivable and payable processes.",
      "Continuous Improvement: Identifying opportunities for improving processes and systems related to AR and AP functions to enhance efficiency and accuracy.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your accounts receivable and accounts payable needs. Our team collaborates with you to define the scope of work, including payment processes, invoicing, and reporting requirements.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified AR and AP specialists who match your specific criteria. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal AR and AP specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to manage your financial transactions effectively, maintaining cash flow and accuracy in your accounts.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your AR/AP Role with TGTH?",
    reasons: [
      {
        title: "Reduce Operational Costs Without Sacrificing Control",
        description:
          "Save up to 70% on labour and administration costs while maintaining full visibility over your finances. Our offshore specialists work under your supervision and follow your internal controls.",
      },
      {
        title: "Accuracy, Consistency, and Timely Processing",
        description:
          "Our professionals are trained to handle daily invoice management, payment runs, bank reconciliations, and ledger updates with precision, keeping your financials up to date and audit-ready.",
      },
      {
        title: "Familiar with Accounting Platforms and Compliance",
        description:
          "Our AR/AP Specialists are experienced with Australian accounting systems, tax codes, and payment processes. They understand local GST rules, payment terms, and reconciliation practices.",
      },
      {
        title: "Scalable Support for Busy Periods or Growth",
        description:
          "Need additional help during EOFY, audits, or periods of high transaction volume? TGTH offers flexible part-time and full-time solutions to meet your seasonal or ongoing needs.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How quickly can an AR/AP Specialist start?",
        answer:
          "Typically within 7–14 business days, depending on onboarding and system access.",
      },
      {
        id: 2,
        question: "Can they use our existing accounting software?",
        answer:
          "Yes. They are experienced in tools like Xero, QuickBooks, MYOB, SAP, NetSuite, and more.",
      },
      {
        id: 3,
        question: "Will they handle both payables and receivables?",
        answer:
          "They can handle one or both functions depending on your requirements.",
      },
      {
        id: 4,
        question: "Do they understand Australian tax and invoicing standards?",
        answer:
          "Absolutely. They are trained in local compliance, GST handling, and ATO reporting requirements.",
      },
      {
        id: 5,
        question: "Can they work during local business hours?",
        answer:
          "Yes. We align their shifts to your time zone to ensure seamless communication and processing.",
      },
      {
        id: 6,
        question: "Can I scale up during high-volume periods?",
        answer:
          "Definitely. We offer flexible, scalable solutions that grow with your finance team’s needs.",
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
