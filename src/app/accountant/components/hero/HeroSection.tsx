"use client";
import Title from "./Title";
import Image from "next/image";
import { Button } from "@/components";

const HeroSection = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black  bg-opacity-45 z-10"></div>
        {/* Content */}
        <div className="absolute w-full h-full inset-0 z-20 md:px-24 px-2 flex items-center mt-0 sm:mt-20 md:mt-0">
          <div className="container mx-auto h-full">
            <div className="flex items-center h-full">
              <div>
                <Title />
                <div className="flex justify-center md:justify-start mt-6">
                  <Button
                    variant="primary"
                    size="md"
                    text="Let’s Discuss"
                    onClick={() => {
                      const section = document.getElementById("contact");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/template/accountant.jpg"
          alt="Hero Image"
          width={600}
          height={600}
          priority
          className="object-cover w-full h-[500px] min-h-[80vh]"
          unoptimized
        />

        {/* <Image
          src="/images/template/Customer-Service-Representative.jpg"
          width={600}
          height={600}
          priority
          className="rounded-none w-full h-auto sm:hidden min-h-[80vh]"
          alt="hero image"
        />
        <Image
          src="/images/template/Customer-Service-Representative.jpg"
          width={2000}
          height={632}
          className="rounded-none w-full h-auto hidden md:block object-cover "
          priority
          alt="hero image"
        />
        <Image
          src="/images/template/Customer-Service-Representative.jpg"
          width={1500}
          height={632}
          className="rounded-none w-full h-auto hidden sm:block md:hidden object-cover"
          priority
          alt="hero image"
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;
