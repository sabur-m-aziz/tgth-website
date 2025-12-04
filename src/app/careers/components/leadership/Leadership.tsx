// "use client";
import { Button, SectionTitle } from "@/components";
import { Image } from "@nextui-org/react";
import { FC } from "react";

const Leadership: FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-12 lg:mt-24.1">
        <SectionTitle
          subTitle="Unlock Your Future"
          title="Grow, Lead, and Thrive with Us"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6 lg:mt-9">
          {serviceItems.map(({ id, img, title, description }) => (
            <div
              className="space-y-3 lg:space-y-6 p-6 lg:p-10 bg-backgroundSecondary rounded-lg lg:rounded-xl"
              key={id}
            >
              <Image
                src={img}
                alt={title}
                className="rounded-none min-w-12 min-h-12 lg:min-w-14.5 lg:min-h-14.5 w-12 h-12 lg:w-14.5 lg:h-14.5"
              />
              <div>
                <h4 className="mb-2 lg:mb-4">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

const serviceItems = [
  // {
  //   id: 1,
  //   img: "/images/career/lead-1.svg",
  //   title: "Career Growth",
  //   description:
  //     "Unlock your potential with personalised development plans, mentorship, and leadership opportunities. We invest in your future.",
  // },
  // {
  //   id: 2,
  //   img: "/images/career/lead-2.svg",
  //   title: "Work From Anywhere",
  //   description:
  //     "Enjoy the freedom to work remotely from any location that suits your lifestyle while maintaining a healthy work-life balance.",
  // },
  {
    id: 3,
    img: "/images/career/lead-3.svg",
    title: "Events Calendar",
    description:
      "Join in on all the fun with our TGTH yearly employee events calendar.",
  },
  {
    id: 4,
    img: "/images/career/lead-4.svg",
    title: "Wellness Programs",
    description:
      "Benefit from our wellness initiatives, including mental health support, fitness incentives, and healthy workspaces.",
  },
  // {
  //   id: 5,
  //   img: "/images/career/lead-5.svg",
  //   title: "Flexible Hours",
  //   description:
  //     "Adapt your working hours to fit your personal life. We offer flexible schedules to ensure you maintain control over your time.",
  // },
  {
    id: 6,
    img: "/images/career/lead-6.svg",
    title: "Inclusive Culture",
    description:
      "Be part of a diverse and supportive environment where your ideas and individuality are valued. We foster collaboration and respect.",
  },
];
