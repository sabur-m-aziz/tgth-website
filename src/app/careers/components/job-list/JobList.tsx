import { SectionTitle } from "@/components";
import { FC } from "react";

const JobList: FC = () => {
  return (
    <section className="bg-backgroundSecondary py-12 lg:py-24.1">
      <SectionTitle
        title="Join Our Talented Team"
        subTitle="Available Positions"
      />
      <div className="container mx-auto">
        <iframe
          className="w-full h-[90vh] mt-6 lg:mt-9"
          src="https://ph.jobstreet.com/Team-Global-Talent-Hub-jobs/at-this-company?amp%3Btype=standout"
          frameBorder="0"
        ></iframe>
      </div>
      {/* <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 mt-6 lg:mt-16.1">
        {items.map(
          ({
            id,
            avatarText,
            avatarVariant,
            tagText,
            tagVariant,
            title,
            location,
          }) => (
            <Link href={`#`}>
              <div className="bg-white flex gap-5 p-4 lg:p-6 rounded lg:rounded-lg shadow-accordion-shadow">
                <Avatar
                  text={avatarText}
                  variant={avatarVariant as AvatarVariant}
                />
                <div>
                  <Tag text={tagText} variant={tagVariant as TagVariant} />

                  <h4 className="text-xl font-bold lg:text-xl lg:font-bold mt-2 lg:mt-3 text-textPrimary font-clearSans">
                    {title}
                  </h4>
                  <p className="text-lg">{location}</p>
                </div>
              </div>
            </Link>
          )
        )}
      </div> */}
    </section>
  );
};

export default JobList;

const items = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    tagText: "Full Time",
    tagVariant: "primary",
    avatarText: "sd",
    avatarVariant: "primary",
    location: "San Francisco, US",
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    tagText: "Remote",
    tagVariant: "info",
    avatarText: "ux",
    avatarVariant: "secondary",
    location: "London, UK",
  },
  {
    id: 3,
    title: "Software Engineer",
    tagText: "Full Time",
    tagVariant: "primary",
    avatarText: "sd",
    avatarVariant: "primary",
    location: "Toronto, Canada",
  },
  {
    id: 4,
    title: "Project Coordinator",
    tagText: "Part Time",
    tagVariant: "secondary",
    avatarText: "fd",
    avatarVariant: "accent",
    location: "Sydney, Australia",
  },
  {
    id: 5,
    title: "HR Business Partner",
    tagText: "Full Time",
    tagVariant: "primary",
    avatarText: "md",
    avatarVariant: "warning",
    location: "Berlin, Germany",
  },
  {
    id: 6,
    title: "Data Analyst",
    tagText: "Full Time",
    tagVariant: "primary",
    avatarText: "nd",
    avatarVariant: "info",
    location: "Dublin, Ireland",
  },
  {
    id: 7,
    title: "Project Coordinator",
    tagText: "Part Time",
    tagVariant: "secondary",
    avatarText: "fd",
    avatarVariant: "accent",
    location: "Sydney, Australia",
  },
  {
    id: 8,
    title: "HR Business Partner",
    tagText: "Full Time",
    tagVariant: "primary",
    avatarText: "md",
    avatarVariant: "warning",
    location: "Berlin, Germany",
  },
  {
    id: 9,
    title: "Data Analyst",
    tagText: "Full Time",
    tagVariant: "primary",
    avatarText: "nd",
    avatarVariant: "info",
    location: "Dublin, Ireland",
  },
];
