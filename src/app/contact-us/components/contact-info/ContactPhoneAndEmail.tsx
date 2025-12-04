import { ContactForm } from "@/components";
import { Image } from "@nextui-org/react";
import { FC } from "react";

const ContactPhoneAndEmail: FC = () => (
  <div className="lg:pt-12">
    <h4 className="font-barlow font-medium text-[28px] lg:text-4xl">
      Contact Information
    </h4>
    <div className="flex items-center space-x-4 p-6 bg-white shadow-contact-us mt-6 lg:mt-8">
      <Image
        src="/icons/phone.svg"
        className="rounded-none w-8 h-8"
        removeWrapper
      />
      <div>
        <p>
          <span className="block text-sm text-[#5F6178] font-bold font-clearSans mb-2">
            Call
          </span>
          <a
            href="tel:+61 8 6326 2000"
            className="text-[#353544] font-barlow font-medium text-2xl"
          >
            +61 8 6326 2000
          </a>
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4 p-6 bg-white shadow-contact-us mt-4 lg:mt-8">
      <Image
        src="/icons/email.svg"
        className="rounded-none w-8 h-8"
        removeWrapper
      />
      <div>
        <p>
          <span className="block text-sm text-[#5F6178] font-bold font-clearSans mb-2">
            Email
          </span>
          <a
            href="mailto:info@tgth.com.au"
            className="text-[#353544] font-barlow font-medium text-2xl"
          >
            info@tgth.com.au
          </a>
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4 p-6 bg-white shadow-contact-us mt-4 lg:mt-8">
      <Image
        src="/icons/map-location.png"
        className="rounded-none w-8 h-8"
        removeWrapper
      />
      <div>
        <p>
          <span className="block text-sm text-[#5F6178] font-bold font-clearSans mb-2">
            Australian Office
          </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=17+Hazelhurst+St,+Kewdale+WA+6105,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#353544] font-barlow font-medium text-2xl"
          >
            PO Box 70, Shop 2/53 Belmont Avenue, Belmont, Western Australia
            {/* 17 Hazelhurst St, Kewdale WA 6105, Australia */}
          </a>
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4 p-6 bg-white shadow-contact-us mt-4 lg:mt-8">
      <Image
        src="/icons/map-location.png"
        className="rounded-none w-8 h-8"
        removeWrapper
      />
      <div>
        <p>
          <span className="block text-sm text-[#5F6178] font-bold font-clearSans mb-2">
            Offshore Office
          </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Twenty-Four+Seven+McKinley,+24+7th+Ave,+Taguig,+Metro+Manila,+Philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#353544] font-barlow font-medium text-2xl"
          >
            Twenty-Four Seven McKinley, 24 7th Ave, Taguig, Metro Manila,
            Philippines
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ContactPhoneAndEmail;
