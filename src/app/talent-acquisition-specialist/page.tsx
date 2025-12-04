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
    "Save Costs Today with Our Offshore Talent Acquisition Specialist",
  description:
    "Streamline your hiring process and save costs with our Offshore Talent Acquisition Specialists from the Philippines. Access top talent efficiently while reducing recruitment expenses.",
  alternates: {
    canonical: "https://tgth.com.au/talent-acquisition-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Elevate Your Hiring with Offshore Talent Acquisition Specialists",
    titleTwo: "",
    description:
      "Streamline your recruitment process with expert Talent Acquisition Specialists from the Philippines, sourcing top-tier candidates efficiently.",
    image: "Talent Acquisition Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Talent Acquisition Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Talent Acquisition Specialists who help businesses identify, attract, and secure the best candidates for their roles. From sourcing and screening to coordinating interviews and managing onboarding, our specialists ensure you build strong teams without the administrative burden.",
      "Our Talent Acquisition Specialists are more than recruiters, they act as strategic partners who understand your workforce needs, employer brand, and long-term hiring goals. Whether you're a start-up scaling quickly or an established organisation filling critical positions, TGTH ensures your recruitment process is efficient, consistent, and cost-effective.",
      "By offshoring with TGTH, you gain access to experienced recruitment professionals who save you time, reduce costs, and help you stay competitive in securing top talent.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Talent Acquisition Specialists",
    capabilities: [
      "Job requisition management: Collaborating with hiring managers to define role requirements.",
      "Talent sourcing: Using job boards, social media, and databases to find qualified candidates.",
      "Candidate screening: Reviewing CVs, portfolios, and credentials to shortlist the best matches.",
      "Interview coordination: Scheduling and managing candidate interviews seamlessly.",
      "Applicant tracking system (ATS) management: Maintaining organised recruitment pipelines.",
      "Employer branding: Promoting your company culture to attract top talent.",
      "Market research: Analysing hiring trends, salary benchmarks, and competitor activity.",
      "Candidate engagement: Building relationships and maintaining communication throughout the hiring process.",
      "Reference checks: Conducting background and employment verifications.",
      "Onboarding support: Assisting with new hire documentation and integration processes.",
      "Diversity and inclusion focus: Sourcing diverse candidates to strengthen workplace culture.",
      "Reporting and analytics: Providing recruitment performance reports and insights.",
      "Negotiation skills: Assisting in job offer and contract discussions.",
      "Stakeholder collaboration: Working closely with HR and department heads.",
      "Database management: Maintaining accurate candidate records for future hiring needs.",
      "Compliance knowledge: Ensuring recruitment processes align with labour laws and company policies.",
      "Communication: Clearly conveying role requirements and feedback to candidates and hiring teams.",
      "Problem-solving: Addressing hiring challenges with effective solutions.",
      "Time management: Prioritising multiple requisitions and deadlines effectively.",
      "Continuous learning: Keeping updated on recruitment technology and best practices.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a comprehensive consultation to understand your hiring needs and organisational culture.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Talent Acquisition Specialists from the Philippines who align with your specific requirements.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Talent Acquisition Specialist integrates smoothly into your HR team, ensuring immediate support and effective recruitment strategies.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Recruitment with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Offshoring your recruitment with TGTH reduces labour and operational costs by up to 70%. You eliminate expenses related to in-house recruiters, while still accessing high-level talent acquisition expertise.",
      },
      {
        title: "Experienced Recruiters with Global Knowledge",
        description:
          "Our Talent Acquisition Specialists in the Philippines are university-educated, fluent in English, and experienced in sourcing talent for businesses across industries and regions.",
      },
      {
        title: "Seamless Collaboration with Australian Businesses",
        description:
          "The Philippines shares cultural and professional alignment with Australia, making recruitment communication smooth and effective. Our specialists easily adapt to your processes, tools, and brand values.",
      },
      {
        title:
          "Efficient Hiring and Scalable Recruitment Solutions",
        description:
          "With TGTH, you can scale your hiring efforts quickly and efficiently. Our team ensures faster candidate sourcing, consistent communication, and a streamlined recruitment process from start to finish.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Talent Acquisition Specialists have?",
        answer:
          "Our specialists have relevant degrees and extensive experience in recruitment and talent management across various industries.",
      },
      {
        id: 2,
        question: "How do you ensure quality in the recruitment process?",
        answer:
          "We implement a thorough selection process that includes skill assessments, background checks, and client references to ensure high standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Talent Acquisition Specialist?",
        answer:
          "Yes, direct communication is encouraged to ensure alignment on hiring goals and candidate expectations.",
      },
      {
        id: 4,
        question: "What if I need to change my Talent Acquisition Specialist?",
        answer:
          "You can request a different specialist at any time if your needs or project requirements change.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Talent Acquisition Specialist?",
        answer:
          "We provide tools and resources for effective communication and task management to ensure a smooth workflow and collaboration.",
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
