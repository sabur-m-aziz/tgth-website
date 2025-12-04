import { Image } from "@nextui-org/react";
import { FC } from "react";

const Instructions: FC = () => (
  <ul className="mt-6 lg:mt-9 space-y-4 lg:space-y-6">
    {items.map((description) => (
      <li className="flex space-x-3" key={description}>
        <div>
          <Image
            src="/icons/triangle_element.svg"
            className="rounded-none min-w-7 lg:min-w-8 mt-1"
            removeWrapper
          />
        </div>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);

export default Instructions;

const items = [
  "We have extensive knowledge of Australian company requirements and Philippine work culture.",
  "We encourage diversity and inclusiveness in the workplace.",
  "We employ only candidates with high work ethic and commitment to servicing your business.",
  "We provide a seamless extension of your Australian workforce.",
];
