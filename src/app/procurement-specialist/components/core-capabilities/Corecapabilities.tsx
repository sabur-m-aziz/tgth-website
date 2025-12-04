import React from "react";

const capabilities = [
  "Supplier sourcing: Identifying and evaluating potential suppliers to find the best options for quality, price, and reliability.",
  "Negotiation skills: Negotiating terms and prices with suppliers to secure the best deals for the company.",
  "Contract management: Drafting, reviewing, and managing contracts to ensure compliance and protect company interests.",
  "Cost analysis: Evaluating costs associated with procurement to identify savings opportunities and optimise spending.",
  "Inventory management: Monitoring and managing inventory levels to ensure timely availability of materials while minimising excess stock.",
  "Market research: Conducting research on market trends and supplier capabilities to inform procurement decisions.",
  "Supplier relationship management: Building and maintaining strong relationships with suppliers to foster collaboration and ensure reliable service.",
  "Risk assessment: Identifying potential risks in the supply chain and developing strategies to mitigate them.",
  "Purchase order processing: Creating, managing, and tracking purchase orders to ensure timely procurement of goods and services.",
  "Compliance and regulation: Ensuring procurement processes comply with relevant laws, regulations, and company policies.",
  "Data analysis and reporting: Analysing procurement data to generate reports that inform decision-making and improve processes.",
  "Cross-functional collaboration: Working with internal teams, such as finance and operations, to align procurement strategies with business objectives.",
  "Sustainability practices: Implementing sustainable procurement practices to support environmental and social responsibility goals.",
  "Supplier performance evaluation: Assessing supplier performance based on quality, delivery, and service to ensure standards are met.",
  "Problem-solving: Addressing procurement challenges and finding effective solutions to maintain operational efficiency.",
];

const CoreCapabilities = () => {
  return (
    <section className="px-4 py-12 bg-[#F7F9FC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Core Capabilities of our Procurement Specialist
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {capabilities.map((item, index) => {
          const [boldPart, ...rest] = item.split(":");
          const normalPart = rest.join(":");
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 pt-1.5 bg-orange-400 rounded-full flex-shrink-0" />
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>{boldPart}:</strong>
                {normalPart}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreCapabilities;
