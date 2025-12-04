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
    "Save Big on Costs with Our Offshore Logistics Coordinator",
  description:
    "optimise your supply chain and save costs with our Offshore Logistics Coordinators from the Philippines. Experience seamless coordination and efficiency to enhance your logistics operations.",
  alternates: {
    canonical: "https://tgth.com.au/logistics-coordinator",
  },
};

const pageData = {
  Hero: {
    titleOne: "Enhance Efficiency with Offshore Logistics Coordinators",
    titleTwo: "",
    description:
      "Enhance your logistics operations with skilled Logistics Coordinators from the Philippines, ensuring efficiency and reliability.",
    image: "Logistics_Coordinator.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Logistics Coordinator Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly capable offshore Logistics Coordinators who keep your supply chain running seamlessly from end to end. Our coordinators are experienced in managing shipments, inventory, documentation, and vendor communications, ensuring products move efficiently and cost-effectively.",
      "Our Logistics Coordinators are more than administrators—they’re problem solvers who anticipate challenges, prevent delays, and maintain accuracy across every stage of the supply chain. Whether it’s coordinating domestic deliveries or managing international freight, TGTH ensures your logistics processes are handled with reliability and professionalism.",
      "By offshoring with TGTH, you gain a cost-effective and scalable logistics solution that reduces workload, eliminates bottlenecks, and improves supply chain performance.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Logistics Coordinators",
    capabilities: [
      "Shipment coordination: Scheduling and tracking domestic and international shipments.",
      "Inventory management: Monitoring stock levels to prevent shortages and overstocking.",
      "Vendor communication: Liaising with suppliers, transport providers, and warehouses.",
      "Documentation handling: Preparing bills of lading, invoices, and customs paperwork.",
      "Customs compliance: Ensuring shipments meet local and international regulations.",
      "Freight management: Negotiating transport costs and ensuring timely deliveries.",
      "Order processing: Coordinating orders from placement to final delivery.",
      "Data entry: Maintaining accurate logistics and inventory records.",
      "Problem-solving: Addressing delays, shortages, or discrepancies quickly and effectively.",
      "Customer communication: Providing shipment updates and resolving delivery concerns.",
      "Software proficiency: Skilled in ERP systems, logistics platforms, and supply chain management tools.",
      "Scheduling & planning: Coordinating transport routes and delivery timelines for efficiency.",
      "Reporting: Generating logistics reports to track performance and identify improvements.",
      "Attention to detail: Minimising errors in shipping, labelling, and documentation.",
      "Cross-functional collaboration: Working with sales, operations, and finance teams to align processes.",
      "Cost control: Identifying opportunities to reduce shipping and storage expenses.",
      "Adaptability: Managing seasonal peaks, urgent deliveries, and fluctuating demand.",
      "Team coordination: Supporting warehouse and distribution teams to ensure smooth operations.",
      "Trend monitoring: Staying updated on freight and supply chain developments.",
      "Process improvement: Recommending ways to optimise logistics workflows.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a detailed consultation to understand your logistics needs and operational challenges.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team recruits experienced Logistics Coordinators who align with your specific requirements and business objectives.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Logistics Coordinator integrates into your existing team, ensuring immediate support and Optimising your logistics operations.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Logistics Coordinator with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Efficiency",
        description:
          "Outsourcing logistics coordination with TGTH reduces labour and operational expenses by up to 70%. You save on recruitment, training, and infrastructure while gaining skilled professionals who keep your supply chain moving smoothly.",
      },
      {
        title: "Experienced Coordinators with Global Expertise",
        description:
          "Our Logistics Coordinators in the Philippines are university-educated, fluent in English, and experienced in working with international supply chains. They understand the complexities of logistics and bring valuable expertise to your business.",
      },
      {
        title: "Seamless Alignment with Australian Businesses",
        description:
          "The Philippines has a strong cultural and business connection with Australia, making collaboration seamless. Our coordinators easily adapt to your workflows, communication style, and service expectations.",
      },
      {
        title: "Improved Accuracy and Faster Response Times",
        description:
          "With TGTH, you gain access to dedicated logistics support that reduces delays, improves shipment accuracy, and enhances overall supply chain efficiency. Our teams work within your systems to ensure transparency and timely updates.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question:
          "What qualifications do your offshore Logistics Coordinators have?",
        answer:
          "Our coordinators are trained professionals with experience in supply chain management and logistics operations.",
      },
      {
        id: 2,
        question: "How do you ensure quality service delivery?",
        answer:
          "We conduct thorough vetting, including background checks and skill assessments, to maintain high service standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Logistics Coordinator?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity and efficiency in logistics management.",
      },
      {
        id: 4,
        question: "What if I need to change my Logistics Coordinator?",
        answer:
          "You can request a different coordinator at any time to better suit your needs.",
      },
      {
        id: 5,
        question:
          "How are tasks managed with an offshore Logistics Coordinator?",
        answer:
          "We provide tools and resources for effective communication and task management, ensuring smooth collaboration.",
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
