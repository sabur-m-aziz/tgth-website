"use client";
import { useState } from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/components";

const faqs = [
  {
    id: 1,
    question: "What types of design projects can your designers handle?",
    answer:
      "Everything from logos, brochures, social media content, and ads to website graphics, email templates, and presentations.",
  },
  {
    id: 2,
    question: "Will they use our brand guidelines and assets?",
    answer:
      "Absolutely. Our designers are trained to work within your brand standards and collaborate with your team or marketing agency.",
  },
  {
    id: 3,
    question: "Can I hire a designer on a part-time or full-time basis?",
    answer:
      "Yes. We offer flexible options including project-based, part-time, and full-time designer engagements.",
  },
  {
    id: 4,
    question: "Will the designer work during Australian business hours?",
    answer:
      "Yes. We align your designer’s schedule to suit your working hours for smooth collaboration and fast feedback loops.",
  },
  {
    id: 5,
    question: "What design tools do your team use?",
    answer:
      "Our designers are proficient in Adobe Photoshop, Illustrator, InDesign, XD, Figma, Canva, and more.",
  },
  {
    id: 6,
    question: "Can you scale design support for big campaigns or rebrands?",
    answer:
      "Yes. We can increase design capacity quickly for product launches, rebrands, seasonal promotions, or multi-channel campaigns.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const router = useRouter();

  const toggleItem = (key: string) => {
    setOpenItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const isItemOpen = (key: string) => openItems.includes(key);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-4">
            FAQS
          </p> */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {/* If you don't see an answer to your question, visit our FAQ page or
            send us an email from our contact form */}
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          hideIndicator
          showDivider={false}
          selectionMode="multiple"
          defaultExpandedKeys={openItems}
          className="faq space-y-4"
        >
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem
              key={id.toString()}
              className="bg-white p-4 lg:py-6 lg:px-4 rounded-lg shadow-sm border border-gray-200"
              aria-label={question}
              title={
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleItem(id.toString())}
                >
                  <div
                    className={`mr-2 transition-transform duration-300 ${
                      isItemOpen(id.toString()) ? "rotate-180" : ""
                    }`}
                  >
                    <Image
                      src="/icons/arrow-bottom.svg"
                      alt="arrow"
                      className="rounded-none min-w-5"
                      removeWrapper
                    />
                  </div>
                  <p className={classNames("font-semibold text-gray-800")}>
                    {question}
                  </p>
                </div>
              }
            >
              <p className="text-gray-600 leading-relaxed pt-2">{answer}</p>
            </AccordionItem>
          ))}
        </Accordion>

        {/* More FAQs Button */}
        <div className="text-center mt-10">
          <Button
            variant="primary"
            size="lg"
            text="More FAQs"
            containerClass="mx-auto"
            onClick={() => {
              router.push("/faq");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
