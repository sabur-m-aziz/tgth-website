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
    "Save Big with Our Efficient Offshore Order Processing Specialist",
  description:
    "optimise your order management and save costs with our Offshore Order Processing Specialists from the Philippines. Experience fast and accurate processing to enhance customer satisfaction.",
  alternates: {
    canonical: "https://tgth.com.au/order-processing-specialist",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Streamline Orders with Offshore Processing Specialists",
    titleTwo: "",
    description:
      "Enhance your operations with skilled Order Processing Specialists from the Philippines, ensuring efficiency and accuracy.",
    image: "Ordrer_Processig_Specialist.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Order Processing Specialist Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Order Processing Specialists who manage every stage of the order lifecycle, from entry and verification to fulfilment and tracking. By ensuring accuracy and efficiency, our specialists help businesses improve operations, strengthen customer trust, and reduce costly errors.",
      "Our Order Processing Specialists are more than administrative support, they are detail-oriented professionals who act as a reliable extension of your operations team. Whether you're managing e-commerce orders, wholesale distribution, or subscription services, TGTH ensures your order flow remains seamless, accurate, and customer-focused.",
      "By offshoring with TGTH, you gain a cost-effective solution that reduces in-house workload, improves efficiency, and helps you deliver consistent service at scale.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Order Processing Specialists",
    capabilities: [
      "Order entry: Accurately recording customer orders into systems and databases.",
      "Data verification: Reviewing details to ensure accuracy in pricing, quantities, and shipping.",
      "Inventory coordination: Monitoring stock levels and coordinating with warehouse teams.",
      "Payment processing: Handling billing, invoicing, and payment confirmations.",
      "Shipping coordination: Liaising with logistics teams to ensure timely deliveries.",
      "Customer communication: Updating customers on order status, delays, or changes.",
      "Returns management: Processing refunds, exchanges, and replacements efficiently.",
      "E-commerce platform management: Handling orders through platforms like Shopify, Magento, or WooCommerce.",
      "CRM management: Maintaining accurate customer records and order histories.",
      "Compliance checks: Ensuring orders meet company policies and industry standards.",
      "Reporting: Generating regular reports on order accuracy, fulfilment, and sales performance.",
      "Problem resolution: Addressing discrepancies and resolving order-related issues.",
      "Attention to detail: Ensuring order accuracy to minimise costly errors.",
      "Multi-platform support: Managing orders across online, wholesale, and retail channels.",
      "Collaboration: Working with sales, logistics, and finance teams for smooth order flow.",
      "Process optimisation: Identifying opportunities to streamline workflows.",
      "Time management: Handling high volumes of orders within tight deadlines.",
      "Cross-border order management: Supporting international shipping and compliance requirements.",
      "Customer-focused mindset: Prioritising satisfaction through accurate and timely fulfilment.",
      "Adaptability: Adjusting to new platforms, tools, and processes as businesses scale.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a comprehensive consultation to understand your order processing needs and business requirements.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team identifies and recruits experienced Order Processing Specialists from the Philippines who fit your specific criteria.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Order Processing Specialist integrates smoothly into your team, providing immediate support and Optimising your order management processes.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Order Processing with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Accuracy",
        description:
          "Offshoring order processing with TGTH can reduce labour and operational expenses by up to 70%. You gain expert support without the costs of in-house processing teams.",
      },
      {
        title: "Skilled Specialists with Global Experience",
        description:
          "Our Order Processing Specialists in the Philippines are university-educated, fluent in English, and experienced in handling complex order systems for businesses across industries.",
      },
      {
        title: "Seamless Collaboration with Australian Businesses",
        description:
          "The Philippines shares strong cultural and business alignment with Australia, ensuring smooth communication and reliable process integration.",
      },
      {
        title:
          "Scalable Support and Faster Fulfilment",
        description:
          "With TGTH, you can manage high volumes of orders with ease. Our specialists provide accurate, timely, and efficient processing that keeps your customers satisfied and your business competitive.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What qualifications do your offshore Order Processing Specialists have?",
        answer:
          "Our specialists are trained professionals with experience in order management systems and customer service.",
      },
      {
        id: 2,
        question: "How do you ensure quality in order processing?",
        answer:
          "We implement a thorough selection process, including skills assessments and ongoing training, to maintain high-quality standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Order Processing Specialist?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity and efficiency in handling orders.",
      },
      {
        id: 4,
        question: "What if I need to change my Order Processing Specialist?",
        answer:
          "You can request a different specialist at any time if your needs or project requirements change.",
      },
      {
        id: 5,
        question: "How are tasks managed with an offshore Order Processing Specialist?",
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
