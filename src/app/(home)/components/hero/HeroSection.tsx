import { FC } from "react";
import Title from "./Title";
import ButtonGroup from "./ButtonGroup";
import Image from "next/image";

const HeroSection: FC = () => {
  return (
    <section className="">
      <div className="relative">
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="absolute top-0 w-full h-full">
          <div className="container mx-auto h-full">
            <div className="flex items-center h-full">
              <div>
                <Title />
                <ButtonGroup />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/home/TGTH-the-offshore-staffing-company-in-Australia-web.webp"
          alt="Hero Image"
          width={600}
          height={600}
          priority
          className="object-cover w-full h-[500px] min-h-[80vh]"
          unoptimized
        />
        {/* <picture className="">
          <source
            media="(min-width: 768px)"
            srcSet="/images/home/TGTH-the-offshore-staffing-company-in-Australia-web.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 640px)"
            srcSet="/images/home/hero-tab.png"
            type="image/png"
          />
          <Image
            src="/images/home/hero-mobile-1.webp"
            alt="Hero Image"
            width={600}
            height={600}
            priority
            sizes="(max-width: 639px) 100vw, (min-width: 640px) 100vw, (min-width: 768px) 100vw"
            className="object-cover h-[600px] md:h-[724px] w-full"
            quality={75}
          />
        </picture> */}
      </div>
    </section>
  );
};

export default HeroSection;
