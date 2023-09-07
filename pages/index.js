import React from "react";
import Layout from "@/components/Layouts/Layout";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import heroImage from '../components/assets/images/heroImage.png'
import CustomSelectInput from "@/components/globalComponents/CustomSelectInput";
import IconInput from "@/components/globalComponents/IconInput";
import IconBtn from "@/components/globalComponents/IconBtn";
import Button from "@/components/globalComponents/Button";

const HomePage = () => {
  return (
    <Layout className={classes.home}>
      <section className={classes["section-one"]}>
        <div className={classes["hero-texts"]}>
          <h1>
            Morden Living <br /> for everyone
          </h1>
          <p>
            We provide a complete service for the sale, purchase <br /> or
            rental of real estate. We have been operating in <br /> Madrid and
            Barcelona more than 15 years.
          </p>
          <div className={classes.control}>
            <CustomSelectInput type="text" placeholder="Property type" />
            <IconInput />
            <IconBtn />
          </div>
        </div>
        <div>
          <Image src={heroImage} alt={"hero-image"} width={580} height={557} />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
