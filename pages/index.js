import React from "react";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import heroImage from "../public/assets/images/heroImage.png";
import aboutImg from "../public/assets/images/aboutImg.png";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import SearchBar from "@/components/globalComponents/SearchBar";
import Carousel from "@/components/globalComponents/Carousel";
import Head from "next/head";
// import ImageSlider from "@/components/globalComponents/ImageSlider"; // Import ImageSlider

const HomePage = () => {
  const searchHandlerFtn = () => {};

  return (
    <>
      <Head>
        <title>
          Janet Memorial Hospital - Exceptional Healthcare Services.
        </title>
        <meta
          name="description"
          content="Discover comprehensive healthcare services at Janet Memorial Hospital. We provide state-of-the-art medical facilities, expert physicians, and compassionate care to improve your well-being. We are committed to providing exceptional healthcare services tailored to meet the needs of our community, we strive to be the leading healthcare institution in the region Contact us today."
        />
        <meta
          property="og:title"
          content="Janet Memorial Hospital - Exceptional Healthcare Services"
        />
        <meta
          property="og:description"
          content="Discover comprehensive healthcare services at Janet Memorial Hospital. We provide state-of-the-art medical facilities, expert physicians, and compassionate care to improve your well-being. We are committed to providing exceptional healthcare services tailored to meet the needs of our community, we strive to be the leading healthcare institution in the region Contact us today."
        />
        <meta
          property="og:image"
          content="/janet-hospital-images/logo/janet-memorial-hospital-logo.png"
        />
        <meta property="og:url" content="https://janetmemorialhospital.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <section className="relative flex flex-col justify-between items-center py-[15px] px-5 md:flex-row md:px-14">
          <Fade left>
            <div className="w-full lg:w-[545px]">
              <h1 className="text-[2.05rem] text-[#1C3988] lg:text-[4.05rem] md:flex md:flex-col md:justify-center">
                Modern Living <br /> for everyone
              </h1>
              <p className="text-[1.33rem] font-weight leading-[34.2px]">
                We provide a complete service for the sale, purchase, or rental
                of real estate. We have been operating in Madrid and Barcelona
                for more than 15 years.
              </p>
              <SearchBar
                className="hidden lg:flex w-[40rem]"
                searchHandler={searchHandlerFtn}
              />
            </div>
          </Fade>
          <Fade right>
            <div>
              <Image
                src={heroImage}
                alt={"hero-image"}
                width={580}
                height={557}
              />
            </div>
          </Fade>
        </section>

        <SearchBar
          className="flex flex-col mx-auto lg:hidden w-[40rem]"
          searchHandler={searchHandlerFtn}
        />
        <Carousel style="mt-5 md:mt-[120px]" />

        <section className="w-full px-5 flex flex-col justify-between gap-20 md:flex-row md:px-14">
          <div className="h-[200px] w-full md:h-[350px] md:w-[50%] lg:h-[471px]">
            <Image src={aboutImg} className="h-full w-full object-cover" />
          </div>
          <Fade right>
            <div className="flex flex-col gap-5 md:w-[50%]">
              <h1 className="text-3xl md:text-5xl">About us</h1>
              <p className="text-sm md:text-[17px]">
                Our firm - Demola Otitoola and Associates is a Real Estate
                Consulting Organization established about Twenty-one (21) years
                ago. It is a firm of Chartered Estate Surveyors and Valuers
                registered under the Companies and Allied Matter Decree (1990)
                pursuant to section 659, and approved to carry out the
                below-mentioned pertinent and specialized consultancy services
                by the{" "}
                <span className="text-[#1C3988]">
                  Estate Surveyors and Valuers Registration Board of Nigeria
                  (ESVARBON). We maintain branches in Lagos, Ibadan, and
                  Oshogbo.
                </span>
              </p>
              <div>
                <h3 className="text-xl font-bold">
                  OUR SCOPE OF PROFESSIONAL SERVICES
                </h3>
                <p className="text-sm md:text-[17px]">
                  We provide a wide range of services within the field of Estate
                  Management and Development in both Rural and Urban areas. More
                  specifically, our services can be grouped into the following
                  department: Our professional services, i.e., Estate Surveying
                  and Valuation, cover the following: <br />
                  <Link href="/companyProfile" className="text-[#1C3988]">
                    Read more...
                  </Link>
                </p>
              </div>
            </div>
          </Fade>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
