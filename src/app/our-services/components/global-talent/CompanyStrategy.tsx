import { Image } from "@nextui-org/react";
import { FC } from "react";

const StrategicGlobal: FC = () => {
  return (
    <div>
      <h3>Strategic Global Leverage</h3>
      <ul className="mt-6 lg:mt-8 space-y-4 lg:space-y-6">
        {items.map(({ description }) => (
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
    </div>
  );
};

export default StrategicGlobal;

const items = [
  {
    description:
      "Access Top Talent: Tap into a diverse pool of highly skilled professionals, bringing specialised expertise and innovation to your business without geographical constraints.",
  },
  {
    description:
      "Streamline Recruitment: Leverage our proven recruitment process and onboard specialised talents to your business.",
  },
  {
    description:
      "No Payroll Hassle: Offshoring with us reduces payroll costs and eliminates the hassle of managing employee compensation, benefits, and taxes for businesses of all sizes.",
  },
  {
    description:
      "Reduce Overheads and Enhance Flexibility: Minimise operational expenses and adapt quickly to changing market conditions by offshoring key functions and scaling your resources as needed.",
  },
];
