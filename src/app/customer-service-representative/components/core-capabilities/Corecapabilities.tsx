import React from "react";

const capabilities = [
  "Effective communication: Ability to convey information clearly and professionally across various communication channels.",
  "Multilingual proficiency: Competence in multiple languages to assist a diverse customer base.",
  "Technical proficiency: Familiarity with customer service software and tools for efficient handling of inquiries.",
  "Problem-solving skills: Capacity to analyse customer issues and provide effective solutions in a timely manner.",
  "Time management: Skill in prioritising tasks to meet deadlines and service level agreements (SLAs).",
  "Empathy: Understanding customer emotions and needs to enhance their overall experience.",
  "Patience: Maintaining composure and a positive attitude during challenging interactions with customers.",
  "Adaptability: Flexibility to adjust to changes in customer needs, processes, or products.",
  "Active listening: Fully engaging with customers to accurately understand their concerns and feedback.",
  "Conflict resolution: Ability to manage and resolve customer complaints and disputes effectively.",
  "Customer relationship management: Building and maintaining positive relationships to foster customer loyalty.",
  "Order processing: Assisting customers with placing, modifying, and managing their orders.",
  "Data entry: Accurately recording customer interactions and maintaining updated information systems.",
  "Feedback collection: Gathering customer insights and suggestions to improve products and services.",
  "Product knowledge: In-depth understanding of products and services to provide relevant assistance.",
  "Account management: Handling customer account inquiries and updates efficiently.",
  "Complaint handling: Addressing and resolving customer complaints promptly and professionally.",
  "Cross-selling: Identifying opportunities to promote additional products or services relevant to customer needs.",
  "Upselling: Encouraging customers to consider higher-value products or services based on their requirements.",
  "Reporting and documentation: Maintaining accurate records of customer interactions and generating performance reports.",
  "Team collaboration: Working effectively with other teams to ensure cohesive and efficient service delivery.",
  "Attention to detail: Ensuring accuracy in customer interactions, documentation, and processes.",
  "Stress management: Effectively handling high-pressure situations while maintaining service quality.",
  "Positive attitude: Approaching customer interactions with enthusiasm and a friendly Demeanour.",
  "Initiative: Proactively addressing customer needs and seeking out solutions to enhance service.",
  "Resourcefulness: Using creativity and available resources to resolve customer issues efficiently.",
];

const CoreCapabilities = () => {
  return (
    <section className="px-4 py-12 bg-[#F7F9FC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
       Core Capabilities of our Customer Service Representatives
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
