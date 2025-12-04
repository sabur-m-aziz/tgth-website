import classNames from "classnames";
import { FC, useEffect, useState } from "react";

interface NavigationProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

const Navigation: FC<NavigationProps> = ({ sectionRefs }) => {
  const [selected, setSelected] = useState(items[0].title);
  const [isFixed, setIsFixed] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  const handleScroll = (title: string) => {
    setSelected(title);
    const section = sectionRefs[title].current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      if (window.scrollY > 1504) {
        setTopPosition(window.scrollY - 1504);
        setIsFixed(true);
      } else if (window.scrollY >= 500) {
        setTopPosition(0);
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScrollPosition);
    window.addEventListener("resize", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
      window.removeEventListener("resize", handleScrollPosition);
    };
  }, []);
  return (
    <div
      className={classNames(
        "space-y-2 md:space-y-0 xl:space-y-3 md:space-x-4 xl:space-x-0 md:flex xl:block md:overflow-x-auto md:whitespace-nowrap scrollbar-hide",
        {
          "xl:fixed": isFixed,
        }
        // `top-[${topPosition}px]`
      )}
      style={{ top: `${-topPosition || 10}px` }}
    >
      {items.map(({ title }) => (
        <button
          key={title}
          onClick={() => handleScroll(title)}
          className={`text-base lg:text-xl font-barlow block ${
            selected === title ? "font-bold" : "font-normal"
          }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Navigation;

const items = [
  { title: "Services Provided", link: "#" },
  { title: "Terms of Use", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "Payment Terms", link: "#" },
  { title: "Cancellation Policy", link: "#" },
  { title: "Intellectual Property", link: "#" },
  { title: "Limitation of Liability", link: "#" },
  { title: "Governing Law", link: "#" },
];
