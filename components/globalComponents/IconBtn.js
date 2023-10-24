import React from "react";
import Image from "next/image";


const IconBtn = ({ IconBtnClick, text, src, className }) => {
  return (
    <button
      className={`flex items-center justify-center space-x-[20px] px-4 py-2 text-white text-base font-bold bg-primary-0 rounded border-none ${className}`}
    >
      <div className="h-[16px] w-[16px]">
        <Image
          src={src}
          className="h-full w-full"
          priority
          loading="eager"
          onClick={IconBtnClick}
          alt={text}
        />
      </div>
      <span>{text}</span>
    </button>
  );
};

export default IconBtn;
