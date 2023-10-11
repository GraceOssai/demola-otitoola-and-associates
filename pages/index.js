import React from "react";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import heroImage from "../public/assets/images/heroImage.png";
import aboutImg from "../public/assets/images/aboutImg.png";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import SearchBar from "@/components/globalComponents/SearchBar";
import Carousel from "@/components/globalComponents/Carousel";
// import ImageSlider from "@/components/globalComponents/ImageSlider"; // Import ImageSlider

const HomePage = () => {
  const searchHandlerFtn = () => {};

  return (
    <Layout>
      <section className="relative flex justify-between items-center py-[15px] px-14">
        <Fade left>
          <div className="w-full lg:w-[545px]">
            <h1 className="text-[2.05rem] text-[#1C3988] lg:text-[4.05rem]">
              Modern Living <br /> for everyone
            </h1>
            <p className="text-[1.33rem] font-weight leading-[34.2px]">
              We provide a complete service for the sale, purchase, or rental of
              real estate. We have been operating in Madrid and Barcelona for more
              than 15 years.
            </p>
            <SearchBar
              className="hidden lg:flex w-[737px]"
              searchHandler={searchHandlerFtn}
            />
          </div>
        </Fade>

        <Fade right>
          <div>
            <Image src={heroImage} alt={"hero-image"} width={580} height={557} />
            <div style={{ backgroundColor: "pink", width: '50%'}}>
              {/* <HomeSlider /> */}
            </div>
          </div>
        </Fade>
      </section>

      {/* <section className="w-full h-[720px] bg-secondary-0 mt-[80px] pt-[30px]">
        <ImageSlider />
      </section> */}

      <section className="w-full px-14 flex justify-between gap-20">
        <SearchBar
          className="flex flex-col w-[80%] lg:hidden"
          searchHandler={searchHandlerFtn}
        />
      </section>

      <Carousel style="mt-[120px]" />

      <section className="w-full h-[520px] px-14 flex justify-between gap-20">
        <Image src={aboutImg} />
        {/* </Fade> */}
        <Fade right>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl">About us</h1>
            <p>
              Our firm - Demola Otitoola and Associates is a Real Estate
              Consulting Organization established about Twenty-one (21) years ago.
              It is a firm of Chartered Estate Surveyors and Valuers registered
              under the Companies and Allied Matter Decree (1990) pursuant to
              section 659, and approved to carry out the below-mentioned pertinent
              and specialized consultancy services by the{" "}
              <span className="text-[#1C3988]">
                Estate Surveyors and Valuers Registration Board of Nigeria
                (ESVARBON). We maintain branches in Lagos, Ibadan, and Oshogbo.
              </span>
            </p>
            <div>
              <h3 className="text-xl font-bold">
                OUR SCOPE OF PROFESSIONAL SERVICES
              </h3>
              <p>
                We provide a wide range of services within the field of Estate
                Management and Development in both Rural and Urban areas. More
                specifically, our services can be grouped into the following
                department: Our professional services, i.e., Estate Surveying and
                Valuation, cover the following: <br />
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


