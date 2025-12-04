import { FeatureCard } from "@/components";

const CardGroup = () => (
  <div className="grid col-span-1 lg:grid-cols-2 gap-4 lg:gap-9 mt-11 lg:mt-16">
    <FeatureCard
      title="Efficiency & Expertise"
      description="Tailored recruitment solutions ensure you receive top-tier talent and seamless integration, with on-site managers take care of your concerns and maximise the impact."
    />
    <FeatureCard
      title="Effortless Expansion"
      description="Expand effortlessly with Team Global Talent Hub—where we handle recruitment, payrolls, and provide access to high-quality facilities, ensuring your operations are streamlined and highly efficient."
    />
  </div>
);

export default CardGroup;
