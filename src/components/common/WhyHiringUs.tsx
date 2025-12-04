import Image from "next/image";

type Pops = {
  title: string;
  reasons: {
    title: string;
    description: string;
  }[];
};

const WhyHiringUs = ({ title, reasons }: Pops) => {
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
          <h2 className="text-3xl md:text-4xl font-bold  text-text-secondary mb-10 text-left">
            {title}
          </h2>
          <ul className="mt-6 lg:mt-9  max-w-[630px]">
            {reasons.map(({ description, title }) => (
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
                  <h3 className="font-semibold text-3xl md:text-2.5xl">{title}</h3>
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

export default WhyHiringUs;
