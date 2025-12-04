import { FC } from "react";
import { Button } from "@/components";

const ButtonGroup: FC = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-3.5 lg:space-x-4 mt-9">
      <Button variant="primary" size="lg" text="Explore Now" link="/our-services" />
      <Button
        variant="secondary"
        size="lg"
        text="Contact Us"
        link="/contact-us"
      />
    </div>
  );
};

export default ButtonGroup;
