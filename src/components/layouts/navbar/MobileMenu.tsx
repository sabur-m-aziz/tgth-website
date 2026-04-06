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
  const [openChildIndex, setOpenChildIndex] = useState<Record<number, number | null>>({});

  const toggleParent = (index: number) => {
    setOpenIndex((current) => {
      const isOpening = current !== index;
      if (isOpening) {
        setOpenChildIndex((prev) => ({ ...prev, [index]: null }));
      }
      return isOpening ? index : null;
    });
  };

  const toggleChild = (parentIndex: number, childIndex: number) => {
    setOpenChildIndex((current) => ({
      ...current,
      [parentIndex]: current[parentIndex] === childIndex ? null : childIndex,
    }));
  };

  return (
    <NavbarMenu className="">
      {menuItems.map((item, index) => {
        const isOpen = openIndex === index;
        const activeChildIndex = openChildIndex[index] ?? null;

        return (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            className="flex flex-col"
          >
            <div className="flex items-center">
              {item.children ? (
                <button
                  type="button"
                  className="w-full text-left font-barlow text-textSecondary text-xl font-medium"
                  onClick={() => toggleParent(index)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-menu-panel-${index}`}
                >
                  {item.title}
                </button>
              ) : (
                <Link
                  className="w-full font-barlow text-textSecondary text-xl font-medium"
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
              {item.children && (
                <ArrowDownFilled
                  className={`inline-block mt-[4px] transition-transform duration-300 ease-out cursor-pointer ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleParent(index)}
                />
              )}
            </div>
            {item.children && (
              <div
                id={`mobile-menu-panel-${index}`}
                className={`w-full z-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                  isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity",
                }}
              >
                <div className="pt-2">
                  {item.children.map((group, groupIndex) => {
                    const isChildOpen = activeChildIndex === groupIndex;

                    return (
                      <div key={`${group.title}-${groupIndex}`} className="mb-1">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-4 py-2"
                          onClick={() => toggleChild(index, groupIndex)}
                          aria-expanded={isChildOpen}
                          aria-controls={`mobile-menu-group-${index}-${groupIndex}`}
                        >
                          <span className="font-barlow text-textSecondary text-lg font-semibold">
                            {group.title}
                          </span>
                          <ArrowDownFilled
                            className={`transition-transform duration-300 ease-out ${
                              isChildOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          id={`mobile-menu-group-${index}-${groupIndex}`}
                          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                            isChildOpen
                              ? "max-h-[900px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          style={{ transitionProperty: "max-height, opacity" }}
                        >
                          <ul className="w-full pb-1">
                            {group.children.map((child, childIndex) => (
                              <li key={`${child.title}-${childIndex}`}>
                                <Link
                                  href={child.link}
                                  className="block px-8 py-2 font-barlow text-textSecondary hover:text-primary text-base font-normal rounded-lg cursor-pointer"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </NavbarMenuItem>
        );
      })}
    </NavbarMenu>
  );
};
