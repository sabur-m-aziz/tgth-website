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
    "Save Costs with Our Skilled Offshore Software Developer Team",
  description:
    "Accelerate your projects and save costs by hiring Offshore Software Developers from the Philippines. Gain access to top talent while ensuring quality and timely delivery.",
  alternates: {
    canonical: "https://tgth.com.au/software-developer",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Accelerate Innovation with Offshore Software Developers",
    titleTwo: "",
    description:
      "Enhance your projects with expert Software Developers from the Philippines delivering innovative solutions efficiently.",
    image: "Software Developer.jpg",
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
    title: "Core Capabilities of our Software Developers",
    capabilities: [
      "Custom software development: Designing and building applications tailored to business needs.",
      "Web development: Creating responsive, high-performing websites and portals.",
      "Mobile app development: Developing iOS, Android, and cross-platform applications.",
      "API development & integration: Building and connecting systems for seamless workflows.",
      "Database management: Designing, optimising, and maintaining secure databases.",
      "Cloud solutions: Developing and deploying applications on AWS, Azure, or Google Cloud.",
      "E-commerce development: Building online stores and integrating payment systems.",
      "UI/UX collaboration: Working with designers to ensure smooth, user-friendly interfaces.",
      "Cybersecurity best practices: Implementing secure coding standards and data protection.",
      "Agile development: Collaborating in sprints to deliver projects on time and within scope.",
      "DevOps support: Automating deployments, managing servers, and monitoring performance.",
      "Troubleshooting & debugging: Identifying and resolving software issues quickly.",
      "Version control: Using Git and other tools for collaborative development.",
      "Testing & quality assurance: Writing unit, integration, and system tests to ensure reliability.",
      "Maintenance & support: Updating and optimising applications post-launch.",
      "Problem-solving: Developing innovative solutions to complex technical challenges.",
      "Cross-platform development: Ensuring compatibility across devices and environments.",
      "Industry compliance knowledge: Building software that meets data and regulatory standards.",
      "Collaboration & communication: Working effectively with global teams and stakeholders.",
      "Continuous learning: Staying updated with new technologies, frameworks, and best practices.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a comprehensive consultation to understand your software development needs and project goals.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Software Developers who match your technical requirements and company culture.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Software Developer integrates smoothly into your existing team, ensuring immediate contributions and effective collaboration.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Software Developer with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Offshoring software development with TGTH can reduce labour and operational expenses by up to 70%. You gain access to expert developers without the costs of recruitment, infrastructure, and benefits.",
      },
      {
        title: "Highly Skilled Developers with Global Experience",
        description:
          "Our Software Developers in the Philippines are university-trained, fluent in English, and experienced in working with international clients across industries. They bring strong technical expertise, adaptability, and problem-solving skills.",
      },
      {
        title: "Seamless Cultural and Technical Alignment",
        description:
          "The Philippines has a strong cultural and business connection with Australia. Our developers easily integrate with your team, adapting to your workflows, tools, and communication style to ensure smooth collaboration.",
      },
      {
        title:
          "Faster Development and Scalable Teams",
        description:
          "With TGTH, you can quickly scale development capacity, accelerate project timelines, and gain 24/7 coverage. Our developers bring efficiency, innovation, and technical rigour that support your business growth.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Software Developers have?",
        answer:
          "Our developers are highly skilled professionals with relevant degrees and extensive experience in various programming languages and technologies.",
      },
      {
        id: 2,
        question: "How do you ensure the quality of software development?",
        answer:
          "We implement a rigorous selection process, including technical assessments and code reviews, to ensure high-quality output.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Software Developer?",
        answer:
          "Yes, direct communication is encouraged to foster collaboration and ensure alignment on project requirements.",
      },
      {
        id: 4,
        question: "What if I need to change my Software Developer?",
        answer:
          "You can request a different developer at any time if your project needs evolve.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Software Developer?",
        answer:
          "We provide tools and resources for effective project management and communication, ensuring smooth workflow and collaboration.",
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
