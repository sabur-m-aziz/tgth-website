import classNames from "classnames";

interface Props {
  alignment?: "center" | "left" | "right";
  subTitle?: string;
  title?: string;
  subTitleUppercase?: boolean;
}
const SectionTitle = ({
  title,
  subTitle,
  alignment = "center",
  subTitleUppercase = true,
}: Readonly<Props>) => {
  return (
    <div
      className={`text-center sm:text-${alignment} ${
        alignment === "center"
          ? "mx-auto"
          : alignment === "right"
          ? "ms-auto"
          : ""
      } max-w-[328px] lg:max-w-[820px]`}
    >
      {subTitle && (
        <p
          className={classNames(
            "font-barlow font-semibold text-xl leading-5",
            {
              uppercase: subTitleUppercase,
            }
          )}
        >
          {subTitle}
        </p>
      )}
      {title && (
        <h3 className="leading-9 lg:leading-11 mt-3 lg:mt-4">
          {title.split("<br/>").map((line, index) => (
            <span key={index}>
              {line}
              {index !== title.split("<br/>").length - 1 && <br />}
            </span>
          ))}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
