import React from "react";
import Image from "next/image";


const IconBtn = ({ IconBtnClick, text, src, style }) => {
  return (
    <button
      className={
        style ||
        "flex items-center justify-center	space-x-[20px] h-[56px] w-[156px] text-white text-base font-bold bg-primary-0 rounded border-none"
      }
    >
      <div className="h-[16px] w-[16px]">
        <Image
          src={src}
          className="h-full w-full"
          priority
          loading="eager"
          onClick={IconBtnClick}
        />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default IconBtn;
