import { FC, useState } from "react";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { ArrowDownFilled } from "./DesktopMenu";

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
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const MobileMenu: FC<Props> = ({ menuItems, setIsMenuOpen }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <NavbarMenu className="">
      {menuItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            className="flex flex-col"
          >
            <div className="flex items-center">
              <Link
                className="w-full font-barlow text-textSecondary text-xl font-medium"
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.children && (
                <ArrowDownFilled
                  className={`inline-block mt-[4px] transition-transform duration-300 ease-out cursor-pointer ${
                    !isOpen ? "rotate-180" : ""
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                />
              )}
            </div>
            {item.children && (
              <div
                className={`w-full z-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                  isOpen ? " max-h-0 opacity-0" : "max-h-full opacity-100"
                }`}
                style={{
                  transitionProperty: "max-height, opacity",
                }}
              >
                {item.children.map((child, i) => (
                  <>
                    {child.children && (
                      <div
                        className={`w-full z-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                          isOpen
                            ? " max-h-0 opacity-0"
                            : "max-h-full opacity-100"
                        }`}
                        style={{
                          transitionProperty: "max-height, opacity",
                        }}
                      >
                        <ul className="w-full">
                          {child.children.map((child, i) => (
                            <li key={i}>
                              <Link
                                href={child.link}
                                className="block px-4 py-2 font-barlow text-textSecondary hover:text-primary text-xl font-normal rounded-lg cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ))}
              </div>
            )}
          </NavbarMenuItem>
        );
      })}
    </NavbarMenu>
  );
};
