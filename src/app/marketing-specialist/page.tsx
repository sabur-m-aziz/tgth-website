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
    "Save Money with Offshore Marketing Specialist Services",
  description:
    "Enhance your marketing strategy while reducing costs with TGTH’s offshore Marketing Specialist services. Our experts create targeted campaigns that maximise your budget. Contact us today to elevate your marketing efforts and drive results efficiently!",
  alternates: {
    canonical: "https://tgth.com.au/marketing-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Expand Your Marketing Impact with Offshore Marketing Specialists – Get More Done for Less",
    titleTwo: "",
    description:
      "Boost your campaigns, streamline execution, and increase marketing output with a skilled offshore Marketing Specialist from TGTH, while keeping costs under control.",
    image: "Marketing Specialist.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Marketing Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide experienced, detail-oriented Marketing Specialists who support the execution of your day-to-day marketing activities, so your team can focus on strategy, growth, and big-picture goals.",
      "From managing campaigns and updating websites to coordinating events, creating content, and tracking performance, they help move your plans forward without slowing you down.",
      "Our specialists are fast learners, proactive communicators, and platform-savvy, making them a reliable extension of your internal team. Whether you’re running digital, print, email, or social campaigns, TGTH helps you stay consistent and efficient across every channel.",
      "By offshoring with TGTH, you get dependable, skilled marketing support that saves time, reduces local hiring costs, and helps you execute faster.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Marketing Specialist",
    capabilities: [
      "Market analysis: Conducting assessments to identify market trends, customer needs, and competitive landscape to inform marketing strategies.",
      "Campaign execution: Implementing marketing campaigns across various channels, including digital, social media, and traditional advertising, to achieve business objectives.",
      "Content creation: Developing engaging and relevant content for blogs, social media, newsletters, and other marketing materials to attract and retain customers.",
      "SEO and SEM: Optimising website content for search engines and managing pay-per-click (PPC) advertising campaigns to drive traffic and improve visibility.",
      "Social media management: Creating and managing social media strategies to enhance brand presence and engage with target audiences effectively.",
      "Email marketing: Designing and executing targeted email campaigns to nurture leads and maintain customer relationships, ensuring high open and click-through rates.",
      "Analytics and reporting: Monitoring and analysing marketing performance metrics to evaluate campaign effectiveness and provide actionable insights for improvement.",
      "Customer segmentation: Identifying and creating targeted customer segments to tailor marketing messages and strategies accordingly.",
      "Brand promotion: Enhancing brand awareness and reputation through strategic marketing initiatives and consistent messaging.",
      "Event coordination: Planning and executing marketing events, webinars, and promotions to engage customers and generate leads.",
      "Collaboration: Working with cross-functional teams, including sales and product development, to align marketing efforts with overall business goals.",
      "Budget management: Assisting in managing the marketing budget, ensuring resources are allocated effectively to maximise ROI.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your marketing goals and specific needs. Our team collaborates with you to define the scope of work, including target audiences, campaign objectives, and key performance indicators.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Leveraging our extensive network, we identify and screen qualified marketing specialists who match your requirements. You’ll receive a curated list of candidates, highlighting their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal marketing specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to execute your marketing strategies effectively, driving engagement and growth for your business.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Marketing Role with TGTH?",
    reasons: [
      {
        title: "Cost-Effective Execution Across Marketing Channels",
        description:
          "Offshoring with TGTH can reduce your marketing support costs by up to 70%. You get access to capable professionals who can handle multi-channel tasks without the overhead of a full-time in-house hire.",
      },
      {
        title: "Skilled in Tools, Tech, and Coordination",
        description:
          "Our Marketing Specialists are experienced in tools like HubSpot, Mailchimp, Canva, Google Analytics, WordPress, and Asana. From uploading content to coordinating campaign assets, they’re ready to hit the ground running.",
      },
      {
        title: "Seamless Fit with Your Team",
        description:
          "Fluent in English and familiar with Australian business communication, our specialists integrate smoothly into your workflows, collaborating with internal teams, agencies, and freelancers alike.",
      },
      {
        title: "Scalable Support, Tailored to Your Needs",
        description:
          "Need a full-time assistant or part-time project support? TGTH offers flexible solutions so you can scale your marketing output without overextending your team or budget.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How soon can a Marketing Specialist start?",
        answer:
          "Usually within 7–14 business days after onboarding and brief alignment.",
      },
      {
        id: 2,
        question: "Can they manage campaigns independently?",
        answer:
          "Yes. They can take ownership of campaign coordination, scheduling, and reporting, while staying aligned with your goals.",
      },
      {
        id: 3,
        question: "Do they work inside our systems and tools?",
        answer:
          "Absolutely. They’re trained to use your preferred platforms like email, CRM, project management, and CMS tools.",
      },
      {
        id: 4,
        question: "Can they align with our business hours?",
        answer:
          "Yes. We match their working hours to your time zone for seamless communication and faster turnaround.",
      },
      {
        id: 5,
        question: "Is this suitable for ongoing support or project work?",
        answer:
          "Both. Whether you need long-term help or support for a specific campaign, we offer flexible arrangements.",
      },
      {
        id: 6,
        question: "Will I have control over workload and priorities?",
        answer:
          "Yes. You remain in full control of direction and priorities, our team is here to support your execution.",
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
