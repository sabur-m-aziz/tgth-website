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
    "Cut Costs with Offshore Social Media Specialist Services",
  description:
    "Elevate your social media presence while saving money with TGTH’s offshore Social Media Specialist services. Our team creates engaging content and manages your platforms efficiently. Reach out now to enhance your social media strategy and increase engagement affordably!",
  alternates: {
    canonical: "https://tgth.com.au/social-media-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Elevate Your Online Presence with Offshore Social Media Specialists – Grow Engagement, Save Costs",
    titleTwo: "",
    description:
      "Build your brand, engage your audience, and drive results on social media, without the high price tag. TGTH connects you with skilled offshore Social Media Specialists ready to make your content work harder.",
    image: "Social Media Specialist.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Social Media Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide creative, strategic Social Media Specialists who help you stay consistent, relevant, and engaging across every platform. From content planning and design coordination to community management, ad support, and analytics, our specialists bring structure and creativity to your online presence.",
      "They’re fluent in today’s platforms; Facebook, Instagram, LinkedIn, TikTok, X (Twitter), and more, and can tailor messaging that speaks directly to your audience. Whether your focus is brand awareness, lead generation, or customer engagement, they act as a seamless extension of your marketing team.",
      "By offshoring with TGTH, you gain a reliable content and strategy partner who helps you stay visible and consistent, without overwhelming your in-house resources or budget.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Social Media Specialist",
    capabilities: [
      "Content creation: Developing engaging and relevant content tailored for various social media platforms to attract and retain followers.",
      "Social media strategy: Designing and implementing comprehensive social media strategies that align with business objectives and target audience preferences.",
      "Community management: Interacting with followers and responding to comments and messages in a timely manner to foster community engagement and build relationships.",
      "Social media advertising: Managing paid advertising campaigns on platforms such as Facebook, Instagram, Twitter, and LinkedIn to drive targeted traffic and conversions.",
      "Analytics and reporting: Monitoring and analysing social media performance metrics to assess the effectiveness of campaigns and inform future strategies.",
      "Trend analysis: Keeping up-to-date with the latest social media trends and best practices to ensure that content and strategies remain relevant and effective.",
      "Brand voice development: Establishing and maintaining a consistent brand voice across all social media channels to enhance brand identity and recognition.",
      "Collaboration with teams: Working closely with marketing, PR, and content teams to ensure alignment on messaging and promotional strategies.",
      "Influencer collaboration: Identifying and engaging with influencers to expand brand reach and drive audience engagement through partnerships.",
      "Crisis management: Handling potential social media crises effectively by developing strategies and responses to mitigate negative impacts on the brand.",
      "Campaign coordination: Planning and executing social media campaigns that align with product launches, events, or promotions to maximise reach and engagement.",
      "Visual content creation: Designing eye-catching graphics and visuals that enhance social media posts and improve overall engagement.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your social media goals and business objectives. Our team collaborates with you to define the scope of work, including target audiences, platforms, and desired outcomes.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified social media specialists who meet your specific criteria. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience in social media management.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal social media specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to develop and execute effective social media strategies, driving engagement and enhancing your brand presence online.",
      },
    ],
  },

  WhyHiringUs: {
    title: "Why Offshore Your Social Media Role with TGTH?",
    reasons: [
      {
        title: "Creative Support Without the Cost",
        description:
          "Save up to 70% by offshoring social media roles—without compromising quality. From daily content to campaign rollouts, our specialists deliver results while helping you stay lean.",
      },
      {
        title: "Platform Expertise and Content Strategy",
        description:
          "Our Social Media Specialists understand platform algorithms, scheduling tools (like Buffer, Later, Hootsuite), and performance tracking. They can handle content calendars, audience targeting, trend research, and more.",
      },
      {
        title: "Consistent Brand Voice and Engagement",
        description:
          "Our team members are fluent in English and well-versed in Australian brand tones and communication styles. They maintain a consistent voice, reply to messages and comments, and manage your online community professionally.",
      },
      {
        title: "Scalable Support That Grows With You",
        description:
          "Need a part-time content manager or a full-time social media lead? TGTH gives you the flexibility to scale your social efforts as your audience and goals expand.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How soon can my Social Media Specialist start?",
        answer:
          "Typically within 7–14 business days, depending on your onboarding and content planning needs.",
      },
      {
        id: 2,
        question: "Will they create content or just post?",
        answer:
          "They can do both, writing captions, creating basic graphics, sourcing visuals, and managing scheduling.",
      },
      {
        id: 3,
        question: "Do they handle engagement and replies?",
        answer:
          "Yes. They can manage comments, DMs, and customer interaction under your brand voice guidelines.",
      },
      {
        id: 4,
        question: "Will they work during my preferred hours?",
        answer:
          "Yes. We align their schedule with your time zone to ensure real-time support and collaboration.",
      },
      {
        id: 5,
        question: "What platforms do they support?",
        answer:
          "Facebook, Instagram, LinkedIn, TikTok, X (Twitter), Pinterest, YouTube, and more, depending on your strategy.",
      },
      {
        id: 6,
        question: "Can I scale up during campaign launches or peak periods?",
        answer:
          "Absolutely. We offer flexible plans to match campaign cycles or increased content needs.",
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
