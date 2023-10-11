import React from "react";


const CustomSelectInput = ({ options, className }) => {
  return (
    <select
      className={`text-[#4764C3] py-0 px-[16px] border-[1px] outline-none border-[#4764C3] ${className}`}
    >
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};


export default CustomSelectInput;
