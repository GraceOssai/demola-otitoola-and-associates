import React, { useState } from "react";
import IconBtn from "./IconBtn";
import Card from "./Card";
import Button from "./Button";
import firstImage from "@/public/assets/images/sliderImages/firstImage.png";
import secondImage from "@/public/assets/images/sliderImages/secondImage.png";
import thirdImage from "@/public/assets/images/sliderImages/thirdImage.png";
import fourthImage from "@/public/assets/images/sliderImages/fourthImage.png";
import Carousel from "react-simply-carousel";
import Image from "next/image";

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const items = [
    {
      img: firstImage,
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      img: secondImage,
      description: "5i large design apartment with terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      img: thirdImage,
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      img: fourthImage,
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      img: secondImage,
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      img: firstImage,
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
  ];

  return (
    <div className="py-[15px] px-14">
      <h1 className="text-5xl">Top offers</h1>
      <div className="flex justify-between items-center text-{#091638}">
        <div className="flex-[0.8] mt-4">
          <div>
            Fulfill your career dreams, enjoy all the achievements of the <br />{" "}
            city center and luxury housing to the fullest.
          </div>
        </div>
        <Button newStyle="text-[#1C3988] h-10 w-[134px] bg-transparent border-2 border-solid border-[#1C3988]">
          Show all offers
        </Button>
      </div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            color: "#1C3988",
            fontWeight: "bold",
            fontSize: 20,
            // backgroundColor: "#1C3988",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            color: "#1C3988",
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              backgroundColor: "#1C3988",
            },
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black",
            },
          },
        }}
        itemsToShow={2}
        speed={400}
        centerMode
      >
        {items.map((item, index) => (
          <Card key={index} className="h-auto mt-16 ">
            <Image
              src={item.img}
              width={391}
              height={259}
              alt="slider"
              className="bg-contain"
            />
            <div className="px-5 py-5 flex flex-col gap-5">
              <p className="text-[#141B2D] font-bold">{item.description}</p>
              <div>
                <p className="text-[#1C3988]">#{item.amount}</p>
                <p className="text-[#141B2D]">{item.location}</p>
                {console.log(item.img)}
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
