import { Image } from "@nextui-org/react";
import { FC } from "react";

const DirectorsTalk: FC = () => (
  <section
    className="py-12 lg:py-24.1 bg-backgroundSecondary relative overflow-hidden"
    id="director"
  >
    <Image
      src="/images/earth.svg"
      className="rounded-lg absolute w-[328px] lg:w-[30.4%] bottom-[-8.5%] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:bottom-[-5.8%] sm:left-[-18.5%] lg:bottom-[-17%] lg:left-[-5.3%]"
      removeWrapper
    />
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
      <div className="lg:order-2">
        <Image
          src="/images/about/Angela Florido - Director of TGTH.webp"
          className="rounded-lg max-w-full sm:max-w-[432px] xl:max-w-full xl:w-[535px] mx-auto xl:mx-0 xl:ml-auto"
          removeWrapper
        />
      </div>
      <div className="flex items-center lg:order-1">
        <div className="text-center 2xl:min-w-[672px]">
          <Image
            src="/icons/reverse_quotation.svg"
            className="rounded-lg w-7 xl:w-8 mx-auto mb-6 lg:mb-8"
            removeWrapper
          />
          <p>
            With over 25 years of experience in human resources and business
            operations, I understand the vital role that exceptional client
            service and high-performing individuals play in driving
            organisational success. As the Director at Team Global Talent Hub, I
            oversee all operations to ensure your offshore team runs seamlessly
            and integrates smoothly with your onshore business.
          </p>
          <br />
          <p>
            I firmly believe that diverse teams bring unique strengths and
            perspectives to the forefront, enhancing creativity and innovation.
            People come to work each day because of the relationships they
            build, and at Team Global, we prioritise nurturing these connections
            to provide a premium service to our clients.
          </p>
          <br />
          <p>
            Our dedicated account managers are responsive and closely aligned
            with your business operations, making the decision to offshore an
            easy and efficient process. This allows you to focus on operational
            growth, explore new market opportunities, and invest in other points
            of differentiation that provide the leading edge in your industry.
            By partnering with us, you can drive your business forward in the
            operations that are important onshore. 
          </p>
          <h4 className="lg:text-xl mt-6 lg:mt-8">Angela Florido</h4>
          <p className="lg:text-base mt-1">DIRECTOR</p>
        </div>
      </div>
    </div>
  </section>
);

export default DirectorsTalk;
