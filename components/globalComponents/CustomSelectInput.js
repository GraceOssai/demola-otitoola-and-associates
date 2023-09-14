import React from "react";


const CustomSelectInput = ({ options }) => {
  return (
    <select className="w-[205px] h-[56px] text-[#4764C3] py-0 px-[16px] border-[1px] outline-none border-[#4764C3]">
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};


export default CustomSelectInput;
