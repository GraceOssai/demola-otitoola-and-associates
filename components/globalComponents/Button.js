import React from 'react'
import classes from '../../styles/Button.module.css'



const Button = ({ children, type, onClickBtn, newStyle }) => {
 
  console.log(newStyle)
  return (
    <button
      className={ newStyle || classes.buttonStyles}
      type={type || "button"}
      onClick={onClickBtn}
      
    >
      {children}
    </button>
  );
}

export default Button