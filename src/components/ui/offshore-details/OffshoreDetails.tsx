import { SectionTitle } from "@/components";
// import { Image } from "@nextui-org/react";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

const OffshoreDetails: FC<{ hasBG?: boolean }> = ({ hasBG = true }) => {
  return (
    <section className={classNames({ "bg-backgroundSecondary": hasBG })}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-2 h-full">
          {/* 953 × 734 px */}
          <Image
            alt=""
            width={953}
            height={734}
            src="/images/why-us/Offshoring can scale and streamline business operations.webp"
            className="rounded-none w-full min-h-full object-cover"
            // removeWrapper
          />
        </div>
        <div className="order-2 lg:order-1 w-half-container xs:w-half-container-xs sm:w-half-container-sm md:w-half-container-md lg:w-half-container-lg xl:w-half-container-xl mx-auto xl:mr-[inherit] py-12 lg:my-0">
          <SectionTitle
            title="Why Offshore"
            subTitle="Offshore details"
            alignment="left"
          />
          <ul className="mt-6 lg:mt-9 max-w-[425px]">
            {items.map(({ description, title }) => (
              <li className="flex space-x-3 mt-8" key={title}>
                <div>
                  {/* 32 × 23 px */}
                  <Image
                    alt=""
                    height={23}
                    width={32}
                    src="/icons/triangle_element.svg"
                    className="rounded-none min-w-7 lg:min-w-8 mt-1"
                    // removeWrapper
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
    </section>
  );
};

export default OffshoreDetails;

const items = [
  {
    title: "Customised Recruitment",
    description:
      "Involvement with the recruitment process to get the right person for your team.",
  },
  {
    title: "Direct Oversight",
    description: "Manage your offshore team with authority and empathy.",
  },
  {
    title: "Business Expansion",
    description: "Offshoring as an extension of your company.",
  },
  {
    title: "Streamlined Processes",
    description: "Utilised cost-efficient resources overseas.",
  },
];
