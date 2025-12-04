import { FC, useState } from "react";
import Link from "next/link";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { i } from "framer-motion/client";

interface MenuGroup {
  title: string;
  children: MenuItem[];
}

interface MenuItem {
  title: string;
  link: string;
  children?: MenuGroup[];
}

interface Props {
  menuItems: MenuItem[];
}

export const DesktopMenu: FC<Props> = ({ menuItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <NavbarContent className="hidden lg:flex gap-10" justify="center">
      {menuItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <NavbarItem
            key={`${item.title}-${index}`}
            className=" flex items-center"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <Link
              className="w-full font-barlow text-textSecondary text-xl font-medium cursor-pointer"
              href={item.link}
            >
              {item.title}
            </Link>

            {item.children && (
              <ArrowDownFilled
                className={`inline-block mt-[4px] transition-all duration-300 ease-out ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            )}

            {item.children && (
              <div
                className={`fixed left-[50%] -translate-x-1/2 top-[92%] mt-2 w-[60%] bg-white shadow-lg px-8 z-50 transition-all duration-300 ease-out ${
                  isOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-5 grid grid-cols-3 gap-2 max-w-[1400px] mx-auto">
                  {item.children.map((category, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <h3 className="font-barlow text-lg font-semibold text-black">
                        {category.title}
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {category.children?.map((child, idx) => (
                          <li key={idx}>
                            <Link
                              href={child.link}
                              className="block text-textSecondary hover:text-primary font-barlow text-base cursor-pointer"
                              onClick={() => setOpenIndex(null)}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </NavbarItem>
        );
      })}
    </NavbarContent>
  );
};

export const ArrowDownFilled = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    role="img"
    aria-label="Arrow down"
    className={`w-6 h-auto ${props.className || ""}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.5c-.2 0-.4-.1-.6-.2l-6.9-5.2a1 1 0 0 1 1.2-1.6L12 13.9l6.3-4.4a1 1 0 0 1 1.2 1.6l-6.9 5.2c-.2.1-.4.2-.6.2z"
      fill="currentColor"
    />
  </svg>
);
