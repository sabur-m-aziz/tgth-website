// "use client";
import { Button, SectionTitle } from "@/components";
import Image from "next/image";
// import { Image } from "@nextui-org/react";
import { FC } from "react";

const About: FC = () => {
  return (
    <section className="bg-backgroundSecondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="h-full">
          {/* 953 × 615 */}
          <Image
            alt=""
            height={953}
            width={615}
            unoptimized
            src="/images/home/Choose TGTH - best offshore staffing agency in Australia.webp"
            className="rounded-none min-h-full w-full object-cover"
            // removeWrapper
          />
        </div>
        <div className="w-half-container xs:w-half-container-xs sm:w-half-container-sm md:w-half-container-md lg:w-half-container-lg xl:w-half-container-xl mx-auto py-12 lg:my-0">
          <div>
            <SectionTitle
              title="Why choose us?"
              // subTitle="ABOUT US"
              alignment="left"
            />
            {/* lg:mt-9 */}
            <p className="max-w-137 mt-6 text-center sm:text-left mx-auto sm:mx-0">
              <span className="block">
                TGTH is a leading offshore staffing company in Australia,
                specialising in connecting businesses with top-tier global
                talent. As one of the most trusted offshore staffing agencies in
                the region, we deliver comprehensive workforce solutions that
                help companies scale efficiently while reducing operational
                costs.{" "}
              </span>
              <br />
              <span className="block">
                Our expert offshore recruiting team leverages years of
                experience to identify and secure highly skilled professionals
                across various industries. Through our innovative offshore
                employment strategies, we ensure seamless integration of remote
                teams with your existing operations, maintaining productivity
                and quality standards.
              </span>
              <br />
              <span className="block">
                TGTH stands out among offshore staffing companies by providing
                end-to-end offshore staffing solutions, including talent
                acquisition, onboarding, and ongoing support. We understand the
                unique challenges of managing remote teams and offer tailored
                solutions to meet your specific business needs.
              </span>
              <br />
              Partner with TGTH to transform your business operations and gain a
              competitive edge through our proven offshore staffing expertise.
            </p>
            {/* <ul className="mt-4 lg:mt-6">
              {items.map((title) => (
                <li className="flex space-x-3 mt-2 lg:mt-4" key={title}>
                  <div>
                    <Image
                      alt=""
                      width={35}
                      height={25}
                      src="/icons/triangle_element.svg"
                      className="rounded-none min-w-7 lg:min-w-8 mt-1"
                    />
                  </div>
                  <div>
                    <p>{title}</p>
                  </div>
                </li>
              ))}
            </ul> */}
            {/* <Button
              variant="primary"
              size="lg"
              text="Read More"
              containerClass="mx-auto sm:mx-0 mt-6 lg:mt-9"
              link="/about"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const items = [
  "TGTH is a leading offshore staffing company in Australia, specializing in connecting businesses with top-tier global talent. As one of the most trusted offshore staffing agencies in the region, we deliver comprehensive workforce solutions that help companies scale efficiently while reducing operational costs.",
  "TGTH is a leading offshore staffing company in Australia, specializing in connecting businesses with top-tier global talent. As one of the most trusted offshore staffing agencies in the region, we deliver comprehensive workforce solutions that help companies scale efficiently while reducing operational costs.",
  "TGTH is a leading offshore staffing company in Australia, specializing in connecting businesses with top-tier global talent. As one of the most trusted offshore staffing agencies in the region, we deliver comprehensive workforce solutions that help companies scale efficiently while reducing operational costs.",
  // "Reduced costs that can be re-invested into your business",
  // "Customised recruitment which includes your involvement ",
];
