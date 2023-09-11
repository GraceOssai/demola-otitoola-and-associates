import React, { useState } from 'react'
import IconBtn from './IconBtn';
import Image from 'next/image';
import Card from './Card';
import nextBtn from '../../public/assets/svg/nextBtn.svg'
import backBtn from '../../public/assets/svg/backBtn.svg'
import Button from './Button';

const ImageSlider = ({ images }) => {
  const text = [
    {
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      description: "5i large design apartment with terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
    {
      description: "Large 4-room apartment with a beautiful terrace",
      amount: "320,000",
      location: "Ibadan",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    console.log("Previous button clicked");
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    console.log("Next button clicked");
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="py-[15px] mx-14">
      <h1 className='text-5xl'>Top offers</h1>
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
      <div className="flex justify-between items-center">
        <div>counter</div>
        <div className="flex">
          <IconBtn
            onClick={prevImage}
            src={backBtn}
            style="h-16 w-16 rounded-full"
          />
          <IconBtn
            onClick={nextImage}
            src={nextBtn}
            style="h-16 w-16 rounded-full"
          />
        </div>
      </div>
      <Card>
        <Image
          src={images[currentImage]}
          width={391}
          height={259}
          alt="slider"
        />
        {text.map((item, index) => (
          <div key={index}>
            <p className="text-headerColor-1">{item.description}</p>
            <p>{item.amount}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default ImageSlider