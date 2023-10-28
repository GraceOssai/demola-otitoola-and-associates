import React from 'react'
// import Image from 'next/image'


const IconInput = ({src, className}) => {
  return (
    <div className={`flex items-center bg-white ${className}`}>
      <div className="h-[22px] w-[15px] my-0 mx-[15px]">
        <img src={src} className="h-full w-full" priority loading="eager" alt='icon'/>
      </div>
      <input
        type="text"
        placeholder="Search for location"
        className="border-none  outline-none"
      />
    </div>
  );
}

export default IconInput