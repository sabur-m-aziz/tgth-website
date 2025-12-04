import { FC } from "react";

export type AvatarVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "warning"
  | "info";

const colorMap: Record<AvatarVariant, string> = {
  primary: "#E2626B",
  secondary: "#45C4A0",
  accent: "#747ED1",
  warning: "#F78B77",
  info: "#D16B86",
};

const Avatar: FC<{ text: string; variant: AvatarVariant }> = ({
  text,
  variant,
}) => {
  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center `}
      style={{ backgroundColor: colorMap[variant] }}
    >
      <span className="text-xl text-white font-bold font-barlow uppercase">
        {text}
      </span>
    </div>
  );
};

export default Avatar;
