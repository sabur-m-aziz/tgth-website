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
    "Save Costs Today with Our Offshore Creative Designer Services",
  description:
    "Elevate your brand’s creativity while saving costs with our Offshore Creative Designers from the Philippines. Enjoy high-quality design solutions tailored to your needs without breaking the bank.",
  alternates: {
    canonical: "https://tgth.com.au/creative-designer",
  },
};

const pageData = {
  Hero: {
    titleOne: "Transform Your Vision with Offshore Creative Designers",
    titleTwo: "",
    description:
      "Access talented Creative Designers from the Philippines to elevate your brand’s visual identity and engage your audience.",
    image: "Creative Designer.jpg",
  },
  AccelerateSuccess: {
    title: "What an Offshore Creative Designer Can Do for Your Business",
    paragraphs: [
      "At TGTH, we provide highly skilled offshore Creative Designers who transform concepts into compelling visuals that resonate with your audience. Our designers are experts in crafting brand identities, marketing materials, digital assets, and innovative visuals that help businesses stand out in competitive markets.",
      "Our Creative Designers don’t just make things “look good”, they align every design with your business goals, audience preferences, and brand guidelines. Whether you need social media graphics, website design, motion graphics, or campaign collateral, we deliver designs that tell your brand’s story effectively.",
      "From start-ups establishing a brand identity to enterprises running multi-channel campaigns, TGTH ensures your creative assets are always polished, consistent, and impactful. By offshoring with TGTH, you gain a dedicated creative partner who enhances brand value, reduces in-house workload, and ensures design excellence at scale.",
    ],
  },
  CoreCapabilities: {
    title: "Core Capabilities of our Creative Designers",
    capabilities: [
      "Graphic design: Creating high-quality visuals for marketing campaigns, presentations, and promotional materials.",
      "Digital and web design: Designing engaging websites, landing pages, and digital ads optimised for user experience.",
      "Social media creatives: Developing on-trend graphics, animations, and content tailored for different platforms.",
      "UI/UX design: Building intuitive user interfaces and wireframes that improve usability and engagement.",
      "Motion graphics & video editing: Producing dynamic animations and video assets for digital storytelling.",
      "Illustration: Delivering custom illustrations that enhance campaigns and brand storytelling.",
      "Packaging design: Designing product packaging that attracts attention and communicates brand value.",
      "Marketing collateral: Producing brochures, posters, banners, and event materials with cohesive branding.",
      "Typography expertise: Selecting and designing with fonts that enhance readability and visual appeal.",
      "Photo editing & retouching: Enhancing images to align with brand aesthetics.",
      "Creative strategy: Collaborating with marketing teams to brainstorm and execute campaign visuals.",
      "Layout & composition: Applying design principles for balance, hierarchy, and clarity in every project.",
      "Attention to detail: Ensuring pixel-perfect, print-ready, and digital-friendly designs.",
      "Collaboration & communication: Working seamlessly with marketing, sales, and product teams to deliver aligned outputs.",
      "Adaptability: Adjusting designs to meet evolving brand and campaign needs.",
      "Software proficiency: Expertise in Adobe Creative Suite, Figma, Canva, and other design tools.",
      "Trend awareness: Staying ahead with modern design trends that keep brands relevant.",
      "Project management: Managing timelines and revisions efficiently to meet deadlines.",
      "Problem-solving through design: Turning abstract ideas into impactful creative solutions.",
    ],
  },
  HowItWorks: {
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We begin with a detailed discussion to understand your design needs and brand objectives.",
      },
      {
        number: "02",
        title: "Tailored Recruitment",
        description:
          "We carefully match you with Creative Designers who possess the skills and style that align with your vision.",
      },
      {
        number: "03",
        title: "Seamless Integration",
        description:
          "Your designer integrates smoothly into your team, ensuring effective collaboration and immediate contributions to your projects.",
      },
    ],
  },
  WhyHiringUs: {
    title: "Why Offshore Your Creative Designer with TGTH?",
    reasons: [
      {
        title: "Significant Cost Savings Without Compromising Creativity",
        description:
          "Outsourcing your creative design with TGTH cuts labour and overheads by up to 70%, while giving you access to professional designers equipped with world-class tools and training.",
      },
      {
        title: "Skilled Designers with Global Experience",
        description:
          "Our Creative Designers in the Philippines are university-trained, fluent in English, and have worked with global brands across industries. They bring both technical skills and cultural understanding to ensure your visuals connect with your audience.",
      },
      {
        title: "Seamless Cultural and Brand Alignment",
        description:
          "The Philippines has strong creative and cultural ties to Australian businesses, making collaboration smooth and efficient. Our designers easily adapt to your brand guidelines and communication style, ensuring consistent brand representation.",
      },
      {
        title: "Faster Turnarounds and Scalable Creative Support",
        description:
          "With TGTH, you gain a flexible, scalable design team that can handle ongoing creative needs or one-off campaigns. Enjoy faster delivery, 24/7 creative coverage, and the ability to scale up quickly when projects demand it.",
      },
    ],
  },
  FAQ: {
    faqs: [
      {
        id: 1,
        question:
          "What qualifications do your offshore Creative Designers have?",
        answer:
          "Our designers are experienced professionals, often with degrees in graphic design or related fields.",
      },
      {
        id: 2,
        question: "How do you ensure the quality of design work?",
        answer:
          "We implement a rigorous selection process, including portfolio assessments and client feedback, to ensure excellence.",
      },
      {
        id: 3,
        question: "Can I communicate directly with my Creative Designer?",
        answer:
          "Yes, direct communication is encouraged to ensure your vision is accurately captured and realised.",
      },
      {
        id: 4,
        question: "What if I need to change designers during a project?",
        answer:
          "You can request a different designer at any time if your project needs evolve.",
      },
      {
        id: 5,
        question: "How do I manage projects with an offshore designer?",
        answer:
          "We provide tools and resources to facilitate communication and project management for seamless collaboration.",
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
