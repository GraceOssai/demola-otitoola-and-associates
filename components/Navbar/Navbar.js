import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { navLinks } from "./NavItems";
import NavDropDown from "./NavDropDown";



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
        {navLinks.map((navData, index) => ( 
          <Link href={navData.link} key={index}>
            <div
              className={
                navData.title === "Contact us"
                  ? "w-auto border-2 py-2 px-4 rounded shadow-inner bg-primary-0 text-secondary-0 hover:bg-secondary-0 hover:text-primary-0 transform scale-110 transition-transform"
                  : "text-primary-0 "
              }
            >
              {navData.title}
            </div>
          </Link>
        ))}
      </div>
      <NavDropDown />
    </div>
  );
};

export default Navbar;
