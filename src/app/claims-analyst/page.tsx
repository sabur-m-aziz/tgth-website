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
    "Cut Costs with Expert Offshore Claims Analyst Services Today",
  description:
    "Streamline your claims processing and save costs by hiring Offshore Claims Analysts from the Philippines. Benefit from accuracy and expertise while improving your overall claims management.",
  alternates: {
    canonical: "https://tgth.com.au/claims-analyst",
  },
};

const pageData = {
  Hero: {
    titleOne: "Streamline Claims Processing with Expert Analysts",
    titleTwo: "",
    description:
      "Enhance efficiency and accuracy with skilled Claims Analysts from the Philippines managing your claims effectively.",
    image: "Claims_Analyst.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Claims Analyst Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Claims Analysts who manage the end-to-end claims process with efficiency and attention to detail. From reviewing claim submissions to verifying documentation and coordinating resolutions, our analysts ensure that every case is handled with fairness, accuracy, and compliance.",
      "Our Claims Analysts don’t just process paperwork, they act as problem solvers who balance business objectives with customer needs. Whether working in insurance, healthcare, finance, or other industries, TGTH professionals deliver reliable, timely claims support that reduces errors, speeds up processing times, and fosters customer trust.",
      "By offshoring with TGTH, you gain a cost-effective solution that relieves your internal teams, improves service quality, and ensures claims are resolved promptly and accurately.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Claims Analysts",
    capabilities: [
      "Claims processing: Reviewing, validating, and managing claims from submission to resolution.",
      "Documentation review: Verifying supporting documents for completeness and accuracy.",
      "Fraud detection: Identifying discrepancies or potential fraudulent claims.",
      "Policy and compliance knowledge: Ensuring claims adhere to company policies and regulatory standards.",
      "Data entry: Maintaining accurate claim records in internal systems and databases.",
      "Customer communication: Responding to claimants with updates, clarifications, and resolutions.",
      "Problem-solving: Addressing complex claim issues with logical and fair solutions.",
      "Analytical skills: Interpreting claim data and trends to support business decisions.",
      "Reporting: Preparing detailed claim reports for management and compliance purposes.",
      "Time management: Meeting service-level agreements (SLAs) and turnaround targets.",
      "Cross-functional collaboration: Working with underwriting, legal, and finance teams for claim resolution.",
      "Dispute resolution: Mediating and resolving contested or denied claims.",
      "Confidentiality: Safeguarding sensitive financial and personal customer information.",
      "Adaptability: Managing varied claims across industries with different requirements.",
      "Attention to detail: Minimising errors in claim processing and documentation.",
      "Regulatory awareness: Staying up to date with local and international compliance standards.",
      "System proficiency: Skilled in claims management platforms, CRM systems, and data analysis tools.",
      "Trend analysis: Identifying recurring claim patterns to improve processes.",
      "Process improvement: Recommending workflow enhancements to increase efficiency.",
      "Customer empathy: Balancing efficiency with care to ensure a positive customer experience.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a thorough consultation to assess your claims processing needs and operational challenges.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Claims Analysts who align with your specific requirements and business goals.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Claims Analyst integrates smoothly into your team, ensuring immediate support and enhancing your claims management process.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Claims Analyst with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Outsourcing claims processing with TGTH reduces labour and operational costs by up to 70%. You save on recruitment, training, and overheads while gaining access to trained professionals who deliver accurate and efficient claim resolutions.",
      },
      {
        title: "Experienced Professionals with Industry Knowledge",
        description:
          "Our Claims Analysts in the Philippines are university-educated, fluent in English, and experienced in supporting global insurance, healthcare, and financial services companies. They bring both technical expertise and customer service skills to every case.",
      },
      {
        title: "Seamless Alignment with Australian Standards",
        description:
          "The Philippines shares strong business and service practices with Australia, making integration smooth and effective. Our team members understand compliance requirements and adapt easily to your company’s policies and workflows.",
      },
      {
        title: "Faster Turnaround and Improved Efficiency",
        description:
          "With TGTH, you gain access to round-the-clock claims processing support, reducing delays and enhancing customer satisfaction. Our teams integrate seamlessly with your systems to help you meet deadlines, minimise backlogs, and strengthen trust.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Claims Analysts have?",
        answer:
          "Our Claims Analysts hold relevant degrees and possess extensive experience in claims processing and analysis.",
      },
      {
        id: 2,
        question: "How do you ensure quality in claims management?",
        answer:
          "We implement a strict selection process, including background checks and performance evaluations, to maintain high standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Claims Analyst?",
        answer:
          "Yes, direct communication is encouraged to facilitate clarity and efficiency in handling claims.",
      },
      {
        id: 4,
        question: "What if I need to change my Claims Analyst?",
        answer:
          "You can request a different analyst at any time if your needs evolve.",
      },
      {
        id: 5,
        question: "How do I manage tasks with an offshore Claims Analyst?",
        answer:
          "We provide tools and resources to facilitate effective communication and task management for smooth collaboration.",
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
