import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/svg/logo.svg'
import classes from '../../styles/Navbar.module.css'



const Navbar = () => {
  
  return (
    <div className={classes.nav}>
      <Image src={logo} alt={'logo'}/>
      <div>
        <Link href='./'>Home</Link>
        <Link href='./about'>About</Link>
        <Link href='./properties'>Properties</Link>
      </div>
      <Link href='./contact' className={classes.contact}>Contact</Link>
    </div>
  )
}

export default Navbar