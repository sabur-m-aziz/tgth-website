import { FC } from "react";

interface ButtonProps {
  title?: string;
  onClick?: () => void; // Optional onClick handler
}

const Button: FC<ButtonProps> = ({ title = "Let's Discuss", onClick }) => {
  return (
    <div className="flex justify-center md:justify-start space-x-3.5 lg:space-x-4 mt-9">
      <button
        className="flex justify-center items-center font-barlow font-bold lg:font-semibold md:text-xl text-base rounded-2xl h-[56px] md:px-10 px-10 bg-accent text-white "
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
