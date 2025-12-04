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
    "Save on Marketing with Offshore Marketing Manager Services",
  description:
    "Drive growth and reduce expenses with TGTH’s offshore Marketing Manager services. Our experienced professionals craft effective strategies that maximise your marketing budget. Reach out today to enhance your marketing efforts and save money while achieving results!",
  alternates: {
    canonical: "https://tgth.com.au/marketing-manager",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Strengthen Your Brand with Offshore Marketing Managers from the Philippines – Save Costs While Driving Growth",
    titleTwo: "",
    description:
      "Hire a skilled offshore Marketing Manager to increase campaign efficiency, expand your reach, and keep your brand ahead, without blowing the budget.",
    image: "Marketing Manager.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Marketing Manager Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide experienced offshore Marketing Managers who can take ownership of your campaigns, content, and strategy execution, so your business keeps growing, even when resources are tight. From digital marketing coordination to performance tracking and creative content development, our professionals bring real marketing impact at a fraction of the cost.",
      "Our Marketing Managers aren’t just remote workers, they act as an extension of your in-house team. They bring strong communication, initiative, and insight to ensure your brand stays consistent and competitive. Whether you need someone to manage email campaigns, social media, SEO, paid ads, or coordinate with creative and sales teams, we tailor the role to suit your business objectives.",
      "By offshoring with TGTH, you unlock expert-level marketing leadership without the overhead of hiring locally, giving you both agility and affordability as your business scales.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Marketing Manager",
    capabilities: [
      "Strategic planning: Developing comprehensive marketing strategies aligned with business goals, focusing on target markets and competitive positioning.",
      "Campaign management: Planning, executing, and monitoring marketing campaigns across various channels, including digital, print, and social media.",
      "Market research: Conducting research to identify market trends, customer preferences, and competitive analysis to inform marketing strategies.",
      "Brand management: Overseeing brand development and ensuring consistent messaging and visual representation across all marketing materials.",
      "Content creation: Producing engaging content for various platforms, including blogs, social media, email newsletters, and promotional materials.",
      "Digital marketing expertise: Implementing and managing digital marketing tactics, including SEO, PPC, email marketing, and social media marketing.",
      "Budget management: Allocating and managing the marketing budget effectively to maximise return on investment (ROI) from marketing activities.",
      "Performance analysis: Monitoring and analysing marketing metrics to evaluate campaign effectiveness and make data-driven adjustments.",
      "Collaboration: Working closely with cross-functional teams, including sales, product development, and customer support, to ensure alignment on marketing initiatives.",
      "Stakeholder communication: Presenting marketing plans and results to stakeholders, ensuring transparency and securing buy-in for marketing strategies.",
      "Team leadership: Managing and mentoring the marketing team, fostering a collaborative environment that encourages creativity and innovation.",
      "Customer relationship management: Developing strategies to enhance customer engagement and loyalty through targeted marketing efforts.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin by understanding your marketing objectives and business goals. Our team collaborates with you to define the scope of work, including target markets, branding, and campaign strategies.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified marketing managers who meet your specific requirements. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal marketing manager, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to lead your marketing initiatives effectively, driving growth and enhancing brand visibility.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Marketing Manager Role with TGTH?",
    reasons: [
      {
        title: "Reduce Overhead While Gaining Expertise",
        description:
          "Hiring offshore with TGTH can cut your marketing management costs by up to 70%, while still giving you access to professionals with real-world campaign experience. Avoid recruitment, benefits, and infrastructure expenses, and still get high-impact results.",
      },
      {
        title: "Strategists with Hands-On Execution Skills",
        description:
          "Our offshore Marketing Managers combine big-picture thinking with day-to-day action. They’ve led projects across various industries, and are skilled in digital platforms, analytics tools, and content strategy, all while staying aligned with your goals.",
      },
      {
        title: "Aligned with Australian Business Culture",
        description:
          "With strong cultural alignment and English fluency, our team members understand the tone, pace, and expectations of Australian companies. They work in sync with your in-house team, clients, and partners without the need for constant oversight.",
      },
      {
        title: "Agile, Scalable Support as You Grow",
        description:
          "Need full-time, part-time, or project-based support? Our solution is built for flexibility. Whether you’re in a growth phase or managing seasonal surges, TGTH gives you the freedom to scale marketing resources as needed, without delays.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How soon can my offshore Marketing Manager start?",
        answer:
          "Typically within 7–14 business days, depending on training and onboarding needs.",
      },
      {
        id: 2,
        question: "Will they work within my marketing tools and platforms?",
        answer:
          "Yes. They are trained to use tools like HubSpot, Mailchimp, Meta Business Suite, Google Ads, and more.",
      },
      {
        id: 3,
        question: "Can I hire someone part-time?",
        answer:
          "Absolutely. We offer part-time and full-time options based on your business needs.",
      },
      {
        id: 4,
        question: "Will they work during my time zone?",
        answer:
          "Yes. We match your preferred working hours to ensure smooth collaboration.",
      },
      {
        id: 5,
        question: "How do you monitor performance?",
        answer:
          "We use weekly reporting, KPIs, and team leader oversight to ensure high performance and accountability.",
      },
      {
        id: 6,
        question: "Can I scale up if I need more marketing support later?",
        answer:
          "Yes. We make it easy to scale your offshore marketing team as your campaigns and goals evolve.",
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
