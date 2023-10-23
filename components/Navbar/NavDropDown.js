import React, { useState } from "react";
import { navDropdown } from "./NavItems";
import Link from "next/link";

const NavDropDown = ({ onClick }) => {
  // const [dropdown, setDropdown] = useState(false)

  // const dropdownHandler = () => {
  //   setDropdown(!dropdown)
  // }
  return (
    <div className={"w-[8rem] z-50 absolute top-7 text-center flex flex-col"}>
      {navDropdown.map((item) => {
        return (
          <Link
            href={item.link}
            onClick={() => onClick(false)}
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
