import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {

  return (
    <div className='relative mb-[15px]'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout