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
    "Cut Development Costs with Offshore Web Developer Services",
  description:
    "Transform your online presence and save money with TGTH’s offshore Web Developer services. Our skilled developers create efficient, high-quality websites tailored to your needs. Get in touch now to enhance your digital strategy while reducing costs!",
  alternates: {
    canonical: "https://tgth.com.au/web-developer",
  },
};

const pageData = {
  Hero: {
    titleOne:
      "Build High-Performing Digital Platforms with a Professional Offshore Web Developer",
    titleTwo: "",
    description:
      "Build responsive, SEO-optimised websites efficiently with the help of an experienced offshore Web Developer.",
    image: "Web Developer.jpg",
  },
  AccelerateSuccess: {
    title:
      "What an Offshore Web Developer Can Do to Enhance Your Online Presence",
    paragraphs: [
      "At TGTH, we offer skilled, offshore Web Developers who help Australian businesses create, manage, and maintain high-performing websites and web applications. Our developers are proficient in both front-end and back-end technologies, supporting projects ranging from corporate websites, eCommerce platforms, and web portals to custom applications, CMS builds, and API integrations.",
      "Whether you're launching a new brand, upgrading your digital presence, or scaling an existing platform, our Web Developers become a seamless part of your team. They’re experienced in HTML, CSS, JavaScript, PHP, React, Vue.js, WordPress, Shopify, Laravel, and more—ensuring fast, functional, and fully responsive digital experiences.",
      "By outsourcing your web development with TGTH, you gain cost-effective access to technical talent that delivers projects on time, aligns with your brand, and supports your long-term growth.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Web Developer",
    capabilities: [
      "Front-end development: Creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript, ensuring a seamless user experience.",
      "Back-end development: Building and maintaining server-side applications, databases, and APIs to support the functionality of websites and web applications.",
      "Responsive design: Implementing responsive web design principles to ensure websites function well on various devices and screen sizes.",
      "Content Management Systems (CMS): Proficient in popular CMS platforms (e.g., WordPress, Joomla) for easy content management and website maintenance.",
      "E-commerce solutions: Developing and integrating e-commerce functionalities, including payment gateways and shopping carts, to enhance online shopping experiences.",
      "Website performance optimisation: Improving website speed and performance through code optimisation, image compression, and efficient resource management.",
      "SEO best practices: Implementing on-page SEO strategies to enhance visibility on search engines and drive organic traffic.",
      "Version control systems: Using tools like Git for version control to manage and track changes in code, facilitating collaboration among team members.",
      "Cross-browser compatibility: Ensuring websites function consistently across different browsers and devices, providing a uniform experience for all users.",
      "Debugging and troubleshooting: Identifying and resolving issues in code or functionality to ensure smooth operation of web applications.",
      "API integration: Connecting third-party services and APIs to enhance website functionality and user experience.",
      "User testing and feedback incorporation: Conducting user testing to gather feedback and make necessary adjustments to improve usability and functionality.",
      "Continuous learning: Staying updated with the latest web development trends, technologies, and best practices to deliver cutting-edge solutions.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start by understanding your web development needs and project goals. Our team collaborates with you to define the scope of work, including design preferences and functionality requirements.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "Leveraging our extensive network, we identify and screen skilled web developers who meet your specific criteria. You’ll receive a curated list of candidates, showcasing their portfolios and relevant experience.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Once you select your ideal web developer, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to start developing your website or web application, delivering high-quality results that align with your vision.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Web Development with TGTH?",
    reasons: [
      {
        title: "Reduce Development Costs Without Compromising Quality",
        description:
          "Avoid the high overhead of local development teams. With TGTH, you save up to 70% on staffing and infrastructure while getting access to professional developers who follow Australian UX/UI and coding standards.",
      },
      {
        title: "Skilled Developers Fluent in English and Modern Code",
        description:
          "Our developers are university-educated, fluent in English, and experienced in full-stack development across various frameworks. Expect clean, well-documented code, mobile optimisation, and seamless integration with your existing systems.",
      },
      {
        title: "Seamless Integration with Your Business Culture and Team",
        description:
          "With cultural compatibility and time-zone alignment, our developers work hand-in-hand with Australian teams. They attend sprint meetings, use tools like Git, Jira, Slack, Figma, and follow agile workflows—delivering results that feel truly local.",
      },
      {
        title:
          "Build and Scale Digital Products with Greater Speed and Flexibility",
        description:
          "From initial wireframes to post-launch support, TGTH developers provide flexible, reliable service that adapts to your pace. Whether you need landing pages, complex web apps, or CMS migrations, we’ve got you covered.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question: "What types of web projects can TGTH developers support?",
        answer:
          "We cover corporate websites, eCommerce stores, custom applications, landing pages, CMS integration, plugin development, and more.",
      },
      {
        id: 2,
        question: "What technologies do your developers use?",
        answer:
          "Our team works with HTML5, CSS3, JavaScript (React, Vue, Angular), PHP, Laravel, WordPress, Shopify, Node.js, and more.",
      },
      {
        id: 3,
        question: "Can I hire a developer part-time or full-time?",
        answer:
          "Yes. We offer flexible options—hire full-time, part-time, or project-based depending on your needs.",
      },
      {
        id: 4,
        question: "Will the developer work during my business hours?",
        answer:
          "Yes. Developers can align with your Australian business hours for real-time collaboration and faster turnaround.",
      },
      {
        id: 5,
        question: "Do you follow SEO and performance best practices?",
        answer:
          "Absolutely. All websites are built with SEO fundamentals, mobile responsiveness, fast loading times, and clean coding.",
      },
      {
        id: 6,
        question: "Can you scale development support for bigger projects?",
        answer:
          "Yes. We can expand your team for large-scale builds, redesigns, product launches, or ongoing maintenance.",
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
