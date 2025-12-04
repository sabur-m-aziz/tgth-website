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
    "Save Money and Boost Visibility with Offshore SEO Services",
  description:
    "Improve your online presence and save costs with TGTH’s offshore SEO Specialist services. Our experts implement effective strategies to enhance your search rankings without overspending. Contact us today to optimise your website and drive organic traffic!",
  alternates: {
    canonical: "https://tgth.com.au/seo-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Boost Visibility and Rankings with Offshore SEO Specialists – Scale Smarter, Spend Less",
    titleTwo: "",
    description:
      "Grow your online presence, drive organic traffic, and improve search performance with a skilled offshore SEO Specialist from TGTH—at a fraction of the local cost.",
    image: "SEO Specialist.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore SEO Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we connect businesses with experienced SEO Specialists from the Philippines who understand how to get real, lasting results. From keyword research and on-page optimisation to technical audits and link-building strategies, our specialists are equipped to improve your rankings and drive qualified traffic to your site.",
      "Whether you're launching a new website, refreshing old content, or aiming to outrank competitors, our SEO professionals work as an extension of your team, aligned with your goals and brand voice. They’re fluent in SEO tools like Google Search Console, SEMrush, Ahrefs, Screaming Frog, and more.",
      "By offshoring with TGTH, you get expert-level SEO without the high cost of hiring locally, so you can grow your visibility and leads while staying lean.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our SEO Specialist",
    capabilities: [
      "Keyword research: Identifying relevant keywords and phrases that potential customers are searching for to inform content strategy and improve search visibility.",
      "On-page SEO: Optimising website content, meta tags, headers, and images to enhance search engine ranking and improve user experience.",
      "Technical SEO: Ensuring website architecture and performance are optimised for search engines, including site speed, mobile-friendliness, and crawlability.",
      "Content strategy: Developing and implementing a content plan that aligns with SEO goals, focusing on high-quality, relevant content that engages users.",
      "Link building: Creating and managing strategies to acquire high-quality backlinks from reputable websites to improve domain authority and search ranking.",
      "Analytics and reporting: Monitoring website performance using tools like Google Analytics and Search Console, providing insights and reports on SEO effectiveness and areas for improvement.",
      "Competitor analysis: Analysing competitors’ SEO strategies to identify strengths and weaknesses, allowing for the development of more effective tactics.",
      "Local SEO: Optimising business listings and local search strategies to enhance visibility in local search results and attract nearby customers.",
      "User experience (UX) optimisation: Enhancing website usability and navigation to improve user engagement and reduce bounce rates, which positively impacts SEO.",
      "Staying updated: Keeping abreast of the latest SEO trends, algorithm updates, and best practices to ensure ongoing effectiveness of SEO strategies.",
      "Collaboration with teams: Working closely with content creators, web developers, and marketing teams to ensure alignment on SEO initiatives and goals.",
      "Continuous testing and improvement: Implementing A/B testing and other strategies to refine SEO tactics based on performance data and user behavior.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin by understanding your SEO needs and business objectives. Our team collaborates with you to define the scope of work, including target keywords, content focus, and desired outcomes.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified SEO specialists who meet your specific criteria. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience in search engine optimisation.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal SEO specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to develop and implement effective SEO strategies, driving organic traffic and enhancing your online presence.",
      },
    ],
  },

  WhyHiringUs: {
    title: "Why Offshore Your SEO with TGTH?",
    reasons: [
      {
        title: "Affordable Expertise with Long-Term ROI",
        description:
          "Offshoring your SEO function can reduce costs by up to 70%, while giving you access to specialists who understand both the technical and content-driven sides of SEO. It’s a low-cost, high-return move.",
      },
      {
        title: "Hands-On Experience Across SEO Tools and Platforms",
        description:
          "Our SEO Specialists are trained in major tools and platforms including Google Analytics, Yoast, Screaming Frog, Ahrefs, SEMrush, and more. From schema markup to page speed optimisation, they’ve got you covered.",
      },
      {
        title: "Clear Reporting, Actionable Insights",
        description:
          "You’ll get clear SEO reports, regular updates, and proactive recommendations, so you know what’s working, what needs attention, and how your rankings are tracking.",
      },
      {
        title: "Flexibility to Match Your Strategy",
        description:
          "Need part-time support for content SEO or a full-time technical expert? Whether your focus is local, national, or e-commerce SEO, we provide tailored support to meet your strategy and scale.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How soon can an SEO Specialist start?",
        answer:
          "Typically within 7–14 business days, depending on onboarding and training requirements.",
      },
      {
        id: 2,
        question: "Will they work inside our CMS or website backend?",
        answer:
          "Yes. Our specialists are comfortable working with WordPress, Shopify, Webflow, and custom CMS platforms.",
      },
      {
        id: 3,
        question: "Do they provide SEO reporting?",
        answer:
          "Absolutely. You’ll receive regular reports on keyword performance, traffic, rankings, and site health.",
      },
      {
        id: 4,
        question: "Can they work during Australian business hours?",
        answer:
          "Yes. We match your preferred working hours for real-time collaboration and faster turnaround.",
      },
      {
        id: 5,
        question: "Do they stay up-to-date on algorithm changes?",
        answer:
          "Yes. Our team stays current with SEO trends and Google updates to keep your site competitive.",
      },
      {
        id: 6,
        question: "Is this service suitable for ongoing SEO campaigns?",
        answer:
          "Definitely. We’re built for long-term partnerships, ongoing optimisation, and scalable support.",
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
