"use client";
import { FC, useRef } from "react";
import { FAQ } from "@/components";
import { Navigation } from ".";
import { faqTabs } from "../components/Navigation";

const Faq: FC = () => {
  // Create refs for each FAQ section
  const sectionRefs = faqTabs.reduce((acc, value) => {
    acc[value.title] = useRef(null);
    return acc;
  }, {} as { [key: string]: React.RefObject<HTMLDivElement> });

  return (
    <>
      <div className="xl:w-[280px] border-b-2 xl:border-b-0 xl:border-r-[.5px] border-[rgba(0, 0, 0, 0.25)] mb-6 xl:mb-0 pb-6 xl:pb-0">
        <Navigation sectionRefs={sectionRefs} />
      </div>
      <div className="xl:ml-16 xl:w-full">
        {faqTabs.map(({ title, datalist }) => (
          <div key={title} ref={sectionRefs[title]}>
            <h4 className="text-xl font-bold font-clearSans lg:text-2.5xl mb-4 lg:mb-6">
              {title}
            </h4>
            <FAQ
              faqItems={datalist}
              background="white"
              hideButton
              hideTitle
              containerClassName="mt-3 md:mt-4 pt-0 pb-0 lg:pt-0 lg:pb-0"
              collapsed
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
