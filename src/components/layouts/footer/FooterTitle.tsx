import { Button } from "@/components";
import { FC } from "react";

const FooterTitle: FC = () => (
  <>
    <div className="sm:flex justify-between">
      <h3 className="text-2xl lg:text-4xl font-bold tracking-tightest md:tracking-tighter text-white mb-6 sm:mb-0 font-barlow">
        Harness Global Talent to
        <br /> Elevate Your Business
      </h3>
      <div className="flex space-x-3 lg:space-x-4">
        {/* <Button variant="bordered-white" size="lg" text="Explore Now" /> */}
        <Button
          variant="primary"
          size="lg"
          text="Contact Us"
          link="/contact-us"
        />
      </div>
    </div>
    <div className="bg-[#A4AEC633] h-[1px] my-6 md:my-14.5"></div>
  </>
);

export default FooterTitle;
