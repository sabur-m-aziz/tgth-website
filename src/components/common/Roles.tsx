"use client";

import { useRouter } from "nextjs-toploader/app";


const rolesData = [
  {
    id: "AC",
    title: "Accountant",
    location: "Manilla, Phillipines",
    link: "/accountant",
  },
  {
    id: "AR",
    title: "AR and AP Specialist",
    location: "Manilla, Phillipines",
    link: "/ar-ap-specialist",
  },
  {
    id: "SE",
    title: "Software Engineer",
    location: "Manilla, Phillipines",
    link: "/software-developer",
  },
  {
    id: "CSR",
    title: "Customer Service Representative",
    location: "Manilla, Phillipines",
    link: "/customer-service-representative",
  },
  {
    id: "DA",
    title: "Data Analyst",
    location: "Manilla, Phillipines",
    link: "/data-analyst",
  },
  {
    id: "DE",
    title: "Data Engineer",
    location: "Manilla, Phillipines",
    link: "/data-engineer",
  },
  {
    id: "DAR",
    title: "Database Administrator",
    location: "Manilla, Phillipines",
    link: "/database-administrator",
  },
  {
    id: "FA",
    title: "Financial Analyst",
    location: "Manilla, Phillipines",
    link: "/financial-analyst",
  },
  {
    id: "GD",
    title: "Graphic Designer",
    location: "Manilla, Phillipines",
    link: "/graphic-designer",
  },
  {
    id: "MM",
    title: "Marketing Manager",
    location: "Manilla, Phillipines",
    link: "/marketing-manager",
  },
  {
    id: "MS",
    title: "Marketing Specialist",
    location: "Manilla, Phillipines",
    link: "/digital-marketing-specialist",
  },
  {
    id: "PMS",
    title: "Performance Marketing Specialist",
    location: "Manilla, Phillipines",
    link: "/performance-marketing-specialist",
  },
  {
    id: "PS",
    title: "Procurement Specialist",
    location: "Manilla, Phillipines",
    link: "/procurement-specialist",
  },
  {
    id: "SS",
    title: "Sales Support",
    location: "Manilla, Phillipines",
    link: "/sales-support",
  },
  {
    id: "SS",
    title: "SEO Specialist",
    location: "Manilla, Phillipines",
    link: "/seo-specialist",
  },
  {
    id: "SMS",
    title: "Social Media Specialist",
    location: "Manilla, Phillipines",
    link: "/social-media-specialist",
  },
  {
    id: "TSS",
    title: "Technical Support Specialist",
    location: "Manilla, Phillipines",
    link: "/technical-support-specialist",
  },
  {
    id: "WD",
    title: "Web Developer",
    location: "Manilla, Phillipines",
    link: "/web-developer",
  },
];

type Role = {
  id: string;
  title: string;
  location: string;
};

const Roles = () => {
  const route = useRouter();
  const handleRoleClick = (link: string) => {
    route.push(link);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Looking for other roles? We got you Covered
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rolesData.map((role, index) => (
            <div
              key={index}
              onClick={() => handleRoleClick(role.link)}
              className="bg-white rounded-lg p-9 shadow-md first-line:cursor-pointer border border-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                {/* Avatar Circle with Initials */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                  <span className="text-white font-bold text-sm">
                    {role.id}
                  </span>
                </div>

                {/* Job Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-lg mb-1">
                    {role.title}
                  </p>
                  <p className="text-gray-600 text-sm">{role.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
