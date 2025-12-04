import { Button } from "@/components";
import { FC } from "react";
import InnerTitle from "./InnerTitle";
import Link from "next/link";

const LearnMore: FC = () => (
  <div>
    <InnerTitle title="Learn More" />
    {/* mb-4 md:mb-2.5 */}
    <div className="space-y-4 md:space-y-2.5">
      {items.map(({ link, title }) => (
        <Link
          key={title}
          className="text-base md:text-lg font-medium text-[#CACACA] font-clearSans block"
          href={link}
        >
          {title}
        </Link>
      ))}
    </div>
  </div>
);

export default LearnMore;

const items = [
  { title: "About Us", link: "/about" },
  { title: "Our Services", link: "/our-services" },
  { title: "FAQ", link: "faq" },
  { title: "TGTH Blog", link: "https://tgth.com.au/blog" },
];
