"use client";
import { useState } from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/components";

const faqs = [
  {
    id: 1,
    question: "How soon can my outsourced assistant start?",
    answer:
      "Usually within 7–14 business days, depending on training and onboarding timelines.",
  },
  {
    id: 2,
    question: "Will they use my company’s systems and tools?",
    answer:
      "Yes. Our staff are trained to work within your existing systems, including CRMs and email platforms.",
  },
  {
    id: 3,
    question: "Do you provide part-time or full-time options?",
    answer:
      "We offer both. Scale your team up or down as your business demands.",
  },
    {
    id: 4,
    question: "Can they work during Australian business hours?",
    answer:
      "Absolutely. We align shifts with your time zone and preferred working hours.",
  },
      {
    id: 5,
    question: "How do you ensure quality and accountability?",
    answer:
      "Weekly reporting, KPI tracking, and direct supervisor oversight ensure consistent service delivery.",
  },
      {
    id: 6,
    question: "Is this service flexible for peak periods?",
    answer:
      "Yes. We can rapidly scale your team to meet seasonal or sudden demand spikes.",
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
