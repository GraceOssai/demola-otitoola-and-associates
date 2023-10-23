import React from 'react'
import Card from '@/components/globalComponents/Card'
import Layout from '@/components/Layouts/Layout'
import Image from 'next/image'

const ceoProfile = () => {
  return (
    <Layout>
      <div className="bg-secondary-0 w-[100%] h-[100vh] flex justify-center items-center  md:flex md:justify-center md:items-center">
        <Card className="bg-white text-sm text-primary-0 rounded-2xl p-9 shadow-2xl md:bg-primary-0 md:w-[50%] md:rounded-2xl md:mt-20 md:text-white">
          <h1 className="font-bold mb-4 md:text-center md:text-2xl md:font-bold leading-loose md:mb-4">
            Demola Otitoola Orulopo
          </h1>
          <p>
            ESV. Otitoola was educated at The Polytechnic, Ibadan (1982 – 1986)
            where he graduated with a Higher National Diploma (Estate
            Management). He is a Fellow member of Nigerian Institution of Estate
            Surveyors and Valuers and a Registered Member of Estate Surveyors
            and Valuers Registered Board of Nigeria (ESVARBON). He had worked
            with Old Bendel Development Property Authority, Benin City (1987);
            Federal Ministry of Works and Housing (Lands Division) 1981;
            Onakanmi &amp; Partners (1987 – 1994); Open Gate Group (1995 –
            1996); Vicad Properties Ltd; as an Executive Director (1996) and
            Olatunde Adeyemi &amp; Associates as a Senior Estate Surveyor 1997).
            In December, 1997, he entered into private practice in the name of
            Demola Otitoola &amp; Associates (a firm of Registered Estate
            Surveyors and Valuers) of which he is the Managing partner.
          </p>
        </Card>
        {/* <div>
          <Image src={heroImage} />
        </div> */}
      </div>
    </Layout>
  );
}

export default ceoProfile