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
    "Cut Costs with Expert Offshore Software Architect Services",
  description:
    "Design scalable solutions and save costs with our Offshore Software Architects from the Philippines. Leverage their expertise to build robust systems that meet your business needs.",
  alternates: {
    canonical: "https://tgth.com.au/software-architect",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Revolutionise Your Software Solutions with Offshore Architects",
    titleTwo: "",
    description:
      "Empower your projects with expert Software Architects from the Philippines delivering innovative and scalable designs.",
    image: "Software Architect.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Software Developer Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Software Developers who bring technical expertise and problem-solving ability to your digital projects. From building custom applications and websites to managing integrations and cloud solutions, our developers ensure your business stays ahead in a fast-changing digital landscape.",
      "Our Software Developers are more than coders, they're strategic partners who understand business goals, user needs, and technical requirements. Whether you're a start-up building your first platform or an enterprise scaling complex systems, TGTH delivers reliable development support that keeps your technology secure, scalable, and future-ready.",
      "By offshoring with TGTH, you gain access to a cost-effective, highly skilled development team that reduces your in-house workload, speeds up project delivery, and ensures technical excellence at scale.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Software Architects",
    capabilities: [
      "System architecture design: Developing scalable and secure frameworks for software solutions.",
      "Technology strategy: Recommending platforms, frameworks, and tools that align with business goals.",
      "Cloud architecture: Designing solutions on AWS, Azure, or Google Cloud.",
      "Application modernisation: Migrating and refactoring legacy systems for efficiency.",
      "Integration design: Building APIs and middleware to connect systems seamlessly.",
      "Data architecture: Structuring databases for performance, scalability, and security.",
      "Security best practices: Embedding cybersecurity measures into system design.",
      "Microservices & distributed systems: Designing modern, modular, and scalable applications.",
      "DevOps alignment: Supporting CI/CD pipelines, infrastructure automation, and monitoring.",
      "Coding standards & guidelines: Defining best practices for development teams.",
      "Performance optimisation: Designing solutions for speed, scalability, and reliability.",
      "Project leadership: Guiding developers and technical teams throughout implementation.",
      "Documentation: Creating detailed architecture diagrams and technical documentation.",
      "Stakeholder communication: Explaining complex technical designs in clear, practical terms.",
      "Problem-solving: Identifying architectural risks and proposing effective solutions.",
      "Cross-platform expertise: Designing software compatible across multiple environments.",
      "Compliance awareness: Ensuring systems align with industry and regulatory standards.",
      "Mentorship: Coaching development teams to improve technical skills and practices.",
      "Innovation: Keeping systems future-ready by adopting emerging technologies.",
      "Collaboration: Working closely with product managers, executives, and IT teams.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a comprehensive consultation to assess your software architecture needs and project objectives.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team finds and recruits experienced Software Architects from the Philippines who align with your technical requirements and culture.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Software Architect integrates smoothly into your team, providing immediate value and enhancing your development process.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Software Architecture with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Expertise",
        description:
          "Offshoring your software architecture with TGTH reduces labour and operational costs by up to 70%. You gain access to senior-level expertise without the expense of hiring locally.",
      },
      {
        title: "Experienced Architects with Global Knowledge",
        description:
          "Our Software Architects in the Philippines are university-educated, fluent in English, and have extensive experience designing complex systems for international businesses. They bring both technical depth and strategic vision.",
      },
      {
        title: "Seamless Integration with Australian Businesses",
        description:
          "The Philippines shares strong cultural and business alignment with Australia. Our architects collaborate effectively with your teams, adopting your communication style, processes, and technical workflows.",
      },
      {
        title:
          "Future-Ready, Scalable Solutions",
        description:
          "With TGTH, you gain architecture that grows with your business. From enterprise platforms to cloud-native solutions, our architects ensure your systems are robust, secure, and designed for long-term success.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Software Architects have?",
        answer:
          "Our architects have advanced degrees and extensive experience in software design and system architecture.",
      },
      {
        id: 2,
        question: "How do you ensure quality in architectural design?",
        answer:
          "We conduct a thorough selection process, including technical assessments and portfolio reviews, to ensure high standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Software Architect?",
        answer:
          "Yes, direct communication is encouraged to ensure alignment on project specifications and goals.",
      },
      {
        id: 4,
        question: "What if I need to change my Software Architect?",
        answer:
          "You can request a different architect at any time if your project needs evolve.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Software Architect?",
        answer:
          "We provide tools and resources for effective project management and collaboration, ensuring a seamless workflow.",
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
