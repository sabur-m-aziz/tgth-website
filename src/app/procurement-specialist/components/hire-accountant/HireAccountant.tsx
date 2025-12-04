import { SectionTitle } from "@/components";
import Image from "next/image";

const HireAccountant = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-2 h-full">
          {/* 953 × 734 px */}
          <Image
            alt=""
            width={953}
            height={734}
            src="/images/template/hireimage.svg"
            className="rounded-none w-full min-h-full object-cover"
            // removeWrapper
          />
        </div>
        <div className="order-2 lg:order-1 w-half-container xs:w-half-container-xs sm:w-half-container-sm md:w-half-container-md lg:w-half-container-lg xl:w-half-container-xl mx-auto xl:mr-[inherit] py-12 lg:my-0">
          <h2 className="text-3xl md:text-2.5xl font-bold  text-text-secondary mb-10 text-left">
            Why Offshore Your Procurement with TGTH?
          </h2>
          <ul className="mt-6 lg:mt-9  max-w-[630px]">
            {items.map(({ description, title }) => (
              <li className="flex space-x-3 mt-8" key={title}>
                <div>
                  {/* 32 × 23 px */}
                  <Image
                    alt=""
                    height={23}
                    width={32}
                    src="/icons/triangle_element.svg"
                    className="rounded-none min-w-7 lg:min-w-8 mt-3"
                    // removeWrapper
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
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

export default HireAccountant;

const items = [
  {
    title: "Drive Cost Savings Without Sacrificing Quality",
    description:
      "With TGTH, you save up to 70% on procurement staff costs by outsourcing to highly trained professionals in the Philippines. Eliminate hiring overheads, reduce errors, and benefit from streamlined sourcing and negotiations that protect your margins.",
  },
  {
    title: "Qualified, Detail-Oriented Professionals Fluent in English",
    description:
      "Our Procurement Specialists are university-educated, fluent in English, and experienced in managing supplier pipelines, contract negotiations, and purchasing operations. They deliver professional communication, accurate reporting, and strong attention to detail.",
  },
  {
    title: "Cultural and Operational Fit for Australian Supply Chains",
    description:
      "The Philippines has a strong business and communication alignment with Australia. Our team members understand local vendor dynamics, compliance expectations, and purchasing standards—making the collaboration easy, consistent, and professional.",
  },
  {
    title: "Boost Efficiency Across Your Procurement Workflow",
    description:
      "From raising POs and tracking delivery timelines to maintaining accurate supplier databases and managing reorder points, our Procurement Specialists enhance your team’s productivity and help reduce procurement cycle times.",
  },
];
