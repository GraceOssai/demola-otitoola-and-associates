import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import classes from '../../styles/Layouts.module.css'

const Layout = ({children, className}) => {

  return (
    <div className={`${classes.layout} ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout