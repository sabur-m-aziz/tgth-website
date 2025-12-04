import { FC } from "react";
import Title from "./Title";
import ButtonGroup from "./ButtonGroup";
import Image from "next/image";

const HeroSection: FC = () => {
  return (
    <section className="">
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="container mx-auto h-full">
            <div className="md:flex items-center h-full mt-20.2 sm:mt-20.1 md:mt-0">
              <div>
                <Title />
                <ButtonGroup />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/home/hero-mobile-1.webp"
          width={1000}
          height={632}
          priority
          className="rounded-none w-full h-auto sm:hidden"
          loading="lazy"
          alt="hero image"
        />
        <Image
          src="/images/home/hero-web.webp"
          width={2000}
          height={632}
          className="rounded-none w-full h-auto hidden md:block object-cover"
          loading="lazy"
          // priority
          alt="hero image"
        />
        <Image
          src="/images/home/hero-tab.png"
          width={1500}
          height={632}
          className="rounded-none w-full h-auto hidden sm:block md:hidden object-cover"
          loading="lazy"
          priority
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
