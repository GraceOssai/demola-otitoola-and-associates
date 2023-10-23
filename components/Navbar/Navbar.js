import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { navLinks } from "./NavItems";
import NavDropDown from "./NavDropDown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = (val) => {
    setMenuOpen(val);
  };

  const mouseEnterHandler = (val) => {
    setDropdown(val);
  };

  return (
    <div className="flex justify-between items-center w-full border-b py-4 shadow-custom-shadow px-14 relative">
      <div className="h-[50px] w-[120px]">
        <Image
          src={logo}
          alt={"logo"}
          height={50}
          width={120}
          className="h-full w-full object-cover"
          priority
          loading="eager"
        />
      </div>
      <button
        className="text-2xl focus:outline-none"
        onClick={() => toggleMenu(true)}
      >
        &#9776;
      </button>
      {menuOpen && (
        <div className="z-50">
          <div className="fixed top-0 left-0 w-full h-screen bg-grey bg-opacity-90 backdrop-blur-lg p-4">
            <button
              className="text-2xl text-right focus:outline-none"
              onClick={() => toggleMenu(false)}
            >
              &#10006;
            </button>
            <div className="flex flex-col items-center mt-16 space-y-4 w-full h-20">
              {navLinks.map((item, index) => {
                if (item.title === "About us") {
                  return (
                    <div key={index} className="bg-red-700 relative h-20">
                      <div className="z-50 bg-yellow-500"
                        onClick={() => mouseEnterHandler(true)}
                      >
                        {item.title}
                      </div>
                      {/* {dropdown && <button onClick={() =>toggleMenu(false) } className="block">check</button>} */}
                      {dropdown && <NavDropDown onClick={toggleMenu} />}
                    </div>
                  );
                }
                return <Link key={index} href={item.link}>{item.title}</Link>;
              })}
            </div>
          </div>
        </div>
      )}
      {/* <ul className="hidden lg:flex space-x-8 items-center">
        {navLinks.map((item) => {
          if (item.title === "About us") {
            return (
              <li
                onClick={mouseEnterHandler}
              >
                <Link href={item.link}>{item.title}</Link>
                {dropdown && <NavDropDown />}
              </li>
            );
          }
          return (
            <li>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Navbar;
