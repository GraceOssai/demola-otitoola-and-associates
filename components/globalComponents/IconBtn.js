import React from "react";
import classes from "../../styles/IconBtn.module.css";
import Image from "next/image";
import searchIconCircle from "../assets/svg/searchIconCircle.svg";

const IconBtn = () => {
  return (
    <button className={classes["icon-btn"]}>
      <div className={classes["btn-div"]}>
        <Image
          src={searchIconCircle}
          className={classes.btnImg}
          priority
          loading="eager"
        />
      </div>
      <p>Search</p>
    </button>
  );
};

export default IconBtn;
