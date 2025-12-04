import { SectionTitle } from "@/components";
import dynamic from "next/dynamic";
import { FC } from "react";
// import ContactForm from "./ContactForm";
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

const ContactUs: FC = () => {
  return (
    <section id="contact-us">
      <div className="container mx-auto py-12 lg:py-24.1">
        <SectionTitle subTitle="Contact" title="Contact Us" />
        <ContactForm
          containerClass="mt-6 lg:mt-9"
          formClassName="max-w-[872px] mx-auto"
        />
      </div>
    </section>
  );
};

export default ContactUs;
