"use client";

import { Image } from "@nextui-org/react";
import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  "/images/about/who-are-we-1.webp",
  "/images/about/who-are-we-2.webp",
  "/images/about/who-are-we-3.webp",
  "/images/about/who-are-we-4.webp",
];

const ImageSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="mt-6 sm:hidden">
      <Slider {...settings}>
        {items.map((item) => (
          <div className="px-2" key={item}>
            <Image
              src={item}
              className="rounded-lg h-[224px] min-w-full object-cover"
              removeWrapper
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
