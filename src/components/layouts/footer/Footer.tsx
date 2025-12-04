import { FC } from "react";
import FooterTitle from "./FooterTitle";
import Logo from "./Logo";
import GetInTouch from "./GetInTouch";
import LearnMore from "./LearnMore";
import NewsLetter from "./NewsLetter";
import Copyright from "./Copyright";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer className="py-16 lg:py-20.5 bg-textSecondary text-white">
      <div className="container">
        <FooterTitle />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <Logo className="hidden lg:block" />
          <GetInTouch />
          <LearnMore />
          <NewsLetter />
        </div>
        <Logo className="lg:hidden mt-6" />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
