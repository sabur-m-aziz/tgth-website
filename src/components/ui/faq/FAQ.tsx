"use client";
import { ReactNode, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Accordion, AccordionItem, Image, Input } from "@nextui-org/react";
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
  const [searchQuery, setSearchQuery] = useState("");
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

  // Filter FAQ items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return faqItems;
    
    const query = searchQuery.toLowerCase();
    return faqItems.filter((item) => {
      const questionMatch = item.question.toLowerCase().includes(query);
      const answerText = typeof item.answer === "string" ? item.answer : "";
      const answerMatch = answerText.toLowerCase().includes(query);
      return questionMatch || answerMatch;
    });
  }, [searchQuery, faqItems]);

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

        {/* Search Bar */}
        <div
          className={`${
            !hideTitle && "mx-auto max-w-[830px]"
          } my-6 lg:my-9`}
        >
          <Input
            isClearable
            placeholder="Search for an answer..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
            classNames={{
              input: "text-base",
              inputWrapper: "bg-white border border-gray-200 rounded-lg px-4",
            }}
          />
        </div>

        {/* No Results Message with Enquiry Form */}
        {searchQuery.trim() && filteredItems.length === 0 ? (
          <div
            className={`${
              !hideTitle && "mx-auto max-w-[830px]"
            } bg-white rounded-lg p-8 lg:p-12 text-center shadow-accordion-shadow`}
          >
            <p className="text-textPrimary text-base lg:text-lg mb-6">
              No FAQs found for "<strong>{searchQuery}</strong>". 
            </p>
            <p className="text-textPrimary text-base mb-8">
              Please submit your enquiry below, and our team will get back to you shortly.
            </p>
            
            {/* Simple Enquiry Form */}
            <EnquiryForm hideForm={() => setSearchQuery("")} />
          </div>
        ) : (
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
            {filteredItems.map(({ id, question, descriptionType, answer }) => (
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
        )}

        {!hideButton && searchQuery.trim() === "" && (
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

/* Simple Enquiry Form Component */
const EnquiryForm: FC<{ hideForm: () => void }> = ({ hideForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You can replace this with your actual form submission logic
      // For now, we'll use the same submission as contact form
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("question", formData.question);
      formDataObj.append("source", "faq_enquiry");

      // Call your API endpoint here
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", question: "" });
        setTimeout(() => hideForm(), 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
      <div>
        <label className="block text-sm font-medium text-textPrimary mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-textPrimary mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
          placeholder="Your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-textPrimary mb-1">
          Your Question <span className="text-red-500">*</span>
        </label>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary resize-none"
          placeholder="What would you like to know?"
        />
      </div>

      {submitStatus === "success" && (
        <p className="text-green-600 text-sm">
          Thank you! We'll get back to you soon.
        </p>
      )}

      {submitStatus === "error" && (
        <p className="text-red-600 text-sm">
          Submission failed. Please try again.
        </p>
      )}

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </button>
        <button
          type="button"
          onClick={hideForm}
          className="flex-1 border border-gray-300 text-textPrimary py-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FAQ;
