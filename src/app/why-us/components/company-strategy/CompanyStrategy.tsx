import { SectionTitle } from "@/components";
import { Image } from "@nextui-org/react";
import { FC } from "react";

const CompanyStrategy: FC = () => {
  return (
    <section className="bg-backgroundSecondary">
      <div className="container py-12 lg:py-24.1">
        <SectionTitle
          subTitle="Company Strategy"
          title="Strategic Approaches for Sustainable <br/> Growth and Success"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16.5 items-center mt-6 lg:mt-12">
          <div className="h-full">
            <Image
              src="/images/why-us/company-strategy.webp"
              className="rounded-none w-full min-h-full object-cover"
              removeWrapper
            />
          </div>
          <div className="">
            <h4 className="text-3.5xl lg:text-4xl font-semibold lg:font-bold font-clearSans">
              Our Working Process
            </h4>
            <ul className="mt-6 lg:mt-9 max-w-[425px]">
              {items.map(({ description, title }) => (
                <li className="flex space-x-3 mt-8" key={title}>
                  <div>
                    <Image
                      src="/icons/triangle_element.svg"
                      className="rounded-none min-w-7 lg:min-w-8 mt-1"
                      removeWrapper
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStrategy;

const items = [
  {
    title: "Tailored Solutions",
    description:
      "We provide customised staffing to match your exact business needs.",
  },
  {
    title: "Seamless Integration",
    description: "Manage your offshore team with authority and empathy.",
  },
  {
    title: "End-to-End Support",
    description:
      "We manage recruitment, onboarding, and payroll for a hassle-free experience.",
  },
];
