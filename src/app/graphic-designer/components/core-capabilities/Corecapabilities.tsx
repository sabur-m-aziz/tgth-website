import React from "react";

const capabilities = [
  "Creative design: Developing visually appealing graphics, layouts, and illustrations that align with brand identity and project goals.",
  "Branding: Creating and maintaining brand visuals, including logos, colour schemes, and typography, to ensure brand consistency.",
  "Digital illustration: Producing custom illustrations for various digital platforms, enhancing visual storytelling and engagement.",
  "User interface (UI) design: Designing user-friendly interfaces for websites and applications, prioritising aesthetics and usability.",
  "Print design: Creating print materials such as brochures, business cards, and posters, ensuring high-quality output for physical distribution.",
  "Photo editing: Enhancing and retouching images to improve quality and align with marketing and branding standards.",
  "Typography: Selecting and applying appropriate fonts and text styles to enhance readability and visual impact.",
  "Layout design: Organising visual elements on a page or screen to create a cohesive and effective visual hierarchy.",
  "Motion graphics: Designing animated graphics and videos to convey messages dynamically and engage audiences.",
  "Feedback incorporation: Revising designs based on client feedback to ensure alignment with expectations and project goals.",
  "Collaboration: Working closely with clients and other team members to understand requirements and integrate ideas into designs.",
  "Time management: Effectively managing multiple design projects and deadlines to ensure timely delivery of high-quality work.",
  "Design software proficiency: Utilising industry-standard design tools such as Adobe Creative Suite (Photoshop, Illustrator, InDesign) to create professional designs.",
  "Research and trend analysis: Staying updated on design trends and industry standards to ensure designs are contemporary and relevant.",
  "Presentation skills: Effectively presenting design concepts and ideas to clients or stakeholders, articulating the rationale behind design choices.",
];

const CoreCapabilities = () => {
  return (
    <section className="px-4 py-12 bg-[#F7F9FC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Core Capabilities of our Graphic Designer
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
