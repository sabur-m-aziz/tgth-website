import { Image } from "@nextui-org/react";
import { FC } from "react";

const ImageGallery: FC = () => (
  <div className="hidden sm:inline-block space-y-5 mx-auto">
    <div className="grid grid-cols-2 gap-5">
      <Image
        src="/images/about/who-are-we-1.webp"
        className="rounded-none mt-auto ml-auto transform transition-transform duration-300 hover:scale-105"
        removeWrapper
      />
      <Image
        src="/images/about/who-are-we-2.webp"
        className="rounded-none transform transition-transform duration-300 hover:scale-105"
        removeWrapper
      />
    </div>
    <div className="grid grid-cols-2 gap-5">
      <Image
        src="/images/about/who-are-we-3.webp"
        className="rounded-none transform transition-transform duration-300 hover:scale-105"
        removeWrapper
      />
      <Image
        src="/images/about/who-are-we-4.webp"
        className="rounded-none transform transition-transform duration-300 hover:scale-105"
        removeWrapper
      />
    </div>
  </div>
);

export default ImageGallery;
