import React from 'react'
import classes from '../../styles/IconInput.module.css'
import Image from 'next/image'
import searchIcon from '../assets/svg/searchIcon.svg'

const IconInput = () => {
  return (
    <div className={classes.iconInput}>
      <div className={classes['img-div']}>
        <Image src={searchIcon} className={classes.img} />
      </div>
      <input type="text" placeholder="Search for location" />
    </div>
  );
}

export default IconInput