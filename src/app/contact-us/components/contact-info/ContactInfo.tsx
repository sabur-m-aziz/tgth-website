import { ContactForm } from "@/components";
import { FC } from "react";
import ContactPhoneAndEmail from "./ContactPhoneAndEmail";

const ContactInfo: FC = () => {
  return (
    <section className="py-12 lg:py-24.1" id="contact-form">
      <div className="container grid grid-cols-6 gap-6 lg:gap-9">
        <div className="col-span-6 lg:col-span-2">
          <ContactPhoneAndEmail />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <div className="bg-backgroundSecondary p-6 lg:p-12">
            <h4 className="font-barlow font-medium text-[28px] lg:text-4xl">
              Send Email
            </h4>
            <ContactForm containerClass="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
