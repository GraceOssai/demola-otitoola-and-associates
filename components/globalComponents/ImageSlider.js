import React, { useState } from "react";
import Card from "./Card";
import Carousel from "react-simply-carousel";
import Image from "next/image";
import Link from "next/link";
import PropertiesData from '../globalComponents/PropertiesData'


const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
 
  
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
        <Link
          href="./Products"
          className="text-[#1C3988] w-[160px] px-[15px] py-[10px] rounded bg-transparent border-[1px] border-solid border-[#1C3988]"
        >
          Show all offers
        </Link>
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
        {PropertiesData.map((property, index) => (
          <Card key={index} className="h-auto mt-16">
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
      </Carousel>
    </div>
  );
};

export default ImageSlider;
