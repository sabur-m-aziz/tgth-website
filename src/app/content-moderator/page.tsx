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
    "Cut Costs with Our Professional Offshore Content Moderator",
  description:
    "Ensure quality control and save costs by hiring Offshore Content Moderators from the Philippines. Benefit from experienced professionals who maintain your brand's integrity and user engagement.",
  alternates: {
    canonical: "https://tgth.com.au/content-moderator",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Ensure Quality with Offshore Content Moderators",
    titleTwo: "",
    description:
      "Streamline your content management with expert Content Moderators from the Philippines, ensuring compliance and quality.",
    image: "Content Moderator.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Content Moderator Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly trained offshore Content Moderators who help businesses maintain safe, respectful, and compliant online environments. From reviewing social media posts and forum comments to monitoring marketplace listings and multimedia uploads, our moderators ensure your platforms align with community standards and brand values.",
      "Our Content Moderators are more than reviewers, they act as guardians of your digital presence, protecting your brand from harmful or inappropriate content while ensuring positive user experiences. Whether you run a social media platform, an e-commerce site, or an online community, TGTH ensures your digital spaces remain safe, trustworthy, and engaging.",
      "By offshoring with TGTH, you gain a cost-effective, scalable moderation solution that reduces in-house pressure, protects your reputation, and ensures compliance with global standards.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Content Moderators",
    capabilities: [
      "Text moderation: Reviewing comments, posts, and messages for inappropriate or harmful content.",
      "Image and video moderation: Screening visual content to meet platform and brand guidelines.",
      "Community standards enforcement: Applying company policies and terms of service consistently.",
      "Compliance monitoring: Ensuring user content meets industry and legal regulations.",
      "User safety support: Identifying and reporting harmful behaviour, harassment, or abuse.",
      "E-commerce moderation: Reviewing product listings, descriptions, and transactions for accuracy.",
      "Social media management: Monitoring posts, replies, and engagement for compliance.",
      "Flagging and escalation: Reporting high-risk or sensitive cases to the appropriate teams.",
      "Cultural awareness: Applying moderation standards with sensitivity to local and global contexts.",
      "Multilingual capabilities: Reviewing content in multiple languages for diverse user bases.",
      "Attention to detail: Identifying subtle violations that could harm brand reputation.",
      "Time management: Managing high volumes of content efficiently.",
      "Fraud prevention: Detecting suspicious behaviour, scams, or policy violations.",
      "User engagement: Maintaining respectful and safe community interactions.",
      "Crisis response: Quickly handling urgent or high-risk moderation cases.",
      "Policy updates: Adapting to evolving moderation standards and guidelines.",
      "Analytical skills: Identifying trends in user behaviour and reporting insights.",
      "Collaboration: Working with compliance, legal, and support teams for aligned actions.",
      "Stress management: Handling sensitive or challenging content with resilience.",
      "Continuous improvement: Staying updated with moderation tools and best practices.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a detailed consultation to understand your content moderation needs and specific guidelines.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Content Moderators from the Philippines who align with your content standards and requirements.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Content Moderator integrates smoothly into your team, providing immediate support and enhancing your content quality assurance.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Content Moderation with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Outsourcing moderation with TGTH can reduce labour and operational expenses by up to 70%. You gain access to skilled moderators without the costs of building large in-house teams.",
      },
      {
        title: "Experienced Moderators with Global Exposure",
        description:
          "Our Content Moderators in the Philippines are university-educated, fluent in English, and trained to handle high-volume moderation across industries such as social media, gaming, and e-commerce.",
      },
      {
        title: "Seamless Alignment with Australian Businesses",
        description:
          "The Philippines has strong cultural and business alignment with Australia, enabling smooth collaboration and consistent application of community standards.",
      },
      {
        title:
          "24/7 Monitoring and Scalable Support",
        description:
          "With TGTH, you can provide round-the-clock moderation to protect your platforms. Our scalable teams ensure timely reviews, rapid response, and reliable compliance enforcement.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Content Moderators have?",
        answer:
          "Our moderators are trained professionals with experience in content review, compliance, and community management.",
      },
      {
        id: 2,
        question: "How do you ensure quality in content moderation?",
        answer:
          "We implement a rigorous selection process, including assessments and ongoing training, to maintain high-quality standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Content Moderator?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity and alignment on moderation guidelines and expectations.",
      },
      {
        id: 4,
        question: "What if I need to change my Content Moderator?",
        answer:
          "You can request a different moderator at any time if your needs or project requirements change.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Content Moderator?",
        answer:
          "We provide tools and resources for effective communication and task management, ensuring smooth collaboration and workflow.",
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
