import React from 'react'



const Button = ({ children, className, type, onClickBtn }) => {
  const buttonStyles = {
    background: '' ? '#F3F3FA' : 'blue',
    padding: "10px 2%",
    border: "2px solid #F3F3FA",
    borderRadius: ".5rem",
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  }

  const buttonHover = {
    background : 'white'
  }

  return (
    <button 
      className={className}
      type={type || 'button'}
      onClick={onClickBtn}
      style={{
        ...buttonStyles,
        ...(className === {className} && buttonHover)
      }}
    >
      {children}
    </button>
  )
}

export default Button