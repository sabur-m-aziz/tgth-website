"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { Button, SectionTitle } from "@/components";
import { defaultContent, motionProps } from "./data";
import "./faq.css";
import classNames from "classnames";

type FAQItem = {
  id: number;
  question: string;
  answer?: string | ReactNode;
  descriptionType?: string;
};
interface Props {
  faqItems: FAQItem[];
  background?: string;
  hideTitle?: boolean;
  hideButton?: boolean;
  collapsed?: boolean;
  containerClassName?: string;
}

const FAQ: FC<Props> = ({
  faqItems,
  background,
  hideButton,
  hideTitle,
  containerClassName,
  collapsed = false,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(
    collapsed ? faqItems.map((item) => item.id.toString()) : []
  );
  const router = useRouter();

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const newOpenItems = prev.includes(key)
        ? prev.filter((item) => item !== key)
        : [...prev, key];
      return newOpenItems;
    });
  };

  const isItemOpen = (key: string) => openItems.includes(key);

  return (
    <section className={`bg-${background || "backgroundSecondary"}`}>
      <div
        className={`${
          !hideTitle && "container"
        } mx-auto py-12 lg:py-24.1 ${containerClassName}`}
      >
        {!hideTitle && (
          <SectionTitle
            subTitle="FAQs"
            title="If you don't see an answer to your question, visit our FAQ page or send us an email from our contact form"
            subTitleUppercase={false}
          />
        )}

        <Accordion
          hideIndicator
          showDivider={false}
          motionProps={motionProps}
          className={`faq ${
            !hideTitle && "mx-auto my-6 lg:my-9 max-w-[830px]"
          }`}
          selectionMode="multiple"
          defaultExpandedKeys={openItems}
        >
          {faqItems.map(({ id, question, descriptionType, answer }) => (
            <AccordionItem
              className="bg-white p-4 lg:py-6 lg:px-4 mb-4 lg:mb-6 rounded-lg shadow-accordion-shadow"
              key={id.toString()}
              aria-label={question}
              title={
                <div
                  className="flex items-center justify-start"
                  onClick={() => toggleItem(id.toString())}
                >
                  <div
                    className={`mr-2 transition-transform duration-300 ${
                      isItemOpen(id.toString()) ? "rotate-180" : ""
                    }`}
                  >
                    <Image
                      src="/icons/arrow-bottom.svg"
                      className="rounded-none min-w-5"
                      removeWrapper
                    />
                  </div>
                  <p
                    className={classNames("font-bold", {
                      "text-primary": hideTitle,
                      "text-textPrimary": !hideTitle,
                    })}
                  >
                    {question}
                  </p>
                </div>
              }
            >
              {descriptionType === "COMPONENT" ? (
                answer
              ) : (
                <p className="text-base text-textPrimary">
                  {answer || defaultContent}
                </p>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        {!hideButton && (
          <Button
            variant="primary"
            size="lg"
            text="More FAQs"
            containerClass="mx-auto"
            onClick={() => {
              router.push("/faq");
            }}
          />
        )}
      </div>
    </section>
  );
};

export default FAQ;
