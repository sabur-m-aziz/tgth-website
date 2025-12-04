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
    "Maximize Savings with Our Offshore Digital Marketing Specialist",
  description:
    "Boost your online presence and save costs by hiring Offshore Digital Marketing Specialists from the Philippines. Leverage their expertise to enhance your marketing strategies effectively.",
  alternates: {
    canonical: "https://tgth.com.au/digital-marketing-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Elevate Your Brand with Offshore Digital Marketing Specialists",
    titleTwo: "",
    description:
      "Boost your online presence with expert Digital Marketing Specialists from the Philippines driving effective strategies and results.",
    image: "Digital Marketing Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Digital Marketing Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Digital Marketing Specialists who design and execute strategies that help businesses thrive in the digital landscape. From search engine optimisation (SEO) and paid advertising to social media campaigns and email marketing, our specialists ensure your brand reaches the right audience at the right time.",
      "Our Digital Marketing Specialists are more than campaign managers, they're growth partners who combine creativity with data-driven insights to maximise your return on investment. Whether you're aiming to build brand awareness, generate leads, or increase online sales, TGTH ensures your digital marketing efforts are impactful, measurable, and scalable.",
      "By offshoring with TGTH, you gain a cost-effective solution that reduces in-house workload, drives consistent traffic, and delivers stronger business outcomes.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Digital Marketing Specialists",
    capabilities: [
      "Search engine optimisation (SEO): Improving website visibility on search engines.",
      "Pay-per-click (PPC) advertising: Managing Google Ads and paid social campaigns.",
      "Social media marketing: Creating and managing content across multiple platforms.",
      "Email marketing: Designing and executing targeted campaigns that nurture leads.",
      "Content marketing: Developing blogs, articles, and multimedia to engage audiences.",
      "Analytics & reporting: Tracking campaign performance and optimising strategies.",
      "Conversion rate optimisation (CRO): Enhancing websites and landing pages to drive results.",
      "Keyword research: Identifying terms that boost search rankings and traffic.",
      "Marketing automation: Using tools like HubSpot, Mailchimp, or ActiveCampaign.",
      "Brand strategy: Building and positioning your brand for maximum impact.",
      "Influencer marketing: Managing partnerships to expand audience reach.",
      "Competitor analysis: Monitoring market activity to stay ahead.",
      "E-commerce marketing: Driving traffic and sales through online stores.",
      "Video marketing: Producing engaging video content for digital platforms.",
      "Copywriting: Crafting persuasive ad copy and website messaging.",
      "Community management: Engaging with followers and customers online.",
      "Affiliate marketing: Coordinating partnerships that increase sales.",
      "CRM management: Leveraging customer data for personalised campaigns.",
      "Multichannel strategy: Coordinating campaigns across digital touchpoints.",
      "Continuous learning: Staying updated with trends, tools, and algorithms.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a detailed consultation to assess your digital marketing needs and objectives.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team recruits experienced Digital Marketing Specialists from the Philippines who align with your brand and marketing goals.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Digital Marketing Specialist integrates smoothly into your team, providing immediate support and enhancing your marketing efforts.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Digital Marketing with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "Outsourcing digital marketing with TGTH can reduce labour and operational costs by up to 70%. You gain expert strategy and execution without the expense of in-house teams.",
      },
      {
        title: "Experienced Specialists with Global Expertise",
        description:
          "Our Digital Marketing Specialists in the Philippines are university-educated, fluent in English, and experienced in running campaigns for international businesses across industries.",
      },
      {
        title: "Seamless Collaboration with Australian Businesses",
        description:
          "The Philippines shares strong cultural and professional ties with Australia, ensuring clear communication and smooth integration with your brand's strategy and voice.",
      },
      {
        title:
          "Scalable Growth and Data-Driven Results",
        description:
          "With TGTH, you gain flexible, scalable digital marketing support that adapts to your goals. Our specialists deliver measurable results, helping your business grow online and stay ahead of the competition.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Digital Marketing Specialists have?",
        answer:
          "Our specialists are skilled professionals with experience in various digital marketing channels, including SEO, PPC, and social media.",
      },
      {
        id: 2,
        question: "How do you ensure effective marketing strategies?",
        answer:
          "We implement a thorough selection process, including performance reviews and ongoing training, to ensure high-quality marketing outcomes.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Digital Marketing Specialist?",
        answer:
          "Yes, direct communication is encouraged to ensure alignment on marketing strategies and campaign goals.",
      },
      {
        id: 4,
        question: "What if I need to change my Digital Marketing Specialist?",
        answer:
          "You can request a different specialist at any time if your needs or project requirements change.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Digital Marketing Specialist?",
        answer:
          "We provide tools and resources for effective communication and project management, ensuring a smooth workflow and collaboration.",
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
