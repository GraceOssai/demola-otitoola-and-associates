import React,{useState} from 'react'
import { navDropdown } from './NavItems'
import Link from 'next/link'

const NavDropDown = () => {
  const [dropdown, setDropdown] = useState(false)

  const dropdownHandler = () => {
    setDropdown(!dropdown)
  }
  return (
    <ul className={dropdown ? 'hidden' : "w-[8rem] absolute text-center"} onClick={dropdownHandler}>
      {navDropdown.map((item) => {
        return (
          <li className="bg-primary-0 text-secondary-0 p-2 hover:bg-blue-500 bg-opacity-100 hover:bg-opacity-50">
            <Link href={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavDropDown