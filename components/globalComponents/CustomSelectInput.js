import React from "react";

const propTypes = [
  "l'll ask for more Property type",
  "Property type",
  "Property type",
];
const CustomInput = () => {
  return (
    <select className="w-[205px] h-[56px] text-[#4764C3] py-0 px-[16px] border-[1px] outline-none border-[#4764C3]">
      <option value="">Property type</option>
      {propTypes.map((propType, index) => (
        <option value={propType} key={index}>{propType}</option>
      ))}
    </select>
  );
};

export default CustomInput;
