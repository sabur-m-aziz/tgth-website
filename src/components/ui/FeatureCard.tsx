import { Image } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
}
const FeatureCard: FC<Props> = ({
  title,
  description,
  imageUrl = "/icons/round-element.svg",
}) => (
  <div className="bg-backgroundSecondary flex space-x-4 lg:space-x-6 py-5 lg:py-8 px-4 lg:px-6 rounded-lg">
    <div>
      <Image src={imageUrl} alt={title} className="min-w-12 lg:min-w-20" />
    </div>
    <div>
      <h4 className="mb-2 lg:mb-3">{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default FeatureCard;
