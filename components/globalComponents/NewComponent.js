import Image from "next/image";
import { useState, useEffect } from "react";
import PropertiesData from "./PropertiesData";
import Card from "./Card";

const NewComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === PropertiesData.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? PropertiesData.length - 1 : prevImage - 1
    );
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % PropertiesData.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + PropertiesData.length) % PropertiesData.length
    );
  };

  return (
    <div className="relative flex">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white"
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white"
      >
        Next
      </button>
      {PropertiesData.map((property, index) => (
          <Card className="rounded-2xl h-auto w-[350px] bg-white h-auto mt-16 mr-10  border border-red-500">
            <Image
              src={property.img}
              width={391}
              height={259}
              alt="slider"
              className="bg-contain"
            />
            <div className="px-5 py-5 flex flex-col gap-5">
              <p className="text-[#141B2D] font-bold">{property.description}</p>
              <div>
                <p className="text-[#1C3988]">#{property.amount}</p>
                <p className="text-[#141B2D]">{property.location}</p>
                {console.log(property.img)}
              </div>
            </div>
          </Card>
        ))}
      <img src={PropertiesData[currentImage]} alt="Slider" className="w-full" />
    </div>
    // <div
    //   className={
    //     "flex items-center justify-center relative  h-[550px] mt-10 bg-primary-2 md:mx-0 md:h-[521px] transform transition-all duration-50000"
    //   }
    // >
    //   <div
    //     className="flex transition-transform duration-500 border border-yellow-500"
    //     style={{
    //       transform: `translateX(-${
    //         activeIndex * (90 / PropertiesData.length)
    //       }%)`,
    //       width: `${PropertiesData.length * 100}%`,
    //     }}
    //   >
    //     {PropertiesData.map((property, index) => (
    //       <Card className="rounded-2xl h-auto w-[350px] bg-white h-auto mt-16 mr-10  border border-red-500">
    //         <Image
    //           src={property.img}
    //           width={391}
    //           height={259}
    //           alt="slider"
    //           className="bg-contain"
    //         />
    //         <div className="px-5 py-5 flex flex-col gap-5">
    //           <p className="text-[#141B2D] font-bold">{property.description}</p>
    //           <div>
    //             <p className="text-[#1C3988]">#{property.amount}</p>
    //             <p className="text-[#141B2D]">{property.location}</p>
    //             {console.log(property.img)}
    //           </div>
    //         </div>
    //       </Card>
    //     ))}
    //     {comments.map((commentData, index) => (
    //         <div
    //           key={index}
    //           style={{
    //             width: `${100 / comments.length}%`,
    //           }}
    //           className="flex justify-center items-center w-full h-max"
    //         >
    //           <div className="flex flex-col justify-center h-full items-center">
    //             <p className="mb-7 text-primary-3 text-[15px] text-center">
    //               {commentData.comment}
    //             </p>
    //             <p className="text-2xl text-center md:text-[30px]">
    //               {commentData.title}
    //             </p>
    //             <p className="text-base text-primary-0 text-center md:text-[15px]">
    //               {" "}
    //               {commentData.name}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //   </div>{" "}
    //   <div className="flex justify-center items-center mt-20 space-x-1 w-full">
    //     {PropertiesData.map((_, index) => {
    //       const width =
    //         index === activeIndex
    //           ? "w-[27px] bg-primary-0"
    //           : "w-[5px] bg-primary-3";
    //       return (
    //         <div
    //           key={index}
    //           className={`rounded-lg h-[5px] transition-all duration-500 ease-in-out ${width}`}
    //         ></div>
    //       );
    //     })}
    //   </div>
    //   <button
    //     onClick={goToPrevSlide}
    //     className="hidden lg:block absolute top-1/2 left-16 transform -translate-y-1/2 w-[30px] h-[21px]"
    //   >
    //     <Image
    //       src="/icons/arrow-icon.svg"
    //       className="h-full w-full"
    //       alt="arrow-icon"
    //       height={21}
    //       width={21}
    //       loading="eager"
    //       priority
    //     />
    //   </button>
    //   <button
    //     onClick={goToNextSlide}
    //     className="hidden lg:block absolute top-1/2 right-16 transform -translate-y-1/2 rotate-180 w-[30px] h-[21px]"
    //   >
    //     <Image
    //       src="/icons/arrow-icon.svg"
    //       className="h-full w-full"
    //       alt="arrow-icon"
    //       height={21}
    //       width={21}
    //       loading="eager"
    //       priority
    //     />
    //   </button>
    // </div>
  );
};

export default NewComponent;
