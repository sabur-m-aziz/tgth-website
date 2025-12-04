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
    "Cut Payroll Costs with Offshore Payroll Specialist Services",
  description:
    "Streamline your payroll processes and save money with TGTH’s offshore Payroll Specialist services. Our professionals ensure accurate and timely payroll management, reducing administrative expenses. Get in touch now to optimise your payroll operations and improve efficiency!",
  alternates: {
    canonical: "https://tgth.com.au/payroll-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Simplify Payroll and Ensure Compliance with an Experienced Offshore Payroll Specialist",
    titleTwo: "",
    description:
      "Ensure accurate, compliant payroll processing every cycle with a trusted offshore Payroll Specialist.",
    image: "Payroll Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "How an Offshore Payroll Specialist Ensures Accuracy and Regulatory Compliance",
    paragraphs: [
      "At TGTH, we provide experienced, offshore Payroll Specialists who help Australian businesses manage employee pay, entitlements, and compliance obligations efficiently and error-free. Our professionals handle the full payroll lifecycle—including pay calculations, superannuation, PAYG, leave entitlements, tax filing, and report generation—while aligning with Australian Fair Work and ATO standards.",
      "Our Payroll Specialists operate as an extension of your HR or finance team, ensuring your workforce is paid accurately and on time, every time. Whether you’re a small business with a growing team or a larger organisation managing complex payroll structures, our specialists deliver scalable, confidential, and compliant payroll processing without the local overhead.",
      "Outsourcing payroll with TGTH means peace of mind, reduced administrative burden, and more time to focus on growing your business.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Payroll Specialists",
    capabilities: [
      "Payroll processing: Managing the entire payroll process, including calculating salaries, deductions, and net pay to ensure timely and accurate employee compensation.",
      "Tax compliance: Ensuring adherence to local, state, and federal tax regulations by accurately withholding and remitting payroll taxes on behalf of employees.",
      "Time and attendance management: Tracking employee hours, leave, and attendance to ensure proper compensation and compliance with company policies.",
      "Benefits administration: Managing employee benefits programs, including health insurance, retirement plans, and other perks, ensuring accurate deductions and compliance.",
      "Employee record maintenance: Keeping accurate and up-to-date records of employee information, payroll changes, and tax documents for compliance and reporting purposes.",
      "Reporting: Generating payroll reports, tax filings, and other necessary documentation for management and regulatory compliance.",
      "Direct deposit management: Setting up and managing direct deposit processes to ensure employees receive their pay promptly and securely.",
      "Payroll software proficiency: Utilising payroll software and tools to streamline payroll processes, enhancing accuracy and efficiency.",
      "Dispute resolution: Addressing and resolving any payroll-related inquiries or discrepancies raised by employees in a timely manner.",
      "Confidentiality and data security: Ensuring the confidentiality and security of sensitive employee payroll data and complying with data protection regulations.",
      "Continuous process improvement: Identifying opportunities for improving payroll processes and systems to enhance efficiency and reduce errors.",
      "Collaboration with HR: Working closely with the HR team to ensure alignment on employee compensation, benefits, and compliance issues.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin by understanding your payroll requirements and business objectives. Our team collaborates with you to define the scope of work, including payroll frequency, employee details, and compliance needs.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we source and screen qualified payroll specialists who fit your specific criteria. You’ll receive a curated list of candidates, complete with their relevant experience and expertise.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal payroll specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to manage your payroll processes efficiently, delivering accurate and timely payroll services that meet your business needs.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Payroll Specialist Role with TGTH?",
    reasons: [
      {
        title: "Cut Payroll Costs Without Sacrificing Accuracy",
        description:
          "TGTH helps you reduce payroll processing costs by up to 70%. You save on hiring, software subscriptions, and compliance risks—while gaining expert support that meets Australian payroll regulations and deadlines.",
      },
      {
        title: "Experienced, English-Fluent Payroll Professionals",
        description:
          "Our Payroll Specialists are university-educated, fluent in English, and well-versed in Australian payroll laws, modern awards, and Fair Work obligations. They ensure accurate data entry, timely reporting, and professional communication with your internal teams.",
      },
      {
        title: "Seamless Fit with Australian Business Culture and Systems",
        description:
          "The Philippines and Australia share strong cultural and professional alignment. Our payroll experts integrate effortlessly with your existing platforms like Xero, MYOB, QuickBooks, KeyPay, and Employment Hero, and communicate with clarity and accountability.",
      },
      {
        title: "Ensure Compliance and Reduce Payroll Risk",
        description:
          "TGTH helps you avoid penalties and payroll errors by maintaining compliance with ATO guidelines, Fair Work legislation, and STP reporting. We track legislative changes and adjust your payroll processes accordingly—keeping your business protected.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What tasks do TGTH Payroll Specialists handle?",
        answer:
          "We manage pay calculations, timesheet processing, superannuation, PAYG, STP submissions, leave tracking, and year-end reporting.",
      },
      {
        id: 2,
        question: "Can your team work with our existing payroll software?",
        answer:
          "Yes. We work within your systems, including Xero, MYOB, QuickBooks, KeyPay, Employment Hero, and others.",
      },
      {
        id: 3,
        question: "Do you offer both part-time and full-time support?",
        answer:
          "Absolutely. Choose from part-time, full-time, or project-based payroll support depending on your business size and payroll volume.",
      },
      {
        id: 4,
        question: "Will the specialist work during Australian business hours?",
        answer:
          "Yes. Our payroll professionals align with your Australian time zone for real-time communication and on-time submissions.",
      },
      {
        id: 5,
        question: "How do you ensure data privacy and payroll security?",
        answer:
          "We follow strict confidentiality protocols, use encrypted systems, and ensure secure handling of all payroll-related data.",
      },
      {
        id: 6,
        question:
          "Can TGTH manage payroll for multiple entities or pay cycles?",
        answer:
          "Yes. We support weekly, fortnightly, and monthly payroll cycles, and can manage payroll across multiple ABNs or business divisions.",
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
