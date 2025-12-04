"use client";
import { FC, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setStartCounting(true);
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section className="bg-none sm:bg-counter-map bg-no-repeat bg-position-counter bg-contain py-12 md:py-24">
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-9 sm:gap-2"
        ref={ref}
      >
        {counterItems.map(({ count, decimals, suffix, description }, idx) => (
          <div className="text-center" key={idx}>
            <p className="text-accent font-bold text-5xl">
              {/* CountUp starts only after inView and delay of 1 second */}
              {startCounting && (
                <CountUp
                  end={count}
                  duration={2}
                  suffix={suffix}
                  decimals={decimals}
                />
              )}
            </p>
            <p className="text-textSecondary mt-4 max-w-[175px] mx-auto">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;

const counterItems = [
  {
    count: 20,
    decimals: 0,
    suffix: "",
    description: "Ranked English Proficiency Countries",
  },
  { count: 47, decimals: 0, suffix: "M", description: "Strong Workforce" },
  {
    count: 64,
    decimals: 0,
    suffix: "%",
    description: "Tertiary Educated Workforce",
  },
  {
    count: 1.3,
    decimals: 1,
    suffix: "M",
    description: "BPO Industry Workforce",
  },
];
