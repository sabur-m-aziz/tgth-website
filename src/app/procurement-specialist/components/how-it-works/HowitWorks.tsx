"use client";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We start by understanding your procurement needs and objectives. Our team collaborates with you to define the scope of work, including supplier selection, sourcing strategies, and budget considerations.",
    },
    {
      number: "02",
      title: "Tailored Recruitment",
      description:
        "Using our extensive network, we identify and screen qualified procurement specialists who meet your specific requirements. You’ll receive a shortlist of candidates, complete with their relevant experience and expertise.",
    },
    {
      number: "03",
      title: "Seamless Integration",
      description:
        "Once you select your ideal procurement specialist, we facilitate a smooth onboarding process. Our support ensures they are fully equipped to manage your procurement operations effectively and drive cost savings for your business.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white overflow-hidden">
      <div className="relative z-10 px-4 md:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-secondary mb-10">
          How It works
        </h2>

        <div className="relative flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 md:gap-16 max-w-7xl mx-auto">
          {/* Dotted line (desktop only) */}
          <div className="hidden md:block absolute top-[30px] left-1/2 w-full max-w-[850px] transform -translate-x-1/2 border-t-2 border-dashed border-gray-300 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-sm z-10"
            >
              {/* Circular Step Number */}
              <div className="bg-secondary text-white w-14 h-14 flex items-center justify-center rounded-full text-lg font-bold mb-4 z-10">
                {step.number}
              </div>

              <h3 className="text-lg md:text-2xl font-bold mb-2">
                {step.title}
              </h3>

              <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
