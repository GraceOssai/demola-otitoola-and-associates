import React from 'react'
import Image from 'next/image'
import searchIcon from '../../public/assets/svg/searchIcon.svg'

const IconInput = ({src}) => {
  return (
    <div className="flex items-center ml-2 w-[302px] h-[56px] bg-white">
      <div className="h-[22px] w-[15px] my-0 mx-[15px]">
        <Image src={src} className="h-full w-full" priority loading='eager' />
      </div>
      <input
        type="text"
        placeholder="Search for location"
        className="border-none"
      />
    </div>
  );
}

export default IconInput