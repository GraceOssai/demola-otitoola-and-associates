import React from 'react';
import Slider from "react-slick";


const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider

// 
// import React, { useEffect, useState, Fragment } from "react";
// import firstImage from '../../public/assets/images/firstImage.png';
// import secondImage from '../../public/assets/images/secondImage.jpg';
// import thirdImage from '../../public/assets/images/thirdImage.jpg';
// import fourthImage from '../../public/assets/images/fourthImage.jpg';
// import fifthImage from '../../public/assets/images/fifthImage.jpg';
// import Image from "next/image";

// const SliderImages = [
//   {
//     img: firstImage,
//   },
//   {
//     img: secondImage,
//   },
//   {
//     img: thirdImage,
//   },
//   {
//     img: fourthImage,
//   },
//   {
//     img: fifthImage,
//   },
// ];
// const HomeSlider = () => {
//   const [nextSlide, setNextSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(goToNextSlide, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [nextSlide]);

//   const goToNextSlide = () => {
//     setNextSlide((prevIndex) => (prevIndex + 1) % SliderImages.length);
//   };

//   return (
//     <Fragment>
//       <div
//         className="flex transition-transform duration-500 h-full w-[500px] overflow-hidden"
//         style={{
//           transform: `translateX(-${nextSlide * (100 / SliderImages.length)}%)`,
//           width: `${SliderImages.length * 50}%`,
//         }}
//       >
//         {SliderImages.map((slide) => {
//           return (
//             <div className="h-full w-[50%]">
//               <Image
//                 src={slide.img}
//                 height={780}
//                 width={700}
//                 alt="imageSlider"
//                 className="h-full w-full object-cover rounded-[16px]"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="absolute bottom-5 flex items-center w-[50%]">
//         {SliderImages.map((_, index) => {
//           const color =
//             index === nextSlide ? "bg-custom-gradient" : "bg-white ";
//           return (
//             <div
//               key={index}
//               className={`h-[3px] w-full mx-2 rounded-[20px] ${color}`}
//             ></div>
//           );
//         })}
//       </div>
//     </Fragment>
//   );
// }

// export default HomeSlider
