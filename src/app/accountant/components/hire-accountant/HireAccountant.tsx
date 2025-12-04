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
            Why Offshore Your Accounting with TGTH?
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
      "Offshoring your accounting with TGTH can cut costs by up to 70%. Eliminate expenses tied to hiring, infrastructure, payroll tax, and software—while gaining access to skilled professionals familiar with Australian accounting standards.",
  },
  {
    title: "Fluent English Speakers with Strong Professional Experience",
    description:
      "Our Filipino accountants are university graduates, fluent in English, and experienced in Australian accounting platforms and compliance. They deliver clear communication, professional reporting, and dependable financial oversight that mirrors your in-house standards.",
  },
  {
    title: "Seamless Cultural Alignment with Australian Businesses",
    description:
      "The Philippines has a long-standing professional and cultural synergy with Australia. Our accountants are familiar with Aussie work ethics, business practices, and communication norms, allowing smooth collaboration from day one.",
  },
  {
    title: "Greater Financial Accuracy and Operational Efficiency",
    description:
      "TGTH accountants are trained to ensure error-free data, on-time reporting, and real-time financial insights. From BAS preparation to reconciliations and reporting, they help you stay compliant and confident in your financial decisions.",
  },
];
