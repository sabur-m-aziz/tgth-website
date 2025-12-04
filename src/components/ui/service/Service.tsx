import { Button, SectionTitle } from "@/components";
import { Image } from "@nextui-org/react";
import classNames from "classnames";
import { FC } from "react";

const Service: FC<{ hasBG?: boolean }> = ({ hasBG = true }) => {
  return (
    <section
      id="service"
      className={classNames({ "bg-backgroundSecondary": hasBG })}
    >
      <div className="container mx-auto py-12 lg:py-24.1">
        <SectionTitle subTitle="Our services" title="What We Provide" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 mt-6 lg:mt-9">
          {serviceItems.map(({ id, img, title, description }) => (
            <div
              className="flex space-x-4 lg:space-x-6 lg:pl-8 lg:pr-5.5 lg:pt-8 py-4 lg:pb-4"
              key={id}
            >
              <div>
                <Image
                  src={img}
                  alt={title}
                  className="rounded-none min-w-12 min-h-12 lg:min-w-14 lg:min-h-14"
                />
              </div>
              <div>
                <h4 className="mb-2 lg:mb-3">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="primary"
          size="lg"
          text="Partner With Us"
          containerClass="mx-auto mt-6 lg:mt-9"
          link="/our-services"
        />
      </div>
    </section>
  );
};

export default Service;

const serviceItems = [
  {
    id: 1,
    img: "/images/home/service-1.svg",
    title: "Payroll Solutions",
    description:
      "We manage the process of your team’s compensation including health benefits and all relevant taxes.",
  },
  {
    id: 2,
    img: "/images/home/service-2.svg",
    title: "Team Global Manager",
    description:
      "TGTH provide you with a dedicated Account Manager. Your Account Manager will work closely with our onsite manager to assist you with any concerns.",
  },
  {
    id: 3,
    img: "/images/home/service-3.svg",
    title: "Skilled Candidates",
    description:
      "We are passionate about finding the right candidate for your team. We do this by understanding your unique organisational culture, values, and specific needs.",
  },
  {
    id: 4,
    img: "/images/home/service-4.svg",
    title: "Development Solutions",
    description:
      "We provide turn-key development solutions for custom and bespoke applications to drive your business forward.",
  },
  {
    id: 5,
    img: "/images/home/service-5.svg",
    title: "High Quality  Facilities",
    description:
      "Our expert staff work from our secure, modern offices with access to high-bandwidth internet and IT facilities.",
  },
  {
    id: 6,
    img: "/images/home/service-6.svg",
    title: "Reports and Performance",
    description:
      "We manage your all of your teams offshore HR requirement site.",
  },
];
