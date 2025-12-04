import { FC } from "react";

export type TagVariant = "primary" | "secondary" | "info";
type ColorScheme = { bg: string; color: string };

const colorMap: Record<TagVariant, ColorScheme> = {
  primary: { bg: "#E0E9FA", color: "#3F78E0" },
  secondary: { bg: "#F0EAF6", color: "#A07CC5" },
  info: { bg: "#E4F1F6", color: "#54A8C7" },
};

const Tag: FC<{ text: string; variant: TagVariant }> = ({ text, variant }) => {
  return (
    <div
      className="py-1 px-2 rounded-lg inline-block"
      style={{ backgroundColor: colorMap[variant].bg }}
    >
      <span
        className="text-xs font-medium capitalize font-barlow"
        style={{ color: colorMap[variant].color }}
      >
        {text}
      </span>
    </div>
  );
};

export default Tag;
