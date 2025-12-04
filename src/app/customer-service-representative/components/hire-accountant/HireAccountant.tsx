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
            Why Offshore Your Customer Service with TGTH?
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
    title: "Significant Cost Savings Without Sacrificing Quality",
    description:
      "Offshoring your customer service with TGTH can reduce labor and operational expenses by up to 70%. You eliminate costs related to recruitment, office infrastructure, equipment, and employee benefits, while gaining access to highly skilled professionals who deliver exceptional service.",
  },
  {
    title: "Fluent English Speakers with Strong Professional Experience",
    description:
      "Our customer service specialists in the Philippines are fluent in English, university-educated, and have experience working in a variety of business support roles. You can expect clear, effective communication and service that mirrors the quality of in-house teams.",
  },
  {
    title: "Seamless Cultural Alignment with Australian Businesses",
    description:
      "The Philippines has a long-standing cultural and business connection with Australia. Our team members are familiar with Australian communication styles, values, and expectations, making interactions feel natural and aligned with your brand voice.",
  },
  {
    title: "Greater Efficiency and 24/7 Service Coverage",
    description:
      "With TGTH, you can offer round-the-clock customer support, quicker response times, and consistently meet service-level targets. Our teams integrate effortlessly with your tools and workflows, helping you enhance customer satisfaction and operational efficiency.",
  },
];
