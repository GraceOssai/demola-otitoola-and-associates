import React from 'react'
import Layout from '@/components/Layouts/Layout'
import Input from '@/components/globalComponents/Input';
import IconBtn from '@/components/globalComponents/IconBtn';
import searchIconCircle from '../public/assets/svg/searchIconCircle.svg';
import CustomSelectInput from '@/components/globalComponents/CustomSelectInput';
import PropertiesData from '../components/globalComponents/PropertiesData'
import Card from '@/components/globalComponents/Card';
import Image from 'next/image';


const properties = () => {

  const searchHandler = () => {

  }

  const searchBlurHandler = () => {

  }

  return (
    <Layout>
      <section className="flex flex-col justify-center items-center py-[50px]">
        <h1 className="text-[51.88px]">Search for an offer</h1>
        <p className="text-[21.25px]">
          Choose from the most advantageous offers
        </p>
      </section>
      <section className="w-full h-[450px] bg-secondary-0 mt-[80px] pt-[30px]">
        <div className="flex justify-center items-center gap-3">
          <Input
            type="text"
            placeholder="Enter a keyword"
            onChange={searchHandler}
            onBlur={searchBlurHandler}
          />
          <IconBtn src={searchIconCircle} text="Search" />
        </div>
        <h1 className="flex justify-center items-center my-12 text-4">
          Filter settings
        </h1>
        <div className="flex justify-center items-center gap-6">
          <CustomSelectInput
            options={["Sale Option", "Sale Option 1", "Sale Option 2"]}
          />
          <CustomSelectInput
            options={["Room Option", "Room Option 1", "Room Option 2"]}
          />
          <CustomSelectInput
            options={[
              "Location Option",
              "Location Option 1",
              "Location Option 2",
            ]}
          />
          <CustomSelectInput
            options={[
              "Expensive Option",
              "Expensive Option 1",
              "Expensive Option 2",
            ]}
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-center items-start gap-6 px-4">
        {PropertiesData.map((property, index) => (
          <Card key={index} className="h-auto mt-16 ">
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
      </section>
    </Layout>
  );
}

export default properties