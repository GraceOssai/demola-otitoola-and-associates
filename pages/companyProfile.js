import React from "react";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import heroImage from "../public/assets/images/heroImage.png";
import aboutImg from "../public/assets/images/aboutImg.png";
import Card from "@/components/globalComponents/Card";

const about = () => {
  return (
    <Layout>
      <section className=" h-[300px] w-full mt-[60px] bg-[url('../public/assets/images/mainAbout.png')] bg-cover bg-center">
        <div className="w-full h-full pt-[25px] flex flex-col justify-center gap-[7px] items-center text-secondary-0 bg-primary-2">
          <h1 className="border-b-4 border-solid border-red-700 rounded md:border-b-4 md:border-solid md:border-black md:rounded">
            About Us
          </h1>
          <p className=" text-sm md:text-2xl">Demola Otitoola & Associates</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 py-[40px] bg-secondary-0 md:px-14 md:py-[70px] md:bg-secondary-0 md:gap-12 md:flex-row md:justify-start md:relative">
        <div className="h-[200px] w-[300px] md:h-[471px] md:w-[628px]">
          <Image
            src={aboutImg}
            height={471}
            width={628}
            className="h-full w-full object-cover"
          />
        </div>
        <Card className="bg-primary-0 w-auto rounded-2xl px-[15px] py-10 mx-5 text-center text-secondary-0 md:bg-white md:w-[650px] md:rounded-2xl md:text-black md:px-[25px] md:absolute md:top-36 md:right-12 md:bottom-32 md:mx-0">
          <h2 className="text-sm text-white font-bold md:text-center md:text-2xl md:text-primary-0 md:font-bold md:leading-loose mb-4">
            OUR FIRM’S PROFILE
          </h2>
          <p className="text-center">
            Our firm &nbsp;
            <span className="font-semibold underline md:text-primary-0">
              Demola Otitoola and Associates
            </span>{" "}
            is a Real Estate Consulting Organization established about
            Twenty-six (26) years ago. It is a firm of Chartered Estate
            Surveyors and Valuers registered under the Companies and Allied
            Matter Decree (1990) pursuant of section 659; and approved to carry
            out the below mentioned pertinent and specialized consultancy
            services by the{" "}
            <span className="text-white md:text-primary-0">
              Estate Surveyors and Valuers Registration Board of Nigeria
              (ESVARBON). We maintain branches in Lagos, Ibadan and Oshogbo.
            </span>
          </p>
        </Card>
      </section>
      <section className="px-7 py-[70px] bg-secondary-0">
        <div className="flex flex-col gap-10 md:w-[100%] md:flex md:flex-row md:justify-between md:items-center">
          <Card className="w-auto rounded-2xl bg-primary-1 px-14 py-[50px] text-secondary-0 md:h-full md:bg-primary-0 md:w-[600px] md:rounded-2xl">
            <h1 className="text-sm text-center font-bold mb-4 md:text-center md:text-2xl md:text-secondary-0 md:font-bold leading-loose md:mb-4">
              OUR SCOPE OF PROFESSIONAL SERVICES
            </h1>
            <p>
              We provide a wide range of services within the field of Estate
              Management and Development in both Rural and Urban areas. More
              especially our services can be grouped into the following
              department: Our professional services i.e. Estate Surveying and
              Valuation, covers the following:
            </p>
            <ul className="list-disc mt-2">
              <li>Valuation for all purposes</li>
              <li>Property Management</li>
              <li>Facility Management</li>
              <li>Pre-development Appraisal and Project Management</li>
              <li>Estate Agency</li>
              <li>Property Financing and Development</li>
              <li>Property Development and Design</li>
              <li>and General Real Estate Consultancy Works</li>
            </ul>
          </Card>
          <div className="h-[300px] w-[100%] md:h-[400px] md:w-1/2">
            <Image
              src={heroImage}
              height={471}
              width={628}
              className="object-cover h-full w-full "
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
