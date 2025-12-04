import { FC } from "react";
import { ContactForm } from "@/components";
import ContactTitle from "./ContactTitle";


const CustomerContactUs: FC = () => {
 return (
   <section id="contact-us">
     <div className="container mx-auto py-12 lg:py-24.1">
       <ContactTitle subTitle="Contact" title="Contact Us" titleLevel="h2" />
      
       <ContactForm
         containerClass="mt-6 lg:mt-9"
         formClassName="max-w-[872px] mx-auto"
       />
     </div>
   </section>
 );
};

export default CustomerContactUs;


