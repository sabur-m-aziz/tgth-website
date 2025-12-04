import { FC } from "react";
import InnerTitle from "./InnerTitle";
import Link from "next/link";

const GetInTouch: FC = () => (
  <div>
    <InnerTitle title="Get in Touch" />
    <Link
      className="text-base md:text-lg font-medium text-[#CACACA] font-clearSans block"
      href="mailto:info@tgth.com.au"
    >
      info@tgth.com.au
    </Link>
    <Link
      className="text-base md:text-lg font-medium text-[#CACACA] font-clearSans block mt-2.5"
      href="tel:+61 8 6326 2000"
    >
      +61 8 6326 2000
    </Link>
    <p className="text-base md:text-lg font-medium text-[#CACACA] font-clearSans block mt-2.5">
      {/* 17 Hazelhurst St, Kewdale WA 6105, Australia */}
      PO Box 70, Shop 2/53 Belmont Avenue, Belmont, Western Australia
    </p>
    {/* <p className="text-base md:text-lg font-medium text-[#CACACA] font-clearSans block">
      Twenty-Four Seven McKinley, 24 7th Ave, Taguig, Metro Manila, Philippines
    </p> */}
  </div>
);

export default GetInTouch;
