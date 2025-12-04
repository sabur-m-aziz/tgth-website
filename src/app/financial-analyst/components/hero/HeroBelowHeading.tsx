"use client";
import CountUp from "react-countup";

const HeroBelowHeading = () => {
  return (
    <section>
      <div className="bg-[url('/images/service-details.svg')] bg-cover bg-center bg-no-repeat md:h-[450px] py-4">
        <div className="mt-24 px-4">
          <h1 className="text-[#343F52] text-center text-3xl md:text-5xl">
            Till now our 129 Clients have saved 62% of operating <br />
            cost by outsourcing Financial Analyst from Philippines.
          </h1>
        </div>

        <div className="container mx-auto md:max-w-[900px] grid grid-cols-1 sm:grid-cols-3 gap-9 justify-center text-center mt-10">
          {counterItems.map(({ count, decimals, suffix, description }, idx) => (
            <div key={idx}>
              <p className="text-[#0075A7] font-bold text-5xl">
                <CountUp
                  end={count}
                  duration={2}
                  suffix={suffix}
                  decimals={decimals}
                  separator=""
                />
              </p>
              <p className="text-[#5A5A5C] mt-4 max-w-[175px] mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBelowHeading;

// ✅ Updated data
const counterItems = [
  {
    count: 6578,
    decimals: 0,
    suffix: "",
    description: "Completed Projects",
  },
  {
    count: 4788,
    decimals: 0,
    suffix: "",
    description: "Satisfied Customers",
  },
  {
    count: 1911,
    decimals: 0,
    suffix: "",
    description: "Expert Employees",
  },
];
