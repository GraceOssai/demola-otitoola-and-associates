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
          <h1 className="border-b-4 border-solid border-black rounded">
            About Us
          </h1>
          <p className="text-2xl">Demola Otitoola & Associates</p>
        </div>
      </section>
      <section className="px-14 py-[70px] bg-secondary-0 gap-12 relative">
        <Image src={aboutImg} />
        <Card className="bg-white w-[650px] rounded-2xl py-[10px] px-[25px] absolute top-36 right-12 bottom-32">
          <h2 className="text-center text-2xl text-[#1C3988] font-bold leading-loose mb-4">
            OUR FIRM’S PROFILE
          </h2>
          <p>
            Our firm -{" "}
            <span className="text-[#1C3988]">
              Demola Otitoola and Associates
            </span>{" "}
            is a Real Estate Consulting Organization established about
            Twenty-six (26) years ago. It is a firm of Chartered Estate
            Surveyors and Valuers registered under the Companies and Allied
            Matter Decree (1990) pursuant of section 659; and approved to carry
            out the below mentioned pertinent and specialized consultancy
            services by the{" "}
            <span className="text-[#1C3988]">
              Estate Surveyors and Valuers Registration Board of Nigeria
              (ESVARBON). We maintain branches in Lagos, Ibadan and Oshogbo.
            </span>
          </p>
        </Card>
      </section>
      <section className="px-14 py-[70px] bg-white gap-12 py-[50px]">
        <div className="flex justify-between items-end">
          <Card className="h-full bg-[#1C3988] w-[600px] rounded-2xl px-[25px] py-[10px] text-white">
            <h1 className="text-center text-2xl font-bold leading-loose mb-4">
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
          <Image src={heroImage} width={500} />
        </div>
      </section>
    </Layout>
  );
};

export default about;
