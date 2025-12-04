import { FC } from "react";

const InnerTitle: FC<{ title: string }> = ({ title }) => (
  <h4 className="text-xl font-bold md:font-medium font-barlow tracking-tighter text-white mb-4">
    {title}
  </h4>
);

export default InnerTitle;
