import React from "react";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import heroImage from "../public/assets/images/heroImage.png";
import CustomSelectInput from "@/components/globalComponents/CustomSelectInput";
import IconInput from "@/components/globalComponents/IconInput";
import IconBtn from "@/components/globalComponents/IconBtn";
import ImageSlider from "@/components/globalComponents/ImageSlider";

const HomePage = () => {
  const images = [
    "/sliderImages/firstImage.png",
    "/sliderImages/secondImage.png",
    "/sliderImages/thirdImage.png",
    "/sliderImages/fourthImage.png",
  ];
  return (
    <Layout className="">
      <section className="relative flex justify-between items-center py-[15px] mx-14">
        <div className="w-[545px]">
          <h1 className="text-[4.05rem]">
            Morden Living <br /> for everyone
          </h1>
          <p className="text-[1.33rem] font-weight leading-[34.2px]">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
          <div className="absolute mt-[20px] left-0 bg-secondary-0 rounded-[4px] w-[737px] h-[104px] flex justify-evenly items-center">
            <CustomSelectInput type="text" placeholder="Property type" />
            <IconInput />
            <IconBtn text="Search" />
          </div>
        </div>
        <div>
          <Image src={heroImage} alt={"hero-image"} width={580} height={557} />
        </div>
      </section>
      <section className="w-full h-[920px] bg-secondary-0 mt-[80px]">
        <ImageSlider images={images} />
      </section>
    </Layout>
  );
};

export default HomePage;
