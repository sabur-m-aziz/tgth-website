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
    "Reduce Expenses with Offshore Data Engineer Services",
  description:
    "Streamline your data infrastructure and save money with TGTH’s offshore Data Engineer services. Our specialists build efficient data pipelines that enhance performance and reduce operational costs. Reach out today to improve your data management and financial efficiency!",
  alternates: {
    canonical: "https://tgth.com.au/data-engineer",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Transform Your Data Infrastructure with an Offshore Data Engineer –",
    titleTwo: "Scalable and Secure Solutions",
    description:
      "Scale your data infrastructure and analytics faster with a reliable offshore Data Engineer starting today.",
    image: "Data Engineer.jpg",
  },
  AccelerateSuccess: {
    title:
      "How an Offshore Data Engineer Builds a Reliable and Scalable Data Foundation",
    paragraphs: [
      "At TGTH, we provide experienced, offshore Data Engineers who help Australian businesses build and manage the data infrastructure needed to drive modern, insight-led decision-making. Our professionals handle everything from data pipeline development, ETL processes, database management, to data warehousing, integration, and real-time analytics architecture.",
      "Our Data Engineers work seamlessly with your in-house team to ensure your data systems are robust, scalable, and secure. Whether you're moving to the cloud, integrating diverse data sources, or enabling advanced analytics, we align with your business goals and technology stack. Our team is skilled in platforms such as AWS, Azure, GCP, Snowflake, SQL, Python, Airflow, and BigQuery.",
      "Outsourcing with TGTH means faster delivery, better reliability, and significant cost savings—so you can focus on using data to grow, not just manage it.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Data Engineers",
    capabilities: [
      "Data architecture design: Creating and managing data architecture to ensure efficient data storage, processing, and retrieval.",
      "ETL processes: Developing and maintaining Extract, Transform, Load (ETL) processes to move and transform data from various sources into data warehouses.",
      "Data integration: Integrating data from multiple sources and ensuring consistency and accuracy across datasets.",
      "Database management: Administering and Optimising databases to ensure high performance and reliability of data storage systems.",
      "Data pipeline development: Designing and implementing data pipelines for real-time and batch processing to facilitate data flow.",
      "Data quality assurance: Ensuring the accuracy, completeness, and reliability of data through validation and cleansing processes.",
      "Big data technologies: Utilising big data frameworks and tools (e.g., Hadoop, Spark) to handle large volumes of data efficiently.",
      "Data modelling: Creating data models to define data structures, relationships, and storage requirements for various applications.",
      "Collaboration with stakeholders: Working with data scientists, analysts, and business stakeholders to understand data needs and support analytics initiatives.",
      "Performance optimisation: Identifying and resolving performance bottlenecks in data processing and storage systems to enhance efficiency.",
      "Data security: Implementing security measures to protect sensitive data and ensure compliance with data privacy regulations.",
      "Documentation: Creating and maintaining documentation for data pipelines, data models, and processes to ensure clarity and reproducibility.",
      "Cloud computing: Leveraging cloud platforms (e.g., AWS, Azure, Google Cloud) for scalable data storage and processing solutions.",
      "Programming proficiency: Utilising programming languages (e.g., Python, Java, SQL) to develop data processing applications and scripts.",
      "Continuous learning: Staying updated with the latest data engineering technologies and methodologies to enhance skills and improve processes.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your data requirements and project objectives. Our team collaborates with you to define the scope of work, including data sources, architecture needs, and processing goals.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Utilising our extensive network, we source and screen skilled data engineers who meet your specific needs. You’ll receive a curated list of candidates, showcasing their expertise and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal data engineer, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to implement data solutions that drive insights and enhance your data infrastructure.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Data Engineering with TGTH?",
    reasons: [
      {
        title: "Reduce Infrastructure Costs and Time to Deployment",
        description:
          "Outsourcing with TGTH saves up to 70% in hiring and operational costs while accelerating your ability to build, deploy, and scale data systems. Avoid delays, hiring headaches, and infrastructure overheads with our fully integrated, offshore data experts.",
      },
      {
        title: "Skilled Engineers with Global Experience and Fluent English",
        description:
          "Our Data Engineers are degree-qualified professionals, fluent in English, and experienced in building and maintaining scalable data pipelines, cloud infrastructure, and enterprise-grade databases. They bring technical depth and clear communication to every project.",
      },
      {
        title: "Culturally and Operationally Aligned with Australian Teams",
        description:
          "With strong cultural alignment and business compatibility, our engineers integrate effortlessly into Australian tech teams. We understand agile workflows, sprint planning, and stakeholder communication—delivering work that feels in-house, not offshore.",
      },
      {
        title: "Build Smarter Data Infrastructure with Greater Flexibility",
        description:
          "From batch and stream processing to automation and real-time data solutions, TGTH Data Engineers enhance agility, performance, and business intelligence capability—all within your preferred tools and platforms.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What data engineering services does TGTH provide?",
        answer:
          "We cover ETL/ELT development, data pipeline management, database design, cloud integration, API development, and data warehouse optimisation.",
      },
      {
        id: 2,
        question: "What platforms and tools do your engineers use?",
        answer:
          "Our team is skilled in AWS, GCP, Azure, Snowflake, Redshift, BigQuery, Airflow, DBT, SQL, Python, and more.",
      },
      {
        id: 3,
        question: "Can I hire a part-time or full-time data engineer?",
        answer:
          "Yes. We offer flexible models including part-time, full-time, or project-based engagements depending on your needs.",
      },
      {
        id: 4,
        question: "Will the engineer work during Australian hours?",
        answer:
          "Yes. We align engineers to your business hours for real-time collaboration and daily updates.",
      },
      {
        id: 5,
        question: "How do you ensure security and data governance compliance?",
        answer:
          "We follow industry-standard data security practices, enforce access controls, and comply with Australian data protection policies.",
      },
      {
        id: 6,
        question:
          "Can TGTH support our move to a cloud-based data architecture?",
        answer:
          "Absolutely. We help design and migrate to cloud-native data platforms, Optimising for performance, scalability, and cost-efficiency.",
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
