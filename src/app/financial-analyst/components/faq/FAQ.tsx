"use client";
import { useState } from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/components";

const faqs = [
  {
    id: 1,
    question: "What tasks do TGTH Financial Analysts handle?",
    answer:
      "We cover budgeting, forecasting, cost analysis, profitability reviews, KPI dashboards, investor reporting, and variance analysis.",
  },
  {
    id: 2,
    question: "Can the analyst work with my accounting and ERP systems?",
    answer:
      "Yes. Our analysts are trained in tools like Xero, MYOB, QuickBooks, Excel, NetSuite, SAP, and data visualisation tools like Power BI and Tableau.",
  },
  {
    id: 3,
    question: "Do you offer flexible engagement options?",
    answer:
      "Absolutely. Choose between part-time, full-time, or project-based support based on your financial workload.",
  },
  {
    id: 4,
    question: "Will the analyst work during Australian business hours?",
    answer:
      "Yes. We align schedules to your preferred Australian time zone to ensure real-time collaboration and timely reporting.",
  },
  {
    id: 5,
    question: "How do you maintain data confidentiality?",
    answer:
      "We use secure, encrypted platforms and enforce strict NDAs and access control policies to protect your financial data.",
  },
  {
    id: 6,
    question: "Can you provide support during audits or board meetings?",
    answer:
      "Yes. Our analysts can assist with audit prep, board packs, investor reporting, and other strategic deliverables.",
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
