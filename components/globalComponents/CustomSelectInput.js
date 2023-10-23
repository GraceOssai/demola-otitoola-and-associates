import React from "react";


const CustomSelectInput = ({ options, className }) => {
  return (
    <select
      className={`text-[#4764C3] w-[15rem] py-1 px-2 border-[1px] outline-none border-[#4764C3] rounded ${className} flex`}
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
