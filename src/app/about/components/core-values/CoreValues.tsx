import { FC } from "react";
import { Image } from "@nextui-org/react";
import { SectionTitle } from "@/components";

// const items = [
//   {
//     id: 1,
//     title: "SYNERGY",
//     description:
//       "We embrace collaboration, respect, and empathy, uniting diverse perspectives to create a positive impact through teamwork, mentorship, and professionalism.",
//     imageUrl: "/images/about/core-values-1.svg",
//   },
//   {
//     id: 2,
//     title: "INNOVATION",
//     description:
//       "We are committed to continuous improvement, with a visionary mindset, providing customer-centric solutions for a sustainable future.",
//     imageUrl: "/images/about/core-values-2.svg",
//   },
//   {
//     id: 3,
//     title: "INTEGRITY",
//     description:
//       "We uphold honesty, transparency, pride in our work, humility in our learning, loyalty to our team and mission, and consistency in all our actions.",
//     imageUrl: "/images/about/core-values-3.svg",
//   },
//   {
//     id: 4,
//     title: "ADAPTABILITY",
//     description:
//       "We are agile and flexible, responding quickly to change, remaining dynamic, forward-thinking, and seize new opportunities for sustained growth and success.",
//     imageUrl: "/images/about/core-values-4.svg",
//   },
// ];

const CoreValues: FC = () => (
  <section className="my-12 lg:my-24.1">
    <div className="container">
      <SectionTitle
        title="Core Values That Shape Our Journey"
        subTitle="Our Core Values"
      />
      <div className="mt-6 lg:mt-9">
        <Image
          src={"/images/about/core-values.svg"}
          className="rounded-none w-[624px] max-w-full mx-auto"
          removeWrapper
        />
      </div>
      {/* <div className="mt-6 lg:mt-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map(({ id, title, description, imageUrl }) => (
          <div
            key={id}
            className="space-y-4 p-4 xl:p-8 border border-[#5A5A5C80] rounded-lg"
          >
            <Image src={imageUrl} className="rounded-none w-14" removeWrapper />
            <h4 className="text-xl lg:text-2xl font-bold">{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default CoreValues;
