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
    "Save Costs Now with Our Offshore Reservation Agent Services",
  description:
    "Enhance your customer experience and save costs with our Offshore Reservation Agents from the Philippines. Enjoy efficient service and support while maximising your operational efficiency.",
  alternates: {
    canonical: "https://tgth.com.au/reservation-agent",
  },
};

const pageData = {
  Hero: {
    titleOne: "Optimise Your Reservations with Expert Offshore Agents",
    titleTwo: "",
    description:
      "Streamline your reservation processes with expert Agents from the Philippines, delivering efficient and reliable service.",
    image: "Reservation Agent.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Reservation Booking Agent Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly trained offshore Reservation Booking Agents who handle customer reservations with professionalism and precision. Our agents are experienced in managing bookings across hospitality, travel, events, and service industries, ensuring customers enjoy a smooth and hassle-free experience.",
      "Our Reservation Agents are more than just booking coordinators. They act as the first point of contact for your customers, providing clear communication, resolving queries, and ensuring every reservation is processed accurately. From handling high volumes of bookings to managing cancellations, amendments, and special requests, our professionals deliver a consistent and positive customer experience.",
      "By offshoring with TGTH, you gain a cost-effective, reliable, and scalable booking solution that reduces in-house workload, improves response times, and helps you deliver excellent service 24/7.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Reservation Agents",
    capabilities: [
      "Reservation management: Handling bookings across phone, email, live chat, and online systems.",
      "Customer communication: Providing prompt, polite, and professional assistance for enquiries and requests.",
      "Booking amendments: Managing cancellations, reschedules, and modifications with accuracy.",
      "System proficiency: Skilled in reservation platforms, CRM software, and industry-specific booking tools.",
      "Payment processing support: Assisting with deposits, refunds, and billing enquiries.",
      "Inventory and availability management: Updating schedules, availability, and capacity in real time.",
      "Record keeping: Maintaining accurate booking records for reporting and analysis.",
      "Upselling & cross-selling: Recommending upgrades, packages, or additional services to maximise revenue.",
      "Customer satisfaction: Ensuring every interaction leaves a positive impression.",
      "Attention to detail: Minimising errors in bookings, schedules, and payments.",
      "Time management: Handling high volumes of requests while meeting deadlines.",
      "Problem-solving: Quickly resolving booking conflicts or discrepancies.",
      "Multilingual proficiency (optional): Assisting diverse customers across different regions.",
      "Team collaboration: Working with operations, front desk, and service teams to ensure smooth fulfilment.",
      "Adaptability: Managing seasonal peaks and fluctuating demand with efficiency.",
      "Complaint handling: Addressing customer concerns calmly and professionally.",
      "Reporting: Generating booking reports to track performance and occupancy rates.",
      "Sales support: Assisting in promotions, group bookings, and corporate reservations.",
      "Confidentiality: Safeguarding customer and payment information.",
      "Cultural awareness: Providing service that aligns with customer expectations and brand values.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a detailed consultation to understand your specific reservation needs and operational goals.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Our team recruits experienced Reservation Agents who match your criteria and align with your business culture.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new Reservation Agent integrates smoothly into your existing team, providing immediate support and enhancing your booking processes.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Reservation Agent with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Service Quality",
        description:
          "Outsourcing reservation services with TGTH can cut labour and operational costs by up to 70%, while ensuring your customers receive professional, friendly, and accurate booking support.",
      },
      {
        title: "Skilled Agents with Industry Expertise",
        description:
          "Our Reservation Booking Agents in the Philippines are university-educated, fluent in English, and experienced in working across hospitality, travel, and customer service roles. You can rely on them for efficiency and professionalism at every touchpoint.",
      },
      {
        title: "Seamless Alignment with Australian Businesses",
        description:
          "The Philippines shares strong cultural and service standards with Australia, making interactions smooth and natural. Our agents adapt easily to your brand voice, ensuring customer experiences align with your business values.",
      },
      {
        title: "Greater Efficiency and 24/7 Coverage",
        description:
          "With TGTH, you can scale booking operations to meet peak demand and provide round-the-clock service. Our teams integrate with your systems, respond quickly to customer needs, and help you maximise booking efficiency.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question:
          "What qualifications do your offshore Reservation Agents have?",
        answer:
          "Our agents are trained professionals with experience in customer service and various reservation systems.",
      },
      {
        id: 2,
        question: "How do you ensure quality service delivery?",
        answer:
          "We conduct thorough vetting, including background checks and performance assessments, to ensure high service standards.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Reservation Agent?",
        answer:
          "Yes, direct communication is encouraged to ensure clarity and satisfaction in handling reservations.",
      },
      {
        id: 4,
        question: "What if I need to change my Reservation Agent?",
        answer:
          "You can request a different agent at any time to better suit your needs.",
      },
      {
        id: 5,
        question:
          "How are tasks managed with an offshore Reservation Agent?",
        answer:
          "We provide tools and guidelines for effective communication and task management, ensuring a smooth workflow.",
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
