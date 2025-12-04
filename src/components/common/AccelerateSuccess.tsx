import React from "react";

type AccelerateSuccessProps = {
  title: string;
  paragraphs: string[];
};

const AccelerateSuccess: React.FC<AccelerateSuccessProps> = ({
  title,
  paragraphs,
}) => {
  return (
    <section className={`py-12 bg-[#F7F9FC]`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-secondary mb-10">
          {title}
        </h2>
        <div className="bg-white shadow-md rounded-xl p-10 w-full mx-auto space-y-4">
          {paragraphs.map((text, idx) => (
            <p className="text-gray-600" key={idx}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccelerateSuccess;
