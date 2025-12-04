import { Image } from "@nextui-org/react";
import { FC } from "react";

const ImageGallery: FC = () => (
  <Image
    src="/images/why-us/why-philippines.webp"
    className="rounded-lg"
    removeWrapper
  />
);

//   (
//   <>
//     <div className="hidden sm:grid grid-cols-2 gap-5">
//       <div className="col-span-1 flex items-center">
// <Image
//   src="/images/why-us/gallery-1.webp"
//   className="rounded-none transform transition-transform duration-300 hover:scale-105"
//   removeWrapper
// />
//       </div>

//       <div className="col-span-1">
//         <div className="h-full grid grid-cols-1 gap-4 lg:gap-5">
//           <div className="col-span-1">{textCard}</div>
//           <div className="col-span-1">
//             <Image
//               src="/images/why-us/gallery-2.webp"
//               className="rounded-none transform transition-transform duration-300 hover:scale-105"
//               removeWrapper
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="sm:hidden space-y-4">
//       {textCard}
//       <Image
//         src="/images/why-us/gallery-1.jpg"
//         className="rounded-none transform transition-transform duration-300 hover:scale-105 w-full"
//         removeWrapper
//       />
//       <Image
//         src="/images/why-us/gallery-2.jpg"
//         className="rounded-none transform transition-transform duration-300 hover:scale-105 w-full"
//         removeWrapper
//       />
//     </div>
//   </>
// );

export default ImageGallery;

const textCard = (
  <div className="rounded-lg w-full p-7 lg:py-10 lg:px-5 bg-accent text-center min-h-44 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 cursor-default">
    <div>
      <h2 className="text-5.4xl lg:text-7.5xl font-clearSans font-bold text-white">
        #1
      </h2>
      <p className="max-w-48 lg:max-w-none mx-auto text-base font-normal lg:text-2xl lg:font-normal font-clearSans mt-4 lg:mt-6 text-white">
        Outsourcing Destination <span className="font-bold">Philippines</span>
      </p>
    </div>
  </div>
);
