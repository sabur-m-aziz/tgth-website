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
    "Save on Sales Operations with Offshore Sales Support",
  description:
    "Enhance your sales efficiency and reduce costs with TGTH’s offshore Sales Support services. Our dedicated team provides essential support to boost your sales efforts while saving money. Get in touch now to streamline your sales processes and improve profitability!",
  alternates: {
    canonical: "https://tgth.com.au/sales-support",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Accelerate Your Sales Pipeline with Reliable Offshore Sales Support Specialists",
    titleTwo: "",
    description:
      "Free up your sales team to close more deals by adding a results-driven offshore Sales Support Specialist.",
    image: "Sales Support.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Sales Support Specialist Does to Boost Your Sales Operations",
    paragraphs: [
      "At TGTH, we provide experienced, offshore Sales Support Specialists who help Australian businesses increase revenue and efficiency by handling the administrative and operational tasks that slow sales teams down. Our team takes care of CRM management, lead qualification, quote preparation, follow-ups, reporting, and more—allowing your sales reps to focus on selling.",
      "Whether you’re a fast-growing startup or a large sales-driven organisation, our Sales Support professionals integrate seamlessly with your team to ensure every lead is nurtured, every opportunity is tracked, and no deal slips through the cracks. We’re experienced with platforms like Salesforce, HubSpot, Zoho, Pipedrive, and work according to your sales process.",
      "By outsourcing Sales Support with TGTH, you gain a flexible, high-performing extension of your sales team that helps you close more deals, faster—without the overhead.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Sales Support",
    capabilities: [
      "Lead generation: Identifying and qualifying potential leads through research and outreach to build a robust sales pipeline.",
      "Customer relationship management (CRM): Maintaining and updating customer records in CRM systems to ensure accurate tracking of interactions and follow-ups.",
      "Sales administration: Assisting with administrative tasks such as preparing sales reports, managing schedules, and coordinating meetings to support the sales team.",
      "Product knowledge: Understanding the features and benefits of products or services to provide accurate information and support to both the sales team and customers.",
      "Quote preparation: Creating and sending accurate sales quotes and proposals to potential clients, ensuring timely responses to inquiries.",
      "Order processing: Managing the order fulfillment process from receipt to delivery, ensuring accurate and timely processing of customer orders.",
      "Market research: Conducting research on market trends, competitors, and customer preferences to provide valuable insights to the sales team.",
      "Customer support: Addressing customer inquiries and issues promptly, providing exceptional service to enhance customer satisfaction and loyalty.",
      "Sales tracking: Monitoring sales performance metrics and providing regular updates to the sales team to assess progress against targets.",
      "Collaboration: Working closely with sales representatives and other departments to ensure alignment on goals, strategies, and processes.",
      "Training and onboarding: Assisting in the training of new sales team members by providing them with necessary resources and information.",
      "Data analysis: Analysing sales data to identify trends and opportunities for improvement, supporting strategic decision-making.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your sales support needs and objectives. Our team collaborates with you to define the scope of work, including lead management, administrative tasks, and customer interaction strategies.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified sales support specialists who meet your specific criteria. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal sales support specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to assist your sales team effectively, enhancing productivity and driving sales success.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Sales Support with TGTH?",
    reasons: [
      {
        title: "Cut Administrative Costs Without Sacrificing Efficiency",
        description:
          "Outsourcing with TGTH helps you save up to 70% on operational costs by offloading time-consuming sales tasks—while maintaining accuracy, speed, and professionalism that meets Australian standards.",
      },
      {
        title: "English-Fluent, Process-Driven Sales Support Professionals",
        description:
          "Our Sales Support staff are university-educated, fluent in English, and trained in handling the behind-the-scenes functions that keep your sales pipeline flowing. They manage documentation, CRM entries, lead coordination, and customer communication with precision.",
      },
      {
        title: "Seamless Integration with Your Sales Workflow and Tools",
        description:
          "We understand how important alignment is. That’s why our team integrates into your systems and culture—adapting to your CRM, communication style, and lead management process for smooth collaboration and consistent results.",
      },
      {
        title: "Improve Sales Productivity and Lead Conversion Rates",
        description:
          "TGTH Sales Support specialists help you stay organised and responsive. From follow-ups and lead routing to quote preparation and database management, we give your sales team more time to build relationships and close sales.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What tasks do TGTH Sales Support Specialists handle?",
        answer:
          "We assist with lead management, CRM data entry, calendar scheduling, quote creation, sales reporting, and email follow-ups.",
      },
      {
        id: 2,
        question: "Can your team use our CRM system?",
        answer:
          "Yes. Our specialists are experienced in Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics, and other CRM platforms.",
      },
      {
        id: 3,
        question: "Do you offer full-time or part-time support?",
        answer:
          "Absolutely. We offer flexible engagement models based on your sales team’s size, workload, and sales cycle.",
      },
      {
        id: 4,
        question: "Will my Sales Support work in my time zone?",
        answer:
          "Yes. Your Sales Support staff can align with your Australian business hours for real-time updates and seamless handovers.",
      },
      {
        id: 5,
        question: "How do you ensure quality and accountability?",
        answer:
          "Through daily reporting, KPIs, structured workflows, and regular performance reviews—ensuring high-quality support at all times.",
      },
      {
        id: 6,
        question: "Can I scale Sales Support during busy periods or campaigns?",
        answer:
          "Yes. We offer scalable support during seasonal sales pushes, product launches, or marketing campaigns.",
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
