import React from "react";

const capabilities = [
  "Financial modelling: Creating detailed financial models to forecast future performance and evaluate potential business scenarios.",
  "Data analysis: Analysing financial data to identify trends, variances, and insights that inform strategic decision-making.",
  "Budgeting and forecasting: Assisting in the preparation of budgets and forecasts to guide financial planning and resource allocation.",
  "Variance analysis: Comparing actual financial performance against budgets or forecasts to identify discrepancies and recommend corrective actions.",
  "Reporting: Preparing comprehensive financial reports and presentations for stakeholders, summarising key findings and recommendations.",
  "Risk assessment: Evaluating financial risks associated with business decisions and proposing strategies to mitigate them.",
  "Performance metrics development: Establishing key performance indicators (KPIs) to measure the effectiveness of financial strategies and operations.",
  "Market research: Conducting research on market trends, economic conditions, and competitor performance to inform financial strategies.",
  "Investment analysis: Evaluating investment opportunities to determine potential returns and risks, supporting informed investment decisions.",
  "Compliance and regulation: Ensuring that financial practices comply with relevant laws and regulations, maintaining ethical standards.",
  "Collaboration with teams: Working with cross-functional teams, such as accounting, operations, and management, to align financial strategies with business goals.",
  "Continuous improvement: Identifying areas for process improvement within financial operations and recommending enhancements for efficiency.",
  "Financial system proficiency: Utilising financial software and tools to manage and analyse financial data effectively.",
  "Communication skills: Effectively communicating complex financial information to non-financial stakeholders in an understandable manner.",
  "Attention to detail: Ensuring accuracy and thoroughness in financial analysis, reporting, and compliance efforts.",
];

const CoreCapabilities = () => {
  return (
    <section className="px-4 py-12 bg-[#F7F9FC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Core Capabilities of our Financial Analyst
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
