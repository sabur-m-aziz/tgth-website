import React from "react";

const capabilities = [
  "Financial reporting: Preparing accurate financial statements and reports to reflect the company's financial position.",
  "Bookkeeping: Maintaining and recording financial transactions to ensure that accounts are up to date.",
  "Tax compliance: Ensuring adherence to local and international tax regulations, including filing tax returns and managing tax liabilities.",
  "Budgeting: Assisting in the preparation and management of budgets to control spending and allocate resources effectively.",
  "Cost analysis: Evaluating costs associated with business operations to identify areas for cost reduction and efficiency improvement.",
  "Accounts payable and receivable: Managing outgoing payments to suppliers and incoming payments from customers to maintain cash flow.",
  "Reconciliation: Performing regular reconciliation of bank statements and financial accounts to ensure accuracy and identify discrepancies.",
  "Payroll processing: Handling payroll calculations, deductions, and disbursements to ensure employees are paid accurately and on time.",
  "Financial analysis: Conducting analyses of financial data to provide insights and support strategic decision-making.",
  "Internal controls: Implementing and monitoring internal control systems to safeguard company assets and ensure compliance with regulations.",
  "Audit support: Assisting internal and external auditors by providing necessary documentation and explanations during audits.",
  "Regulatory reporting: Preparing reports required by regulatory bodies to ensure compliance with industry standards and laws.",
  "Advisory services: Offering financial advice and recommendations to improve business performance and financial health.",
  "Cash flow management: Monitoring and managing cash flow to ensure the business has adequate liquidity for operations.",
  "Documentation and record-keeping: Maintaining organised financial records and documentation for easy retrieval and compliance purposes.",
];

const CoreCapabilities = () => {
  return (
    <section className="px-4 py-12 bg-[#F7F9FC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Core Capabilities of our Accountants
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
