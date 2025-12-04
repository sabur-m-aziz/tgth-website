"use client";
import { Button } from "@/components";
import Image from "next/image";
// import { Image } from "@nextui-org/react";
import { FC } from "react";

const LetsTalk: FC = () => {
  const onClickJoinUs = () => {
    const contactFormElement = document.getElementById("contact-form");
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-accordion-shadow -translate-y-[40px] lg:-translate-y-[60px] -mb-[40px] lg:-mb-[60px] bg-white rounded-lg">
          {/* 660 × 545 px */}
          <Image
            alt=""
            width={660}
            height={545}
            src="/images/contact-us/Contact TGTH.webp"
            className="rounded-none w-full min-h-full object-cover rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg"
            // removeWrapper
          />
          <div className="flex items-center">
            <div className="lg:max-w-[445px] mx-auto p-6 lg:p-0">
              <h4 className="text-xl font-bold lg:text-4xl lg:font-bold">
                Let’s Talk
              </h4>
              <p className="text-base font-normal my-3 lg:mb-7 lg:mt-4">
                Ready to take your business to the next level? Get in touch with
                Team Global Talent Hub today. Our experts are here to help you
                find the best offshore talent for your needs.
              </p>
              <Button
                variant="primary"
                size="lg"
                text="Join Us"
                onClick={onClickJoinUs}
                // link="#contact-form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
