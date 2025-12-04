// import { Image } from "@nextui-org/react";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  descriptionComponent?: ReactNode;
  imageUrl?: string;
  containerClassName?: string;
  bgEarth?: boolean;
}
const HeroSection: FC<Props> = ({
  title,
  description,
  descriptionComponent,
  imageUrl,
  containerClassName,
  bgEarth,
}) => (
  <section
    className={`bg-backgroundSecondary relative overflow-hidden ${containerClassName}`}
  >
    <div className="container pt-12 pb-6 lg:py-24.1 text-center">
      <h1 className="mb-6 lg:mb-5">{title}</h1>
      {description && (
        <p className="text-base font-normal lg:text-2xl lg:font-normal">
          {description}
        </p>
      )}
      {descriptionComponent && descriptionComponent}
    </div>
    {/* 583 × 583 px */}
    {bgEarth && (
      <Image
        alt=""
        width={583}
        height={583}
        blurDataURL="/images/placeholder-blur.png"
        src="/images/earth.svg"
        className="rounded-lg absolute w-[248px] md:w-[328px] lg:w-[583px] top-[37.5%] sm:top-[23.5%] lg:top-[12.6%] left-1/2 sm:left-[-10.5%] lg:left-[-4.5%] -translate-x-1/2 sm:translate-x-0 z-0"
        // removeWrapper
      />
    )}
    {/* 1905 × 675 px */}
    {imageUrl && (
      <Image
        src={imageUrl}
        className="rounded-none w-full relative z-10"
        alt=""
        width={1905}
        height={675}
        // removeWrapper
        blurDataURL="/images/placeholder-blur.png"
        placeholder="blur"
      />
    )}
  </section>
);

export default HeroSection;
