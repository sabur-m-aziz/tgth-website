import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

const Logo: FC<{ className: string }> = ({ className }) => (
  <div className={className}>
    <Image
      src="/logo-footer.png"
      className="rounded-none w-14 lg:w-28"
      removeWrapper
    />
    <div className="flex space-x-2 mt-4 lg:mt-7">
      <Link
        href="https://www.linkedin.com/company/teamglobaltalenthub/"
        target="_blank"
      >
        <span className="border rounded-full flex items-center justify-center w-9 h-9 hover:bg-white hover:text-textSecondary transition-all duration-300 ease-in-out">
          <i className="fa-brands fa-linkedin-in fa-fw text-lg"></i>
        </span>
      </Link>
      <Link
        href="https://www.facebook.com/share/kG1zDMaN9aQZdTnn/?mibextid=LQQJ4d"
        target="_blank"
      >
        <span className="border rounded-full flex items-center justify-center w-9 h-9 hover:bg-white hover:text-textSecondary transition-all duration-300 ease-in-out">
          <i className="fa-brands fa-facebook-f fa-fw text-lg"></i>
        </span>
        {/* <Image
          src="/icons/facebook.svg"
          className="rounded-none w-4.5 lg:w-5"
          removeWrapper
        /> */}
      </Link>
      <Link
        href="https://www.instagram.com/teamglobaltalenthub/"
        target="_blank"
      >
        <span className="border rounded-full flex items-center justify-center w-9 h-9 hover:bg-white hover:text-textSecondary transition-all duration-300 ease-in-out">
          <i className="fa-brands fa-instagram fa-fw text-lg"></i>
        </span>{" "}
        {/* <Image
          src="/icons/instagram.svg"
          className="rounded-none w-4.5 lg:w-5"
          removeWrapper
        /> */}
      </Link>
    </div>
  </div>
);

export default Logo;
