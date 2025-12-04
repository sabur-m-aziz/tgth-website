import { FC } from "react";
import Instructions from "./Instructions";
import Description from "./Description";
import ImageGallery from "./ImageGallery";
import ImageSlider from "./ImageSlider";
import { FeatureCard } from "@/components";

const WhoWeAre: FC = () => (
  <section className="my-12 lg:my-24.1">
    <div className="container sm:flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 lg:gap-14">
      <div>
        <Description />
        <Instructions />
      </div>
      <ImageGallery />
      <ImageSlider />
    </div>
    <div className="container grid col-span-1 lg:grid-cols-2 gap-4 lg:gap-9 mt-11 lg:mt-16">
      <FeatureCard
        title="Our Mission"
        description="Our Mission is to fuel business growth with customised offshore talent solutions, providing tailored staffing through our global network and dedicated professionals."
      />
      <FeatureCard
        title="Our Vision"
        description="Our Vision is to lead in offshore talent solutions, empowering businesses globally to achieve sustainable growth through innovative, tailored staffing that drives long-term success."
      />
    </div>
  </section>
);

export default WhoWeAre;
