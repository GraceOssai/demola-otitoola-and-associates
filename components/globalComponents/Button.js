import React from "react";

const Button = ({ children, type, onClickBtn, newStyle }) => {
  return (
    <button
      className={newStyle || 'flex items-center justify-center w-[134px] h-[48px] bg-primary-0 border-2 border-borderColor-0 rounded-lg text-white cursor-pointer'}
      type={type || "button"}
      onClick={onClickBtn}
    >
      {children}
    </button>
  );
};

export default Button;
