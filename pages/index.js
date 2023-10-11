import React from "react";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import heroImage from "../public/assets/images/heroImage.png";
import CustomSelectInput from "@/components/globalComponents/CustomSelectInput";
import IconInput from "@/components/globalComponents/IconInput";
import IconBtn from "@/components/globalComponents/IconBtn";
import ImageSlider from "@/components/globalComponents/ImageSlider";
import aboutImg from "../public/assets/images/aboutImg.png";
import Link from "next/link";
import searchIcon from '../public/assets/svg/searchIcon.svg';
import searchIconCircle from '../public/assets/svg/searchIconCircle.svg'
import Fade from 'react-reveal/Fade';

const HomePage = () => {

  const searchHandler = () => {
    console.log(searchIcon)
  }
  return (
    <Layout>
      <section className="relative flex justify-between items-center py-[15px] px-14">
      <Fade left>
        <div className="w-[545px]">
          <h1 className="text-[4.05rem] text-[#1C3988]">
            Morden Living <br /> for everyone
          </h1>
          <p className="text-[1.33rem] font-weight leading-[34.2px]">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
          <div className="absolute mt-[20px] ml-0 bg-secondary-0 rounded-[4px] w-[737px] h-[104px] flex justify-evenly items-center">
            <CustomSelectInput
              type="text"
              placeholder="Property type"
              propertyType="Property"
              options={["Option 1", "Option 2", "Option 3"]}
            />
            <IconInput src={searchIcon} />
            <IconBtn
              text="Search"
              src={searchIconCircle}
              IconBtnClick={searchHandler}
            />
          </div>
        </div>
      </Fade>
        

        <Fade right>
          <div>
          <Image src={heroImage} alt={"hero-image"} width={580} height={557} />
        </div>
        </Fade>
        
      </section>
      <section className="w-full h-[720px] bg-secondary-0 mt-[80px] pt-[30px]">
        <ImageSlider />
      </section>
      <section className="w-full h-[520px] py-[80px] px-14 flex justify-between gap-20">
      {/* <Fade left> */}
        <Image src={aboutImg} />
      {/* </Fade> */}
      <Fade right>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">About us</h1>
          <p>
            Our firm - Demola Otitoola and Associates is a Real Estate
            Consulting Organization established about Twenty-one (21) years ago.
            It is a firm of Chartered Estate Surveyors and Valuers registered
            under the Companies and Allied Matter Decree (1990) pursuant of
            section 659; and approved to carry out the below mentioned pertinent
            and specialized consultancy services by the{" "}
            <span className="text-[#1C3988]">
              Estate Surveyors and Valuers Registration Board of Nigeria
              (ESVARBON). We maintain branches in Lagos, Ibadan and Oshogbo.
            </span>
          </p>
          <div>
            <h3 className="text-xl font-bold">
              OUR SCOPE OF PROFESSIONAL SERVICES
            </h3>
            <p>
              We provide a wide range of services within the field of Estate
              Management and Development in both Rural and Urban areas. More
              especially our services can be grouped into the following
              department: Our professional services i.e. Estate Surveying and
              Valuation, covers the following: <br />
              <Link href="/about" className="text-[#1C3988]">
                Read more...
              </Link>
            </p>
          </div>
        </div>
      </Fade>
        
      </section>
    </Layout>
  );
};

export default HomePage;
