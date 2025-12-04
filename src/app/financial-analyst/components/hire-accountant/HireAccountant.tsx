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
            Why Offshore Your Financial Analysis with TGTH?
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
    title: "Cut Finance Costs While Gaining Strategic Expertise",
    description:
      "Hiring in-house analysts is expensive. With TGTH, you save up to 70% while gaining access to finance professionals trained in Australian reporting standards who deliver timely, accurate, and strategic analysis at scale.",
  },
  {
    title: "Qualified, English-Speaking Analysts with Global Experience",
    description:
      "Our Financial Analysts are university graduates in finance, accounting, or economics. They are fluent in English and well-versed in tools such as Excel, Power BI, and financial ERPs, ensuring professional communication and sharp financial thinking.",
  },
  {
    title: "Seamless Integration with Australian Business Culture and Tools",
    description:
      "The Philippines shares a strong cultural and operational alignment with Australia. Our analysts understand local financial expectations, timelines, and compliance standards, delivering reports and insights that feel in-house—without the local cost.",
  },
  {
    title: "Improve Accuracy, Agility, and Strategic Planning",
    description:
      "Our analysts don’t just crunch numbers—they help you uncover trends, evaluate risks, and model growth scenarios that support your business objectives. With TGTH, you can forecast with confidence and drive smarter financial strategies.",
  },
];
