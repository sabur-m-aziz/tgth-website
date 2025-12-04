"use client";
import classNames from "classnames";
import { Button as NextUIButton } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

type Variant =
  | "primary"
  | "secondary"
  | "bordered-white"
  | "bordered-secondary";

type Size = "xs" | "sm" | "md" | "lg";

interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  text: string;
  variant: Variant;
  size: Size;
  onClick?: () => void;
  containerClass?: string;
  link?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  size,
  onClick,
  loading,
  disabled,
  containerClass,
  link,
  type = "button",
}) => {
  const { pending } = useFormStatus();
  const router = useRouter();
  const isDisabled = disabled || loading;

  const handleClick = () => {
    if (link) {
      router.push(link);
    } else if (!isDisabled && typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <NextUIButton
      isLoading={pending}
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      className={classNames(
        "flex justify-center items-center font-barlow font-bold lg:font-semibold",
        {
          // SIZE
          "text-base lg:text-lg rounded-lg h-[48px] lg:h-[56px] px-11.5 lg:px-7.5":
            size === "lg",
          "text-lg font-bold rounded-lg h-[48px] px-7.5": size === "md",
          // BACKGROUND
          "bg-primary text-white": variant === "primary",
          "bg-accent text-white": variant === "secondary",
          "bg-transparent text-secondary border-[2px] border-secondary":
            variant === "bordered-secondary",
          "bg-transparent text-white border border-white":
            variant === "bordered-white",
          // OTHERS
          "cursor-not-allowed": isDisabled,
        },
        containerClass
      )}
    >
      {text}
    </NextUIButton>
  );
};

export default Button;
