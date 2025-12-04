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
    "Save Money with Offshore Database Administrator Services",
  description:
    "Ensure your data is secure and costs are minimised with TGTH’s offshore Database Administrator services. Our experts optimise database performance, reducing downtime and operational expenses. Contact us today to enhance your data management while saving money!",
  alternates: {
    canonical: "https://tgth.com.au/database-administrator",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Protect, Manage, and Optimise Your Data with Offshore Database Administrators – Secure, Scalable, Cost-Efficient",
    titleTwo: "",
    description:
      "Ensure your data is always available, secure, and running at peak performance with a skilled offshore Database Administrator from TGTH—at a fraction of the local cost.",
    image: "Database Administrator.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Database Administrator Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide expert-level Database Administrators (DBAs) who manage, monitor, and optimise your critical data systems, so your business stays fast, secure, and reliable. Whether you’re running Microsoft SQL Server, MySQL, Oracle, PostgreSQL, or cloud-based databases, our DBAs have the experience and technical depth to support your infrastructure.",
      "From performance tuning and backups to data migration, security audits, and user access control, they ensure your data environment is well-maintained and future-proof. Whether you're managing internal systems or large-scale customer platforms, our DBAs work as a trusted extension of your IT team.",
      "With TGTH, you get 24/7 database reliability without the high costs of full-time, onshore hires.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Database Administrator",
    capabilities: [
      "Database design: Creating efficient database structures that meet the needs of applications and business processes, ensuring optimal performance and scalability.",
      "Installation and configuration: Setting up database management systems (DBMS) and configuring them to ensure they operate efficiently and securely.",
      "Backup and recovery: Implementing backup strategies and disaster recovery plans to protect data integrity and ensure business continuity in case of failures.",
      "Performance tuning: Monitoring and Optimising database performance through tuning queries, indexing strategies, and resource allocation.",
      "Security management: Implementing security measures to safeguard sensitive data, including user access controls and encryption protocols.",
      "Data migration: Facilitating the transfer of data between systems or formats, ensuring data integrity and minimal downtime during the migration process.",
      "Monitoring and troubleshooting: Continuously monitoring database operations to identify and resolve issues promptly, ensuring system reliability and availability.",
      "User management: Administering user accounts and permissions, ensuring that only authorised personnel have access to sensitive information.",
      "Documentation: Maintaining comprehensive documentation of database configurations, procedures, and changes to ensure clarity and compliance.",
      "Collaboration with teams: Working closely with developers, data analysts, and IT staff to support application development and data management needs.",
      "Software updates and patches: Managing and applying updates and patches to the database management system to maintain security and performance.",
      "Continuous learning: Keeping up to date with the latest database technologies and best practices to enhance skills and improve database management processes.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin by understanding your database needs and requirements. Our team collaborates with you to define the scope of work, including database design, management, and security protocols.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Leveraging our extensive network, we identify and screen qualified database administrators who meet your specific criteria. You’ll receive a curated list of candidates, highlighting their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal database administrator, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to manage your database systems effectively, maintaining performance, security, and data integrity.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your DBA Role with TGTH?",
    reasons: [
      {
        title: "Enterprise-Level Support Without Enterprise-Level Costs",
        description:
          "Reduce your database management costs by up to 70% while maintaining high performance, security, and compliance. Get senior-level database expertise without the price tag.",
      },
      {
        title: "Skilled in Major Platforms and Tools",
        description:
          "Our DBAs are experienced across SQL Server, MySQL, PostgreSQL, Oracle, MongoDB, and cloud-native solutions like AWS RDS and Azure SQL. From routine maintenance to complex migrations—they’re equipped to handle it all.",
      },
      {
        title: "Proactive Monitoring and Performance Tuning",
        description:
          "We don’t just keep your databases running—we optimise them. Our DBAs monitor performance, identify bottlenecks, and fine-tune queries to ensure your systems stay fast and efficient.",
      },
      {
        title: "Scalable Coverage for Business-Critical Systems",
        description:
          "Need round-the-clock monitoring or support for scheduled maintenance windows? Our flexible resourcing ensures your data is covered, whenever and however you need it.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "How quickly can a DBA start?",
        answer:
          "Typically within 7–14 business days, depending on access and environment complexity.",
      },
      {
        id: 2,
        question: "Can they work on our existing infrastructure?",
        answer:
          "Yes. Our DBAs integrate into your current systems—on-premises, cloud-based, or hybrid.",
      },
      {
        id: 3,
        question: "What security protocols do they follow?",
        answer:
          "All TGTH DBAs follow strict data privacy, encryption, and access control policies aligned with Australian business standards.",
      },
      {
        id: 4,
        question: "Do they provide support outside business hours?",
        answer:
          "Yes. We offer after-hours support, weekend maintenance, and 24/7 coverage options depending on your needs.",
      },
      {
        id: 5,
        question: "Can they assist with migrations or upgrades?",
        answer:
          "Absolutely. Our DBAs handle version upgrades, data migrations, and cloud transitions with minimal disruption.",
      },
      {
        id: 6,
        question: "Is this a long-term or project-based solution?",
        answer:
          "Both. TGTH offers flexible terms, whether you need temporary help or ongoing database administration.",
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
