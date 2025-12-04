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
    "Save on IT Costs with Offshore Technical Support Services",
  description:
    "Ensure smooth operations and cut IT expenses with TGTH’s offshore Technical Support Specialist services. Our experts provide reliable support to minimise downtime and optimise your systems. Contact us today to enhance your technical support while saving money!",
  alternates: {
    canonical: "https://tgth.com.au/technical-support-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Deliver Fast, Reliable Tech Support with Offshore Technical Support Specialists – Reduce Downtime and Support Costs",
    titleTwo: "",
    description:
      "Keep your systems running smoothly and your customers supported with skilled offshore Technical Support Specialists from TGTH, cost-effective, responsive, and ready to integrate.",
    image: "Technical Support Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Technical Support Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide knowledgeable, problem-solving Technical Support Specialists who help you resolve issues quickly and professionally, whether supporting your internal teams, customers, or IT infrastructure. From troubleshooting software and hardware issues to handling helpdesk tickets, installations, and basic network support, they ensure everything stays up and running.",
      "Our specialists are trained in key platforms and support tools like Zendesk, Freshdesk, Jira, Microsoft 365, remote desktop tools, and more. They can provide Tier 1 and Tier 2 support across a wide range of industries, aligning with your SLAs and workflows.",
      "By offshoring your technical support with TGTH, you reduce local overhead, extend support hours, and maintain fast, consistent service, without sacrificing quality.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Technical Support Specialist",
    capabilities: [
      "Troubleshooting: Diagnosing and resolving technical issues related to hardware, software, and networks, ensuring minimal disruption to users.",
      "Customer assistance: Providing exceptional support to customers via various channels (phone, email, chat) to address inquiries and technical problems effectively.",
      "Product knowledge: Understanding the company's products and services thoroughly to provide accurate information and solutions to customers.",
      "Documentation: Maintaining clear and detailed documentation of support processes, issue resolutions, and customer interactions for future reference.",
      "Installation and configuration: Assisting customers with the installation and configuration of software and hardware products to ensure optimal performance.",
      "Remote support: Using remote access tools to assist customers in real-time, resolving issues quickly and efficiently without the need for on-site visits.",
      "Training and onboarding: Educating customers on product features and functionalities to improve user experience and reduce support queries.",
      "Escalation management: Identifying complex issues that require advanced technical expertise and escalating them to higher-level support when necessary.",
      "Feedback collection: Gathering customer feedback on products and support services to help improve offerings and address recurring issues.",
      "Collaboration: Working closely with product development and engineering teams to relay customer feedback and contribute to product enhancements.",
      "Performance tracking: Monitoring and reporting on support metrics to identify trends, performance levels, and areas for improvement.",
      "Continuous learning: Keeping up to date with the latest technologies and industry trends to provide informed support and enhance technical skills.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your technical support needs and specific requirements. Our team collaborates with you to define the scope of work, including support channels, product knowledge, and service level expectations.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Leveraging our extensive network, we identify and screen qualified technical support specialists who fit your specific criteria. You’ll receive a curated list of candidates, highlighting their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal technical support specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to manage customer inquiries and technical issues effectively, delivering high-quality support that enhances customer satisfaction.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Tech Support Role with TGTH?",
    reasons: [
      {
        title: "Lower Costs, Higher Availability",
        description:
          "Save up to 70% on support costs by offshoring with TGTH, while ensuring prompt and professional support for your users or customers—day or night.",
      },
      {
        title: "Skilled in Tools, Ticketing, and Troubleshooting",
        description:
          "Our Technical Support Specialists are experienced in Windows, Mac, remote tools, VoIP, cloud apps, CRMs, and enterprise systems. They follow best practices for diagnosing and resolving issues.",
      },
      {
        title: "Reliable Communication and Clear Documentation",
        description:
          "Fluent in English and trained to communicate with Australian users and teams, our specialists provide clear instructions, accurate logs, and professional customer service.",
      },
      {
        title: "Scalable Support for Growing Teams or Customers",
        description:
          "Whether you need part-time coverage, after-hours support, or a full offshore helpdesk team, TGTH offers flexible solutions that scale with your business.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How soon can a Technical Support Specialist start?",
        answer:
          "Most placements begin within 7–14 business days after setup and onboarding.",
      },
      {
        id: 2,
        question: "What level of support do they provide?",
        answer:
          "They typically handle Tier 1 and Tier 2 issues—password resets, software/hardware troubleshooting, user onboarding, basic networking, and more.",
      },
      {
        id: 3,
        question: "Do they use our support tools?",
        answer:
          "Yes. They work within your ticketing systems, communication tools, and IT platforms.",
      },
      {
        id: 4,
        question: "Can they provide after-hours or 24/7 coverage?",
        answer:
          "Absolutely. We offer flexible shift scheduling, including round-the-clock support.",
      },
      {
        id: 5,
        question: "Will they follow our internal IT procedures?",
        answer:
          "Yes. They’re trained to follow your company’s SOPs, escalation paths, and documentation practices.",
      },
      {
        id: 6,
        question: "Is this suitable for internal or customer support?",
        answer:
          "Both. Our specialists can serve internal employees or external customers—depending on your needs.",
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
