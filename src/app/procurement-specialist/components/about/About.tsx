import { FC } from "react";

const About: FC = () => {
  return (
    <section className="bg-primary py-20">
      <div className="md:px-[400px] px-6">
        <h1 className="text-center text-white text-3xl md:text-6xl">
          How an Offshore Accountant Helps You Stay Compliant and Financially
          Organised
        </h1>
      </div>
      <div className="py-12 lg:my-0 md:px-32 px-5">
        <div className="mt-6 text-left sm:text-left mx-auto sm:mx-0 space-y-6">
          <span className="block text-white text-lg sm:text-xl md:text-xl leading-relaxed">
            At TGTH, we provide highly skilled, offshore Accounting
            Professionals who help Australian businesses improve financial
            accuracy, reduce internal workload, and ensure compliance with local
            regulations. Our virtual accountants are experienced in all areas of
            accounting—from bookkeeping and payroll to accounts
            payable/receivable, BAS lodgements, and financial reporting.
          </span>
          <span className="block text-white text-lg sm:text-xl md:text-xl leading-relaxed">
            Our Accounting Professionals aren’t just remote workers, they’re an
            extension of your team. Whether you’re a small business, growing
            startup, or large enterprise, we ensure your financials are always
            up to date, audit-ready, and managed with care and precision. We
            work within your preferred systems such as Xero, MYOB, QuickBooks,
            and more.
          </span>
          <span className="block text-white text-lg sm:text-xl md:text-xl leading-relaxed">
            By offshoring with TGTH, you unlock a reliable, flexible solution
            that helps you gain clarity, compliance, and cost-efficiency, while
            giving your in-house team more time to focus on what matters most,
            growing the business.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
