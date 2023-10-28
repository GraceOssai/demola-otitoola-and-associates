import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { navLinks } from "./NavItems";
import NavDropDown from "./NavDropDown";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname

  const toggleMenu = (val) => {
    setMenuOpen(val);
  };

  const mouseEnterHandler = (val) => {
    setDropdown(val);
  };

  return (
    <div className="flex justify-between items-center w-full border-b py-4 shadow-custom-shadow px-14 relative">
      <div className="h-[50px] w-[120px]">
        <img
          src={logo}
          alt={"logo"}
          height={50}
          width={120}
          className="h-full w-full object-cover"
          priority
          loading="eager"
        />
      </div>
      {/* hamburger menu btn */}
      <button
        className="text-2xl focus:outline-none md:hidden"
        onClick={() => toggleMenu(true)}
      >
        &#9776;
      </button>
      {menuOpen && (
        <div className="z-50">
          <div className="fixed top-0 left-0 w-full h-screen bg-grey bg-opacity-90 backdrop-blur-lg p-4">
            {/* close btn */}
            <button
              className="text-2xl text-right focus:outline-none"
              onClick={() => toggleMenu(false)}
            >
              &#10006;
            </button>
            {/* The list items on a smaller screen */}
            <div className="flex flex-col items-center mt-16 space-y-4 w-full h-20 cursor-pointer">
              {navLinks.map((item, index) => {
                if (item.title === "About us") {
                  return (
                    <div key={index} className="relative h-20">
                      <div
                        className="z-50"
                        onClick={() => mouseEnterHandler(true)}
                      >
                        {item.title}
                      </div>
                      {dropdown && <NavDropDown onClickHandler={toggleMenu} />}
                    </div>
                  );
                }
                return (
                  <Link key={index} href={item.link}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* The list item on desktop screen */}
      <div className="hidden md:flex space-x-8 items-center cursor-pointer">
        {navLinks.map((item, index) => {
          const activeStyle = activeLink === item.link ? "border-b border-primary-0" : '';
          if (item.title === "About us") {
            const activeStyle = activeLink.startsWith(item.link) ? "border-b border-primary-0" : '';
            return (
              <div key={index} onClick={mouseEnterHandler}>
                <div onClick={() => mouseEnterHandler(true)} className={activeStyle}>{item.title}</div>
                {dropdown && <NavDropDown onClickHandler={toggleMenu} />}
              </div>
            );
          }
          return (
            <Link key={index} href={item.link} className={activeStyle}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
