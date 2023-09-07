import React from "react";
import Layout from "@/components/Layouts/Layout";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import heroImage from '../components/assets/images/heroImage.png'

const HomePage = () => {
  return (
    <Layout className={classes.home}>
      <section className={classes["section-one"]}>
        <div className={classes['hero-texts']}>
          <h1>
            Morden Living <br /> for everyone
          </h1>
          <p>
            We provide a complete service for the sale, purchase <br /> or
            rental of real estate. We have been operating in <br /> Madrid and
            Barcelona more than 15 years.
          </p>
        </div>
        <div>
          <Image src={heroImage} alt={'hero-image'} width={580} height={557} />
        </div>
        <div>
          <input type="text" />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
