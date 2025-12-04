import { SectionTitle } from "@/components";
import { Image } from "@nextui-org/react";
import { FC } from "react";

const IndustriesService: FC = () => {
  return (
    <section className="my-12 lg:my-24.1">
      <SectionTitle
        title="We serve the following industries with tailored solutions and top-quality products"
        subTitle="Industries we service"
      />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4 mt-6 lg:mt-16.1">
        {items.map(({ image, title, description }) => (
          <div className="p-4 border border-[#EDEDED] rounded-xl" key={title}>
            <div className="bg-backgroundSecondary flex flex-col justify-center items-center py-4 lg:py-9">
              <Image
                src={image}
                className="rounded-none w-10 lg:w-16 mt-1"
                removeWrapper
                alt="industry"
              />
              <h5 className="text-base font-bold lg:text-xl leading-6.5 lg:leading-7 mt-2 lg:mt-4 text-textPrimary">
                {title}
              </h5>
            </div>
            <p className="text-center mt-4">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesService;

const items = [
  {
    title: "Software",
    image: "/images/home/industry-icon-1.svg",
    description:
      "Design and develop custom, enterprise level software according to your requirements.",
  },
  {
    title: "Logistics",
    image: "/images/home/industry-icon-2.svg",
    description:
      "Coordinate customer enquiries, freight allocations and tracking 24/7 with our remote teams.",
  },
  {
    title: "Finance",
    image: "/images/home/industry-icon-3.svg",
    description:
      "Our team of AR/AP professionals can help to streamline your accounts and finance processes.",
  },
  {
    title: "Media & Marketing",
    image: "/images/home/industry-icon-4.svg",
    description:
      "Tap into our talent pool of creative individuals to generate marketing materials and multi-media experiences.",
  },
];
