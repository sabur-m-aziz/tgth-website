import { SectionTitle } from "@/components";
import { Image } from "@nextui-org/react";
import { FC } from "react";

const ComprehensiveSolutions: FC = () => {
  return (
    <section className="bg-backgroundSecondary py-12 lg:py-24.1">
      <SectionTitle
        title="Our Solutions at a Glance"
        subTitle="Comprehensive Solutions"
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 lg:mt-16.1">
        {items.map(({ image, title, list }) => (
          <div
            className="bg-white flex py-4 px-3 lg:p-9 rounded lg:rounded-lg space-x-5 lg:space-x-6"
            key={title}
          >
            {/* <div className="w-12 h-12 lg:w-20 lg:h-20 p-4 lg:p-9 bg-[#F2F9FF] rounded-full">
              <Image
                src={image}
                className="rounded-none w-full"
                removeWrapper
                alt="industry"
              />
            </div> */}
            <Image
              src={image}
              className="rounded-none w-12 h-12 lg:w-20 lg:h-20"
              removeWrapper
              alt="industry"
            />
            <div>
              <h5 className="text-sm font-bold lg:text-2xl lg:font-bold leading-6.5 lg:leading-7 mt-2 lg:mt-3 text-textPrimary mb-3 font-clearSans">
                {title}
              </h5>
              {list?.length && (
                <ul className="list-disc pl-5">
                  {list.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;

const items = [
  {
    title: "Customer Services",
    image: "/images/service/Industries-1.svg",
    list: [
      "Handling customer queries communications through calls and emails",
      "Providing solutions to customer queries",
    ],
  },
  {
    title: "Finance",
    image: "/images/service/Industries-2.svg",
    list: [
      "Accounts receivable",
      "Accounts payable",
      "Costings",
      "Administrative support",
      "Commercial Manager",
      "Finance Manager",
    ],
  },
  {
    title: "Technology Services",
    image: "/images/service/Industries-3.svg",
    list: [
      "Help Desk Services",
      "IT Officer",
      "Data Analytics/Data Science",
      "Custom Application Development",
      "Enterprise architecture and design",
    ],
  },
  {
    title: "Marketing",
    image: "/images/service/Industries-4.svg",
    list: [
      "Marketing Manager",
      "Marketing Coordinator",
      "Social Media Coordinator",
      "SEO Specialist",
      "Advertising Coordinator",
    ],
  },
  {
    title: "Logistics",
    image: "/images/service/Industries-5.svg",
    list: [
      "Fleet Schedulers",
      "Fleet Administrators",
      "24/7 After-hours Coordinators",
    ],
  },
  {
    title: "Sales",
    image: "/images/service/Industries-6.svg",
    list: ["Sales Administrators ", "Account Managers"],
  },
  {
    title: "Safety",
    image: "/images/service/Industries-7.svg",
    list: [
      "Compliance",
      "Safety Co-Ordinator",
      "24 Operations Monitoring",
      "Fatigue Monitoring",
    ],
  },
  {
    title: "Human Resources",
    image: "/images/service/Industries-8.svg",
    list: [
      "Human Resources Graduate",
      "Human Resources Administrator",
      "Payroll Clerk",
      "Payroll Manager",
    ],
  },
];
