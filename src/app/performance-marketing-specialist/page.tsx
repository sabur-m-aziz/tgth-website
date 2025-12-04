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
    "Boost ROI and Save with Offshore Performance Marketing",
  description:
    "Maximise your return on investment with TGTH’s offshore Performance Marketing Specialist services. Our team focuses on cost-effective strategies that drive results and save you money. Reach out today to enhance your marketing performance while minimising expenses!",
  alternates: {
    canonical: "https://tgth.com.au/performance-marketing-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Drive Results with Offshore Performance Marketing Specialists – Lower Costs, Maximise ROI",
    titleTwo: "",
    description:
      "Supercharge your digital campaigns with skilled offshore Performance Marketing talent, target smarter, convert faster, and scale profitably with TGTH.",
    image: "Performance Marketing Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Performance Marketing Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we connect you with experienced Performance Marketing Specialists who focus on one thing: delivering measurable results. Whether it’s managing paid search, optimising social ads, refining conversion funnels, or tracking campaign performance, our specialists know how to stretch your marketing budget further.",
      "They’re not just ad buyers, they’re data-driven strategists who test, analyse, and refine every move to ensure your campaigns perform at their peak. From Google Ads and Meta platforms to LinkedIn, TikTok, and programmatic networks, they bring platform expertise and real-world marketing impact.",
      "With TGTH, you gain the flexibility to run lean, high-performing digital marketing operations while avoiding the cost and complexity of hiring locally.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Performance Marketing Specialist",
    capabilities: [
      "Campaign strategy development: Designing data-driven performance marketing strategies that align with business goals and target audiences.",
      "PPC management: Managing pay-per-click advertising campaigns on platforms like Google Ads and Bing Ads to maximise ROI through effective bidding and ad placement.",
      "Social media advertising: Creating and optimising paid advertising campaigns on social media platforms (e.g., Facebook, Instagram, LinkedIn) to drive targeted traffic and conversions.",
      "A/B testing: Conducting rigorous A/B tests on ad creatives, landing pages, and campaign strategies to identify the most effective approaches for driving performance.",
      "Analytics and reporting: Monitoring and analysing campaign performance metrics, generating reports that provide insights into traffic, conversions, and overall effectiveness.",
      "Conversion rate optimisation (CRO): Implementing strategies to improve website and landing page performance, enhancing the user experience to increase conversions.",
      "SEO integration: Collaborating with SEO specialists to ensure that paid campaigns complement organic search efforts and drive overall performance.",
      "Budget management: Allocating and managing advertising budgets effectively to ensure optimal spending and maximised returns on marketing investments.",
      "Customer segmentation: Identifying and targeting specific customer segments to tailor marketing messages and enhance campaign effectiveness.",
      "Remarketing strategies: Developing remarketing campaigns to re-engage users who have previously interacted with the brand, driving them back to conversion.",
      "Collaboration with cross-functional teams: Working closely with sales, content, and design teams to ensure alignment on campaign goals and messaging.",
      "Continuous learning and adaptation: Staying updated with the latest trends, tools, and technologies in performance marketing to continuously improve campaign strategies.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin by understanding your performance marketing objectives and specific requirements. Our team collaborates with you to define the scope of work, including target metrics, campaign goals, and key performance indicators.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Leveraging our extensive network, we identify and screen qualified performance marketing specialists who match your criteria. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal performance marketing specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to implement and optimise your marketing campaigns effectively, driving measurable results for your business.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Performance Marketing Role with TGTH?",
    reasons: [
      {
        title: "Data-Driven Expertise Without the High Price",
        description:
          "Hiring offshore can reduce your performance marketing costs by up to 70%. Gain access to digital marketers skilled in ROI-focused campaign management, audience targeting, and analytics, without the overhead.",
      },
      {
        title: "Platform-Savvy, Metrics-Focused Talent",
        description:
          "Our specialists are certified and experienced across platforms like Google Ads, Facebook Business Manager, Google Analytics, and Shopify. They understand attribution, A/B testing, ROAS, and CAC—so every dollar spent is tracked and optimised.",
      },
      {
        title: "Clear Communication, Real-Time Collaboration",
        description:
          "Based in the Philippines, our team members speak fluent English, understand Australian market dynamics, and integrate seamlessly into your workflows. No micromanaging, just results.",
      },
      {
        title: "Scalable Solutions for Growing Campaigns",
        description:
          "Need one specialist or a full paid media team? TGTH offers flexible hiring models that scale with your goals. From small tests to national rollouts, we help you grow at your pace.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How fast can a Performance Marketing Specialist start?",
        answer:
          "Most placements begin within 7–14 business days after setup and onboarding.",
      },
      {
        id: 2,
        question: "Can they manage our ad accounts directly?",
        answer:
          "Yes. They will work inside your existing platforms, under your supervision or ours.",
      },
      {
        id: 3,
        question: "Are they trained in performance tracking and reporting?",
        answer:
          "Absolutely. Expect weekly reports, KPI dashboards, and regular strategy updates.",
      },
      {
        id: 4,
        question: "Will they be available during our work hours?",
        answer:
          "Yes. We align working hours with your time zone for seamless coordination.",
      },
      {
        id: 5,
        question:
          "Do they have experience with e-commerce and lead generation?",
        answer:
          "Yes. Our specialists have worked across industries including e-commerce, SaaS, services, and B2B lead gen.",
      },
      {
        id: 6,
        question: "Can I start part-time and scale later?",
        answer:
          "Definitely. You can begin with part-time support and ramp up as needed.",
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
