import { Image } from "@nextui-org/react";
import { FC } from "react";

const DescriptionContent: FC = () => (
  <div className="sm:flex space-x-3 items-center justify-center">
    {items.map(({ text, imageUrl }, index) => (
      <>
        <div className="flex items-center justify-center sm:justify-start space-x-1">
          <Image src={imageUrl} className="rounded-none w-5 h-5" />
          <p>{text}</p>
        </div>
        {items.length !== index + 1 && (
          <div className="hidden sm:block rounded-full w-1 h-1 bg-textPrimary"></div>
        )}
      </>
    ))}
  </div>
);

export default DescriptionContent;

const items = [
  { text: "Full time", imageUrl: "/icons/clock.svg" },
  { text: "Manchester, UK", imageUrl: "/icons/clock.svg" },
  { text: "Design Department", imageUrl: "/icons/house.svg" },
];
