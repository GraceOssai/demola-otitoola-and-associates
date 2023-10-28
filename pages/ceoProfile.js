import React from "react";
import Card from "@/components/globalComponents/Card";
import Layout from "@/components/Layouts/Layout";
// import Image from "next/image";
import ceoMain from "../public/assets/images/ceoMain.png";
import Head from "next/head";

const CeoProfile = () => {
  return (
    <>
      <Head>
        <title>
          Demola Otitoola & Associates - Exceptional Real Estate Services.
        </title>
        <meta
          name="description"
          content="We provide a wide range of services within the field of Estate Management and Development in both Rural and Urban areas."
        />
        <meta
          property="og:title"
          content="Demola Otitoola & Associates - Exceptional Real Estate Services"
        />
        <meta
          property="og:description"
          content="We provide a wide range of services within the field of Estate Management and Development in both Rural and Urban areas."
        />
        <meta
          property="og:image"
          content="/janet-hospital-images/logo/janet-memorial-hospital-logo.png"
        />
        <meta property="og:url" content="https://janetmemorialhospital.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="bg-secondary-0 h-auto flex flex-col items-center gap-6 py-10 px-5 lg:px-10 lg:flex-row lg:justify-between lg:items-center">
          <div className=" border-[10px] w-full border-grey-100 rounded-bl-[7rem] rounded-tr-[7rem] overflow-hidden md:border-[20px] md:h-[500px] md:w-[500px]">
            <img
              src={ceoMain}
              height={400}
              width={500}
              alt="ceo"
              className="h-full w-full object-cover"
            />
          </div>
          <Card className=" bg-white text-sm text-primary-0 rounded-2xl px-16 py-9 shadow-2xl md:bg-primary-0 md:w-[50%] md:rounded-2xl md:mt-20 md:text-white">
            <h1 className="font-bold mb-4 md:text-center md:text-2xl md:font-bold leading-loose md:mb-4">
              Demola Otitoola Orulopo
            </h1>
            <p>
              ESV. Otitoola was educated at The Polytechnic, Ibadan (1982 –
              1986) where he graduated with a Higher National Diploma (Estate
              Managment). He is a Fellow member of Nigerian Institution of
              Estate Surveyors and Valuers and a Registered Member of Estate
              Surveyors and Valuers Registered Board of Nigeria (ESVARBON). He
              had eworked with Old Bendel Development Property Authority, Benin
              City (1987); Federal Ministry of Works and Housing (Lands
              Division) 1981; Onakanmi &amp; Partners (1987 – 1994); Open Gate
              Group (1995 – 1996); Vicad Properties Ltd; as an Executive
              Director (1996) and Olatunde Adeyemi &amp; Associates as a Senior
              Estate Surveyor 1997). In December, 1997, he entered into private
              practice in the name of Demola Otitoola &amp; Associates (a firm
              of Registered Estate Surveyors and Valuers) of which he is the
              Managing partner.
            </p>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default CeoProfile;
