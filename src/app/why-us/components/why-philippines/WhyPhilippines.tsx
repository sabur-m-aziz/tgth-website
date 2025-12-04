import { FC } from "react";
import Description from "./Description";
import ImageGallery from "./ImageGallery";

const WhyPhilippines: FC = () => (
  <section>
    <div className="container mb-12 lg:mb-24.1 mt-6 lg:mt-0 flex flex-col-reverse sm:grid lg:grid-cols-2 gap-6 lg:gap-14">
      <ImageGallery />
      <Description />
    </div>
  </section>
);

export default WhyPhilippines;
