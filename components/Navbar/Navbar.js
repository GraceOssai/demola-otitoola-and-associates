import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.jpeg";
import classes from "../../styles/Navbar.module.css";
import Button from "../globalComponents/Button";

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <Image src={logo} alt={"logo"} height={50} width={120} />
      <div className={classes.addresses}>
        <Link href="./">Home</Link>
        <Link href="./about">About</Link>
        <Link href="./properties">Properties</Link>
      </div>
      <Button type={props.type}>Contact</Button>
    </div>
  );
};

export default Navbar;
