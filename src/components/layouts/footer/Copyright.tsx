import Link from "next/link";
import { FC } from "react";

const Copyright: FC = () => (
  <div className="lg:flex justify-between mt-4 lg:mt-14.5">
    <p className="text-base text-[#CACACA] font-clearSans block">
      Copyright © {new Date().getFullYear()}, All right reserved.
    </p>
    <Link
      className="text-base text-[#CACACA] font-clearSans block mt-4 lg:mt-0"
      href="/terms-and-condition"
    >
      Terms & Conditions
    </Link>
  </div>
);

export default Copyright;
