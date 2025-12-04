import { SectionTitle } from "@/components";
import { Button, Image } from "@nextui-org/react";
import { FC } from "react";

const ExtendingTeam: FC = () => {
  return (
    <section className="bg-backgroundSecondary">
      <div className="container mx-auto py-12 lg:py-24.1">
        <SectionTitle subTitle="Our process" title="Extending Your Team" />
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-9 mt-6 lg:mt-16.5">
          <div className="hidden lg:block absolute w-[70%] left-[15%] top-7.5 bg-[#EDEDED] h-[2px]"></div>
          <div className="hidden lg:block absolute w-[70%] left-[15%] top-[71%] bg-[#EDEDED] h-[2px]"></div>
          {serviceItems.map(({ id, img, title, description }) => (
            <div className="text-center" key={id}>
              <Image
                src={img}
                alt={title}
                className="w-12 lg:w-13.5 rounded-none bg-white mx-auto"
                removeWrapper
              />

              <h4 className="mb-2 mt-4 lg:mb-3 lg:mt-5">{title}</h4>
              {/* <p>{description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendingTeam;

const serviceItems = [
  {
    id: 1,
    img: "/images/home/extending-team-1.svg",
    title: "Contact TGTH to discuss your requirements",
    description:
      "Send a request via recruitment requisition to TGTH. We will contact you to discuss the full scope of the role...",
  },
  {
    id: 2,
    img: "/images/home/extending-team-2.svg",
    title: "TGTH to Commence candidate search",
    description:
      "We will present the top candidates' resumes to your management team. Top candidates will be interviewed by ...",
  },
  {
    id: 3,
    img: "/images/home/extending-team-3.svg",
    title: "Candidate screening",
    description:
      "Your management will pick the candidate they want to employ. Team Global Talent Hub will send the offer and discuss...",
  },
  {
    id: 4,
    img: "/images/home/extending-team-4.svg",
    title: "Pick & offer",
    description:
      "TGTH will take care of your chosen candidates' onboarding process; including the contracts, payroll, ...",
  },
  {
    id: 5,
    img: "/images/home/extending-team-5.svg",
    title: "Diligence completed",
    description:
      "TGTH will take care of your chosen candidates' onboarding process; including the contracts, payroll, ...",
  },
  {
    id: 6,
    img: "/images/home/extending-team-6.svg",
    title: "Employee onboarding",
    description:
      "TGTH will take care of your chosen candidates' onboarding process; including the contracts, payroll, ...",
  },
];
