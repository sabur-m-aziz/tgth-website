"use client";
import { FC, useRef } from "react";
import { Navigation, TermsItems } from ".";
import { items } from "../components/TermsItems";

const TermsAndCondition: FC = () => {
  // Create refs for each section
  const sectionRefs = items.reduce((acc, value) => {
    acc[value.title] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as { [key: string]: React.RefObject<HTMLDivElement> });

  return (
    <>
      <div className="xl:w-[240px] border-b-2 xl:border-b-0 xl:border-r-[.5px] border-[rgba(0, 0, 0, 0.25)] mb-6 xl:mb-0 pb-6 xl:pb-0">
        {/* <div className="xl:w-[363px] border-b-2 xl:border-r-2 border-[#00000040] mb-6 xl:mb-0 pb-6 xl:pb-0"> */}
        <Navigation sectionRefs={sectionRefs} />
      </div>
      <div className="xl:ml-16 xl:w-full">
        {/* <div className="xl:max-w-[827px] ml-auto"> */}
        <TermsItems sectionRefs={sectionRefs} />
      </div>
    </>
  );
};

export default TermsAndCondition;
