import React from 'react'
import Layout from '@/components/Layouts/Layout'
import classes from '../styles/Home.module.css'


const HomePage = () => {
  return (
    <Layout className={classes.home}>
      <div>home page</div>
      I can have more contents here as it is my landing page
    </Layout>
  )
}

export default HomePage