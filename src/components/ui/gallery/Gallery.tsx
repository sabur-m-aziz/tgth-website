import { FC } from "react";
import { Image } from "@nextui-org/react";
import { SectionTitle } from "@/components";

const imageClassName =
  "rounded-lg min-w-full w-full h-full object-cover transform transition-transform duration-300 hover:scale-105";

const Gallery: FC = () => (
  <section className="py-12 lg:py-24.1">
    <div className="container">
      <SectionTitle title="A Glimpse Into Our World" subTitle="Our Gallery" />
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-5 mt-6 lg:mt-9">
        <div className="col-span-3">
          <Image
            src="/images/about/gallery-1.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="lg:hidden col-span-3">
          <Image
            src="/images/about/gallery-2.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="lg:hidden col-span-3">
          <Image
            src="/images/about/gallery-3.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="hidden lg:block col-span-1">
          <div className="h-full grid grid-cols-1 gap-4 lg:gap-5">
            <div className="col-span-1">
              <Image
                src="/images/about/gallery-2.webp"
                className={imageClassName}
                removeWrapper
                alt="gallery image"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/images/about/gallery-3.webp"
                className={imageClassName}
                removeWrapper
                alt="gallery image"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Image
            src="/images/about/gallery-4.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="col-span-3">
          <Image
            src="/images/about/gallery-5.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="col-span-3">
          <Image
            src="/images/about/gallery-6.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Image
            src="/images/about/gallery-7.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Image
            src="/images/about/gallery-8.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Image
            src="/images/about/gallery-9.webp"
            className={imageClassName}
            removeWrapper
            alt="gallery image"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
