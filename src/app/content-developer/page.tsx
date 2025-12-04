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
    "Save Costs Today with Our Offshore Content Developer Services",
  description:
    "Enhance your content strategy and save costs by working with Offshore Content Developers from the Philippines. Benefit from high-quality content tailored to your audience's needs.",
  alternates: {
    canonical: "https://tgth.com.au/content-developer",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Enhance Your Brand with Offshore Content Developers",
    titleTwo: "",
    description:
      "Access skilled Content Developers from the Philippines to create engaging and impactful content tailored to your needs.",
    image: "Content Developer.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Content Developer Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Content Developers who specialise in creating compelling digital content that builds brand authority and engages customers. From website copy and blogs to e-learning modules, marketing assets, and multimedia content, our developers deliver materials that inform, inspire, and convert.",
      "Our Content Developers are more than writers, they're strategic storytellers who align every piece of content with your business goals, audience needs, and brand voice. Whether you're building an online presence, launching campaigns, or training teams, TGTH ensures your content is impactful, consistent, and results-driven.",
      "By offshoring with TGTH, you gain a cost-effective, scalable solution that reduces in-house workload, strengthens customer engagement, and helps you stand out in competitive markets.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Content Developers",
    capabilities: [
      "Website content: Writing SEO-friendly copy for landing pages, service pages, and blogs.",
      "Marketing copywriting: Developing persuasive ad copy, email campaigns, and promotional material.",
      "E-learning development: Creating training modules, presentations, and instructional content.",
      "Social media content: Producing engaging posts, captions, and multimedia tailored for platforms.",
      "Content strategy: Planning content calendars aligned with brand and marketing objectives.",
      "Technical writing: Producing manuals, guides, and product documentation.",
      "Scriptwriting: Writing scripts for videos, podcasts, and corporate communications.",
      "Multimedia integration: Combining text with visuals, graphics, or interactive elements.",
      "Editing & proofreading: Ensuring content accuracy, clarity, and consistency.",
      "Research skills: Conducting in-depth research to support high-quality, credible content.",
      "SEO optimisation: Applying keyword research and best practices to improve search rankings.",
      "Content management systems (CMS): Skilled in platforms like WordPress, HubSpot, and Drupal.",
      "Storytelling: Crafting narratives that connect emotionally with target audiences.",
      "Brand voice alignment: Creating content that reflects company values and tone.",
      "Cross-platform adaptability: Developing content for print, digital, and interactive formats.",
      "Data-driven content: Using analytics to refine and improve content strategies.",
      "Collaboration: Working with designers, marketers, and developers to deliver cohesive campaigns.",
      "Time management: Producing high-quality content on time and at scale.",
      "Cultural awareness: Developing content that resonates with diverse audiences.",
      "Continuous learning: Staying updated with evolving trends in digital content.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a detailed consultation to understand your content requirements and brand objectives.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Content Developers from the Philippines who align with your specific needs and style.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Content Developer integrates smoothly into your team, ensuring immediate contributions and enhancing your content strategy.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Content Development with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Outsourcing content development with TGTH can reduce labour and operational costs by up to 70%. You gain professional-quality content without the expense of in-house teams.",
      },
      {
        title: "Skilled Content Developers with Global Experience",
        description:
          "Our Content Developers in the Philippines are university-educated, fluent in English, and experienced in producing content across industries. They bring creativity, technical knowledge, and adaptability to your projects.",
      },
      {
        title: "Seamless Brand and Cultural Alignment",
        description:
          "The Philippines shares strong cultural and communication ties with Australia, making collaboration effortless. Our content specialists easily adapt to your brand guidelines and voice.",
      },
      {
        title:
          "Faster Turnarounds and Scalable Solutions",
        description:
          "With TGTH, you gain flexible, scalable content support that allows you to manage campaigns, websites, and training projects efficiently. Enjoy quicker delivery times and the ability to scale content production on demand.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Content Developers have?",
        answer:
          "Our developers are skilled professionals with degrees in communications, marketing, or related fields and extensive content creation experience.",
      },
      {
        id: 2,
        question: "How do you ensure quality content delivery?",
        answer:
          "We conduct a rigorous selection process, including portfolio reviews and writing assessments, to maintain high standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Content Developer?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity and alignment on content goals and specifications.",
      },
      {
        id: 4,
        question: "What if I need to change my Content Developer?",
        answer:
          "You can request a different developer at any time if your project needs change.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Content Developer?",
        answer:
          "We provide tools and resources for effective project management and collaboration, ensuring a smooth workflow.",
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
