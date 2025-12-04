import { HeroSection } from "./components/hero";
import AccelerateSuccess from "@/components/common/AccelerateSuccess";
import CoreCapabilities from "@/components/common/Corecapabilities";
import HowItWorks from "@/components/common/HowitWorks";
import WhyHiringUs from "@/components/common/WhyHiringUs";
import FAQ from "@/components/common/FAQ";
import Roles from "@/components/common/Roles";
import SaveClient from "@/components/common/SaveClient";
import CustomerContactUs from "@/components/common/contact-us/CustomContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cut Expenses with Offshore Booking Agent Services",
  description:
    "Elevate your customer service while saving money with TGTH’s offshore Booking Agent services. Our dedicated team ensures efficient bookings and outstanding support, helping you maximise profitability. Reach out today to streamline your operations and reduce costs!",
  alternates: {
    canonical: "https://tgth.com.au/booking-agent",
  },
};

const pageData = {
  AccelerateSuccess: {
    title:
      "What an Offshore Reservation Booking Agent Can Do for Your Business",
    paragraphs: [
      "At TGTH, we connect you with experienced Reservation Booking Agents who manage bookings, handle enquiries, and support your customers with professionalism and care. Whether it’s travel, hospitality, events, or service appointments, our agents are trained to deliver smooth, efficient reservation experiences across multiple platforms.",
      "From managing phone, email, and live chat requests to updating schedules, confirming payments, and processing changes or cancellations, our agents keep your booking system running without delays or errors. They work within your existing tools and align with your tone of voice and service standards.",
      "With TGTH, you gain reliable, flexible reservation support that keeps your customers happy and your front-line team focused.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Booking Agent",
    capabilities: [
      "Reservation management: Handling the booking process for flights, hotels, car rentals, and other travel services, ensuring accuracy and efficiency.",
      "Customer service: Providing exceptional support to clients, addressing inquiries, and resolving issues related to bookings in a timely manner.",
      "Itinerary planning: Assisting clients in creating detailed travel itineraries that include all necessary reservations and activities, tailored to their preferences.",
      "Market knowledge: Staying updated on travel industry trends, pricing, and promotions to offer clients the best options available.",
      "Payment processing: Managing payment transactions securely and accurately, ensuring all bookings are confirmed and receipts are provided.",
      "Change and cancellation handling: Managing changes or cancellations to bookings, including rebooking and refund processes, while keeping clients informed.",
      "Communication skills: Effectively communicating with clients and suppliers to facilitate bookings and resolve any issues that may arise.",
      "Database management: Maintaining accurate records of client preferences, past bookings, and special requests to enhance future service.",
      "Problem-solving: Quickly identifying and resolving issues or discrepancies that may occur during the booking process to ensure customer satisfaction.",
      "Collaboration with vendors: Working closely with travel suppliers (hotels, airlines, etc.) to secure the best rates and availability for clients.",
      "Follow-up services: Checking in with clients before and after their trips to ensure satisfaction and gather feedback for future improvements.",
      "Multi-channel support: Providing support through various channels, including phone, email, and chat, to accommodate client preferences.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin by understanding your booking needs and requirements. Our team collaborates with you to define the scope of work, including types of bookings, customer service expectations, and preferred communication channels.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Using our extensive network, we identify and screen qualified booking agents who meet your specific criteria. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience in travel and reservations.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal booking agent, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to manage bookings effectively, providing high-quality service that enhances customer satisfaction.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Reservation Booking Role with TGTH?",
    reasons: [
      {
        title: "Save on Labour, Stay Available Longer",
        description:
          "Cut costs by up to 70% while extending your booking hours. Our agents can cover peak periods, after-hours, or full-day shifts, ensuring your customers always reach a live person when it matters.",
      },
      {
        title: "Trained in Booking Systems and Customer Service",
        description:
          "Our agents are experienced in reservation and scheduling tools (like ResDiary, Mindbody, Checkfront, FareHarbor, and custom CRMs), and trained in customer communication and conflict resolution.",
      },
      {
        title: "Clear, Friendly, and Professional Communication",
        description:
          "Fluent in English and familiar with Australian service expectations, our agents provide clear instructions, polite service, and accurate follow-through, no guesswork, no missed details.",
      },
      {
        title: "Scalable for Seasonal or Business Growth",
        description:
          "Whether you need one part-time agent or a full-time team to handle high-volume bookings, TGTH provides scalable solutions to match your needs.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How fast can a Reservation Agent start?",
        answer:
          "Most placements are live within 7–14 business days after onboarding.",
      },
      {
        id: 2,
        question: "Can they use my current booking software?",
        answer:
          "Yes. Our agents are trained to work inside your existing platforms and follow your workflows.",
      },
      {
        id: 3,
        question: "Do they manage bookings across multiple channels?",
        answer:
          "Absolutely. They can handle reservations via phone, email, website forms, live chat, and third-party platforms.",
      },
      {
        id: 4,
        question: "Can they work during peak or after-hours periods?",
        answer:
          "Yes. We offer flexible scheduling to match your business hours and customer demand.",
      },
      {
        id: 5,
        question: "Will they communicate directly with customers?",
        answer:
          "Yes. They are trained in polite, professional customer service and can handle direct communication across platforms.",
      },
      {
        id: 6,
        question: "Can this scale for high seasons or events?",
        answer:
          "Definitely. We offer scalable solutions to support seasonal surges, special events, or new service launches.",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
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
