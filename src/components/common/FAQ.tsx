"use client";
import { useState } from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/components";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const FAQ = ({ faqs }: { faqs: FAQItem[] }) => {
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
              HeadingComponent={"span"}
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
