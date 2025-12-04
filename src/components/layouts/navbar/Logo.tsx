import { FC } from "react";
import Link from "next/link";
import { NavbarBrand, NavbarContent } from "@nextui-org/react";
import Image from "next/image";

export const Logo: FC = () => (
  <NavbarContent>
    <NavbarBrand>
      <Link href="/">
        <Image
          alt="logo"
          width={170}
          height={170}
          src="/logo.webp"
          className="inline-block h-auto w-[103px] md:w-[112px] lg:w-[170px] -translate-x-[8px]"
        />
      </Link>
    </NavbarBrand>
  </NavbarContent>
);
