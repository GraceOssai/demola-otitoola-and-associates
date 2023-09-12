import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import Button from "../globalComponents/Button";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Property",
    link: "/",
  },
];
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full border-b py-4 shadow-custom-shadow px-14">
      <div className="h-[50px] w-[120px]">
        <Image
          src={logo}
          alt={"logo"}
          height={50}
          width={120}
          className="h-full w-full"
          priority
          loading="eager"
        />
      </div>
      <div className="flex space-x-8 items-center">
        {navLinks.map((navaData, index) => (
          <Link href={navaData.link} key={index}>
            {navaData.title}
          </Link>
        ))}
      </div>
      <Button>Contact</Button>
    </div>
  );
};

export default Navbar;
