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
    "Cut Costs and Boost Efficiency with Offshore Administrative Assistants",
  description:
    "Streamline your operations and save costs by hiring Offshore Administrative Assistants from the Philippines. Experience skilled support that enhances productivity and reduces your workload effectively.",
  alternates: {
    canonical: "https://tgth.com.au/administrative-assistant",
  },
};

const pageData = {
  Hero: {
    titleOne: "Streamline Operations with Our Offshore Administrative Assistants",
    titleTwo: "",
    description:
      "Enhance your productivity with skilled Administrative Assistants from the Philippines, managing tasks efficiently and effectively.",
    image: "Administrative Assistant.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Administrative Assistant Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly trained offshore Administrative Assistants who help businesses operate more efficiently by managing essential support tasks. Our assistants are skilled in handling a wide range of administrative duties, including scheduling, data entry, email management, reporting, and document preparation.",
      "Our Administrative Assistants go beyond basic task management. They act as a reliable extension of your in-house team, helping you stay organised, focused, and productive. Whether you need ongoing administrative support or help managing seasonal workloads, our professionals ensure accuracy, timeliness, and attention to detail.",
      "By offshoring with TGTH, you gain the advantage of a cost-effective, reliable, and scalable solution that reduces your workload, frees up valuable time, and allows your team to focus on strategic initiatives that drive growth.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Offshore Administrative Assistants",
    capabilities: [
      "Calendar management: Scheduling and coordinating meetings, appointments, and events.",
      "Email management: Organising inboxes, responding to enquiries, and prioritising important communications.",
      "Data entry: Accurately entering and maintaining business records and databases.",
      "Document preparation: Creating, formatting, and proofreading reports, presentations, and spreadsheets.",
      "Travel coordination: Booking flights, accommodation, and transport while managing itineraries.",
      "File management: Organising digital and physical files for easy retrieval and compliance.",
      "Customer support assistance: Handling routine enquiries and providing administrative support to customer service teams.",
      "Research support: Conducting market, competitor, or product research to aid decision-making.",
      "Reporting: Preparing regular reports on operations, finance, or sales for management.",
      "Meeting support: Preparing agendas, taking minutes, and following up on action items.",
      "Expense management: Processing invoices, reimbursements, and purchase orders.",
      "CRM and database management: Updating client records and maintaining data accuracy.",
      "Project support: Assisting with timelines, task tracking, and coordination.",
      "Multitasking ability: Handling multiple priorities without compromising quality.",
      "Communication skills: Clear and professional interaction across email, phone, and chat.",
      "Problem-solving: Addressing day-to-day challenges with resourcefulness and initiative.",
      "Confidentiality: Managing sensitive business information with discretion.",
      "Adaptability: Adjusting quickly to changing business needs and workflows.",
      "Team collaboration: Supporting internal depar ments to ensure smooth operations.",
      "Attention to detail: Delivering accurate, error-free work across all tasks.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a detailed discussion to identify your administrative needs and operational challenges.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "We match you with experienced Administrative Assistants who align with your specific requirements and work culture.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your new assistant integrates smoothly into your team, ensuring immediate support and enhanced workflow.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Administrative Assistant with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Sacrificing Quality",
        description:
          "By offshoring your administrative tasks with TGTH, you can reduce labour and operational expenses by up to 70%. You save on recruitment, infrastructure, and employee benefits, while gaining access to highly skilled professionals.",
      },
      {
        title: "Skilled Professionals with Strong Administrative Expertise",
        description:
          "Our Administrative Assistants in the Philippines are university-educated, fluent in English, and experienced in supporting executives, managers, and teams across industries. You can expect reliable, organised, and proactive support that matches the standards of in-house staff.",
      },
      {
        title: "Seamless Alignment with Australian Businesses",
        description:
          "The Philippines shares a strong cultural and professional connection with Australia. Our team members are familiar with Australian communication styles and workplace expectations, making collaboration seamless and effective.",
      },
      {
        title: "Enhanced Efficiency and Productivity",
        description:
          "With TGTH, you’ll benefit from faster turnaround times, improved organisation, and dependable administrative coverage. Our assistants integrate with your systems and processes, helping you stay on top of deadlines and priorities while improving operational efficiency.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question:
          "What qualifications do your offshore Administrative Assistants have?",
        answer:
          "Our assistants are experienced professionals with skills in office management, communication, and relevant software tools.",
      },
      {
        id: 2,
        question: "How do you ensure quality in the recruitment process?",
        answer:
          "We conduct thorough vetting, including background checks, skills assessments, and client references to ensure high-quality candidates.",
      },
      {
        id: 3,
        question:
          "Can I communicate directly with my offshore Administrative Assistant?",
        answer:
          "Absolutely! Direct communication is encouraged to foster collaboration and ensure your needs are met.",
      },
      {
        id: 4,
        question: "What if I need to change my Administrative Assistant?",
        answer:
          "You can request a different assistant at any time if your project requirements change.",
      },
      {
        id: 5,
        question: "How do I manage tasks with an offshore Administrative Assistant?",
        answer:
          "We provide tools and guidelines to facilitate effective communication and project management for seamless collaboration.",
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
