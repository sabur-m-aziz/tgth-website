// "use client";
// import { FC } from "react";
// import OwlCarousel from "react-owl-carousel2";
// import { Image } from "@nextui-org/react";
// import { SectionTitle } from "@/components";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./team.scss";
// import dynamic from "next/dynamic";

// // const OwlCarousel = dynamic(() => import('react-owl-carousel2'), {
// //   ssr: false,
// // });

// const items = [
//   {
//     id: 1,
//     name: "Johnathan Reed",
//     designation: "Chief Executive Officer (CEO)",
//     description: "Emily oversees the day-to-day operations, ensuring...",
//     imageUrl: "/images/about/team-1.png",
//   },
//   {
//     id: 2,
//     name: "Cory Zamora",
//     designation: "Client Relations Manager",
//     description: "Sophie leads our client relations department...",
//     imageUrl: "/images/about/team-2.png",
//   },
//   {
//     id: 3,
//     name: "Nikolas Brooten",
//     designation: "IT Infrastructure Manager",
//     description: "Miguel ensures that our technology infrastructure...",
//     imageUrl: "/images/about/team-3.png",
//   },
//   {
//     id: 4,
//     name: "Jackie Sanders",
//     designation: "Global Operations Manager",
//     description: "Ahmed coordinates our offshore teams arco...",
//     imageUrl: "/images/about/team-4.png",
//   },
//   {
//     id: 5,
//     name: "Johnathan Reed",
//     designation: "Chief Executive Officer (CEO)",
//     description: "Emily oversees the day-to-day operations, ensuring...",
//     imageUrl: "/images/about/team-1.png",
//   },
//   {
//     id: 6,
//     name: "Cory Zamora",
//     designation: "Client Relations Manager",
//     description: "Sophie leads our client relations department...",
//     imageUrl: "/images/about/team-2.png",
//   },
//   {
//     id: 7,
//     name: "Nikolas Brooten",
//     designation: "IT Infrastructure Manager",
//     description: "Miguel ensures that our technology infrastructure...",
//     imageUrl: "/images/about/team-3.png",
//   },
//   {
//     id: 8,
//     name: "Jackie Sanders",
//     designation: "Global Operations Manager",
//     description: "Ahmed coordinates our offshore teams arco...",
//     imageUrl: "/images/about/team-4.png",
//   },
// ];

// const options = {
//   navText: [
//     `<i class="fas fa-chevron-left"></i>`,
//     `<i class="fas fa-chevron-right"></i>`,
//   ],

//   nav: true,
//   dots: true,
//   // loop: true,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   margin: 20,
//   items: 4,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1024: {
//       items: 3,
//     },
//     1320: {
//       items: 4,
//     },
//   },
// };

// const Team: FC = () => (
//   <section className="pt-12 lg:pt-24.1">
//     <div className="container">
//       <SectionTitle
//         title="Get to Know the Experts Behind Our Success"
//         subTitle="Meet Our team"
//       />
//       <div className="mt-20.1 lg:mt-9 team">
//         <OwlCarousel options={options}>
//           {items.map(({ id, name, designation, description, imageUrl }) => (
//             <div key={id}>
//               <div className="text-center p-10 shadow-team-card m-1">
//                 <Image
//                   src={imageUrl}
//                   className="rounded-lg w-[105px] object-cover mx-auto"
//                   removeWrapper
//                   alt={name}
//                 />
//                 <h4 className="lg:text-xl mt-4">{name}</h4>
//                 <p className="text-sm lg:text-sm uppercase mt-1 mb-2">
//                   {designation}
//                 </p>
//                 <p className="text-sm lg:text-sm font-normal">{description}</p>
//               </div>
//             </div>
//           ))}
//         </OwlCarousel>
//       </div>
//     </div>
//   </section>
// );

// export default Team;
