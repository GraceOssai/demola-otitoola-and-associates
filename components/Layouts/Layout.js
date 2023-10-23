import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children, className}) => {

  return (
    <div className={`'relative' ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

// {className=`'' ${className}`}
export default Layout