import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`'rounded-2xl h-auto w-[350px] bg-white' ${className}`}>
      {children}
    </div>
  );
}

export default Card