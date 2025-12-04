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
            Why Offshore Your Graphic Design with TGTH?
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
    title: "Cut Creative Costs Without Compromising Quality",
    description:
      "Hiring a full-time designer in-house can be costly. With TGTH, you reduce costs by up to 70% on design-related expenses including salaries, software licenses, and equipment—while gaining access to top-tier creative professionals.",
  },
  {
    title: "Skilled, English-Speaking Designers with Strong Portfolios",
    description:
      "Our designers are university-trained, fluent in English, and experienced in creating assets for Australian and global brands. From marketing collateral to UI/UX design, expect a high standard of creativity, communication, and responsiveness.",
  },
  {
    title: "Strong Cultural Alignment with Australian Brands",
    description:
      "The Philippines shares a design sensibility and work ethic that aligns closely with Australia. Our team understands your target audience, tone, and visual expectations—making the collaboration natural and the results on-point.",
  },
  {
    title: "Faster Turnaround and Flexible Design Support",
    description:
      "TGTH helps you stay ahead of your marketing and brand timelines. With flexible staffing and responsive communication, you can manage content calendars, seasonal campaigns, and branding needs without delays or creative bottlenecks.",
  },
];
