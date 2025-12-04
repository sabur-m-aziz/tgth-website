"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

interface NavigationProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

const Navigation: FC<NavigationProps> = ({ sectionRefs }) => {
  const [selected, setSelected] = useState(faqTabs[0].title);
  const [isFixed, setIsFixed] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  const handleScroll = (title: string) => {
    setSelected(title);
    const section = sectionRefs[title].current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      if (window.scrollY > 2400) {
        setTopPosition(window.scrollY - 2400);
        setIsFixed(true);
      } else if (window.scrollY >= 500) {
        setTopPosition(0);
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScrollPosition);
    window.addEventListener("resize", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
      window.removeEventListener("resize", handleScrollPosition);
    };
  }, []);

  return (
    <div
      className={classNames(
        "space-y-2 sm:space-y-0 xl:space-y-3 sm:space-x-4 xl:space-x-0 sm:flex xl:block",
        {
          "xl:fixed top-3": isFixed,
        }
      )}
      style={{ top: `${-topPosition || 10}px` }}
    >
      {faqTabs.map(({ title }) => (
        <button
          key={title}
          onClick={() => handleScroll(title)}
          className={`text-base lg:text-xl font-barlow block ${
            selected === title ? "font-bold" : "font-normal"
          }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Navigation;

const offshoringData = [
  {
    id: 1,
    question: "How does offshoring work?",
    answer: (
      <div>
        <p className="text-base text-textPrimary">
          Simply contact TGTH to discuss what your requirements are. We can then
          provide advice on the market and type of people you may need.
        </p>
        <p className="text-base text-textPrimary mt-3 lg:mt-5">
          TGTH will work with you to expand your team in the Philippines. During
          this time TGTH will work with you to gain a deep understanding into
          your operations, needs and wants.
        </p>
        <p className="text-base text-textPrimary mt-3 lg:mt-5">
          TGTH will source the right candidate for not only your role but for
          your business.
        </p>
      </div>
    ),
    descriptionType: "COMPONENT",
  },
  {
    id: 2,
    question: "Why the Philippines?  ",
    answer:
      "The Philippines have the advantage of a huge labour market. Within this market you will find a majority English speaking population with high education levels.",
  },
  {
    id: 3,
    question: "Where are you located?",
    answer: "We are located in BGC Taguig, Manila.",
  },
  {
    id: 4,
    question: "What is the time zone?",
    answer: "TGTH Manila operates on Australian Western Standard Time (AWST).",
  },
];
const serviceData = [
  {
    id: 1,
    question: "Do we receive an Account Manager? ",
    answer: (
      <div>
        <p className="text-base text-textPrimary">
          When partnering with TGTH you will receive a dedicated account manager
          who will meet with you to gain a deep understanding of your business
          needs.
        </p>
        <p className="text-base text-textPrimary mt-3 lg:mt-5">
          Your account manager will be able to guide you every step of the way.
        </p>
      </div>
    ),
    descriptionType: "COMPONENT",
  },
  {
    id: 2,
    question: "How does it work?",
    answer: (
      <div>
        <p className="text-base text-textPrimary">
          Your designated account manager will look after your team in Manila
          from a wellbeing, and administrative perspective.
        </p>
        <p className="text-base text-textPrimary mt-3 lg:mt-5">
          Your role is to provide the work and train them in your business, TGTH
          take care of the rest.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question: "How long does it take to fill vacancies?",
    answer: (
      <div>
        <p className="text-base text-textPrimary">
          From posting the vacancy to having candidates for interview will take
          7 days.
          <br />
          <p className="text-sm text-textPrimary italic mt-2">
            *Depending on the complexity of the role.
          </p>
        </p>
      </div>
    ),
    descriptionType: "COMPONENT",
  },
  {
    id: 4,
    question: "Does TGTH Provide the Equipment Required for my role?",
    answer:
      "TGTH provides all the hardware and setup for your team members to get started  ",
  },
  {
    id: 5,
    question: "What are the associated costs? ",
    answer:
      "The associated costs include the salary, government required payments, plus a service fee for TGTH to take care of the staff on the floor.  ",
  },
];
const aboutData = [
  {
    id: 1,
    question: "Why TGTH",
    answer:
      "Targeting the Australian market with Australian ownership being a boutique high service focused organisation we can meet your requirements.",
  },
  {
    id: 2,
    question: "Who owns TGTH?",
    answer: (
      <div>
        <p className="text-base text-textPrimary">TGTH is Australian owned.</p>
        <p className="text-base text-textPrimary mt-3 lg:mt-5">
          Our Director is Angela Florido, to learn more about Angela click
          below.
        </p>
        <Link href="/about#director" className="italic underline">
          Directors message & team
        </Link>
      </div>
    ),
    descriptionType: "COMPONENT",
  },
];

export const faqTabs = [
  {
    title: "Offshoring to the Philippines",
    link: "#",
    datalist: offshoringData,
  },
  {
    title: "Our Services",
    link: "#",
    datalist: serviceData,
  },
  {
    title: "About Us",
    link: "#",
    datalist: aboutData,
  },
];
