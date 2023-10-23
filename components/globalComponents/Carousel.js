import React, { useState, useEffect } from "react";
import PropertiesData from "./PropertiesData";
import Card from "./Card";
import Image from "next/image";

const Carousel = ({style}) => {
  const [nextSlide, setNextSlide] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  const goToNextSlide = () => {
    setNextSlide((prevIndex) => (prevIndex + 1) % PropertiesData.length);
  };

  const goToPrevSlide = () => {
    setNextSlide(
      (prevIndex) =>
        (prevIndex - 1 + PropertiesData.length) % PropertiesData.length
    );
  };

  return (
    <div className={`relative mb-20 md:px-5 md:mb-48 mx-auto ${style}`}>
      {/* Any style given to a class, will be the default style or class for the mobile view. NOTE: md is desktop screen size, lg is bigger. So if I just give a style to any div, that's the style that the mobile screen will assume until we specify a breakpoint. Just like what we have in line 29, we only specified a px-5 for the desktop view (md) which means that for the mobile screen, no padding was given.*/}
      <div className="overflow-hidden mb-8 rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              nextSlide * (100 / PropertiesData.length)
            }%)`,
            width: `${PropertiesData.length * 390}px`,
          }}
        >
          {PropertiesData.map((property, index) => (
            <div key={index} className="flex items-start w-full">
              <div className=" w-[350px] flex-shrink-0 bg-white px-1 bg-blue-2 pr-20 h-max pt-2 rounded-tr-2xl rounded-br-2xl md:pt-10 md:px-9">
                <div className="text-gray-2 px-3 mb-2 text-sm md:mb-14 md:text-lg md:px-0">
                  <Card className="rounded-2xl w-full bg-white mt-16 border md:w-[300px]">
                    {" "}
                    <Image
                      src={property.img}
                      width={391}
                      height={259}
                      alt="slider"
                      className="bg-contain"
                    />
                    <div className="px-5 py-5 flex flex-col gap-5">
                      <p className="text-[#141B2D] font-bold">
                        {property.description}
                      </p>
                      <div>
                        <p className="text-[#1C3988]">#{property.amount}</p>
                        <p className="text-[#141B2D]">{property.location}</p>
                        {console.log(property.img)}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="flex justify-center space-x-2">
        {PropertiesData.map((property, index) => {
          const color = index === nextSlide ? "bg-blue-500" : "bg-gray-500";
          return (
            <div
              key={index}
              className={`h-3 w-3 md:w-5 md:h-5 rounded-full ${color}`}
            ></div>
          );
        })}
      </div>

      {/* <button
        className="absolute top-1/3 -translate-y-1/2 right-3 bg-blue-0 py-1 px-2 md:py-3 md:px-4"
        onClick={goToPrevSlide}
      >
        Prev
      </button>

      <button
        className="absolute top-1/2 mt-2 -translate-y-1/2 right-3 bg-blue-0  py-1 px-2 md:py-3 md:px-4"
        onClick={goToNextSlide}
      >
        Next
      </button> */}
    </div>
  );
};

export default Carousel;

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import PropertiesData from "./PropertiesData";
// import Card from "./Card";

// const NewComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((prevImage) =>
//       prevImage === PropertiesData.length - 1 ? 0 : prevImage + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentImage((prevImage) =>
//       prevImage === 0 ? PropertiesData.length - 1 : prevImage - 1
//     );
//   };
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     const interval = setInterval(goToNextSlide, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [activeIndex]);

//   const goToNextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % PropertiesData.length);
//   };

//   const goToPrevSlide = () => {
//     setActiveIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + PropertiesData.length) % PropertiesData.length
//     );
//   };

//   return (
//     <div className="relative flex">
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white"
//       >
//         Previous
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white"
//       >
//         Next
//       </button>
//       {PropertiesData.map((property, index) => (
//           <Card className="rounded-2xl h-auto w-[350px] bg-white h-auto mt-16 mr-10  border border-red-500">
//             <Image
//               src={property.img}
//               width={391}
//               height={259}
//               alt="slider"
//               className="bg-contain"
//             />
//             <div className="px-5 py-5 flex flex-col gap-5">
//               <p className="text-[#141B2D] font-bold">{property.description}</p>
//               <div>
//                 <p className="text-[#1C3988]">#{property.amount}</p>
//                 <p className="text-[#141B2D]">{property.location}</p>
//                 {console.log(property.img)}
//               </div>
//             </div>
//           </Card>
//         ))}
//       <img src={PropertiesData[currentImage]} alt="Slider" className="w-full" />
//     </div>
//     // <div
//     //   className={
//     //     "flex items-center justify-center relative  h-[550px] mt-10 bg-primary-2 md:mx-0 md:h-[521px] transform transition-all duration-50000"
//     //   }
//     // >
//     //   <div
//     //     className="flex transition-transform duration-500 border border-yellow-500"
//     //     style={{
//     //       transform: `translateX(-${
//     //         activeIndex * (90 / PropertiesData.length)
//     //       }%)`,
//     //       width: `${PropertiesData.length * 100}%`,
//     //     }}
//     //   >
//     //     {PropertiesData.map((property, index) => (
//     //       <Card className="rounded-2xl h-auto w-[350px] bg-white h-auto mt-16 mr-10  border border-red-500">
//     //         <Image
//     //           src={property.img}
//     //           width={391}
//     //           height={259}
//     //           alt="slider"
//     //           className="bg-contain"
//     //         />
//     //         <div className="px-5 py-5 flex flex-col gap-5">
//     //           <p className="text-[#141B2D] font-bold">{property.description}</p>
//     //           <div>
//     //             <p className="text-[#1C3988]">#{property.amount}</p>
//     //             <p className="text-[#141B2D]">{property.location}</p>
//     //             {console.log(property.img)}
//     //           </div>
//     //         </div>
//     //       </Card>
//     //     ))}
//     //     {comments.map((commentData, index) => (
//     //         <div
//     //           key={index}
//     //           style={{
//     //             width: `${100 / comments.length}%`,
//     //           }}
//     //           className="flex justify-center items-center w-full h-max"
//     //         >
//     //           <div className="flex flex-col justify-center h-full items-center">
//     //             <p className="mb-7 text-primary-3 text-[15px] text-center">
//     //               {commentData.comment}
//     //             </p>
//     //             <p className="text-2xl text-center md:text-[30px]">
//     //               {commentData.title}
//     //             </p>
//     //             <p className="text-base text-primary-0 text-center md:text-[15px]">
//     //               {" "}
//     //               {commentData.name}
//     //             </p>
//     //           </div>
//     //         </div>
//     //       ))}
//     //   </div>{" "}
//     //   <div className="flex justify-center items-center mt-20 space-x-1 w-full">
//     //     {PropertiesData.map((_, index) => {
//     //       const width =
//     //         index === activeIndex
//     //           ? "w-[27px] bg-primary-0"
//     //           : "w-[5px] bg-primary-3";
//     //       return (
//     //         <div
//     //           key={index}
//     //           className={`rounded-lg h-[5px] transition-all duration-500 ease-in-out ${width}`}
//     //         ></div>
//     //       );
//     //     })}
//     //   </div>
//     //   <button
//     //     onClick={goToPrevSlide}
//     //     className="hidden lg:block absolute top-1/2 left-16 transform -translate-y-1/2 w-[30px] h-[21px]"
//     //   >
//     //     <Image
//     //       src="/icons/arrow-icon.svg"
//     //       className="h-full w-full"
//     //       alt="arrow-icon"
//     //       height={21}
//     //       width={21}
//     //       loading="eager"
//     //       priority
//     //     />
//     //   </button>
//     //   <button
//     //     onClick={goToNextSlide}
//     //     className="hidden lg:block absolute top-1/2 right-16 transform -translate-y-1/2 rotate-180 w-[30px] h-[21px]"
//     //   >
//     //     <Image
//     //       src="/icons/arrow-icon.svg"
//     //       className="h-full w-full"
//     //       alt="arrow-icon"
//     //       height={21}
//     //       width={21}
//     //       loading="eager"
//     //       priority
//     //     />
//     //   </button>
//     // </div>
//   );
// };

// export default NewComponent;
