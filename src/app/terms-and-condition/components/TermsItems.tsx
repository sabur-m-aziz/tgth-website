import { FC } from "react";

interface TermsItemsProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

const TermsItems: FC<TermsItemsProps> = ({ sectionRefs }) => {
  return (
    <div>
      {items.map(({ title, description, list }, index) => (
        <div key={title} ref={sectionRefs[title]} className="mb-12">
          <h4 className="text-xl font-bold font-clearSans lg:text-2.5xl mb-4 lg:mb-6">
            {title}
          </h4>
          <p>{description}</p>
          {list?.length && (
            <ul className="list-disc pl-5">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsItems;

export const items = [
  {
    title: "Services Provided",
    description:
      "We provide offshore talent solutions, helping businesses expand their teams with expert global professionals. Our services include recruitment, employee management, payroll solutions, and more.",
  },
  {
    title: "Terms of Use",
    description:
      "By using our services, you agree to the following conditions:",
    list: [
      "Users must provide accurate and complete information.",
      "Our services are only available to businesses seeking offshore talent solutions.",
      "Misuse of the platform may result in account suspension.",
    ],
  },
  {
    title: "Privacy Policy",
    description:
      "We prioritise the security of your personal data. We collect information to:",
    list: [
      "Facilitate recruitment processes.",
      "Enhance your user experience.",
      "Ensure smooth communication between employers and offshore teams.",
    ],
  },
  {
    title: "Payment Terms",
    description:
      "All fees for our services must be paid as per the agreed schedule. Any late payments may incur additional charges. Accepted payment methods include bank transfer and credit card.",
  },
  {
    title: "Cancellation Policy",
    description:
      "You may cancel our services by providing at least 30 days’ written notice. Refunds for cancellations will be evaluated based on the duration of services already provided.",
  },
  {
    title: "Intellectual Property",
    description:
      "All materials and content provided on this site are the intellectual property of TGTH (Australia). Unauthorised use or reproduction is strictly prohibited.",
  },
  {
    title: "Limitation of Liability",
    description:
      "We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
  },
  {
    title: "Governing Law",
    description:
      "These terms are governed by the laws of Australia. Any disputes arising from these terms will be resolved under the jurisdiction of Australian courts.",
  },
];
