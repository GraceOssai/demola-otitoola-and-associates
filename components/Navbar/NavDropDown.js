import React, { useState } from "react";
import { navDropdown } from "./NavItems";
import Link from "next/link";

const NavDropDown = ({ onClickHandler }) => {
  // const [dropdown, setDropdown] = useState(false)

  // const dropdownHandler = () => {
  //   setDropdown(!dropdown)
  // }
  return (
    <div className={"w-[8rem] z-50 absolute top-18 text-center flex flex-col"}>
      {navDropdown.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            onClick={() => onClickHandler(false)}
            className="bg-primary-0 text-secondary-0 p-2 hover:bg-blue-500"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavDropDown;
