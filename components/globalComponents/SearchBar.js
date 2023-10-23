import React from "react";
import CustomSelectInput from "./CustomSelectInput";
import IconBtn from "./IconBtn";
import IconInput from "./IconInput";
import searchIcon from '../../public/assets/svg/searchIcon.svg'
import searchIconCircle from "../../public/assets/svg/searchIconCircle.svg";

// lg:flex-row lg:justify-evenly lg:
const SearchBar = ({ className, searchHandler }) => {
  return (
    <div
      className={`relative z-20 ${className} items-center justify-center gap-3 mt-[10px] bg-secondary-0 rounded-[4px] p-5`}
    >
      <CustomSelectInput
        type="text"
        placeholder="Property type"
        propertyType="Property"
        options={["Option 1", "Option 2", "Option 3"]}
        className="h-[56px] w-[100%] mb-5 lg:mb-0 md:w-[250px] lg:w-[205px]"
      />
      <IconInput
        src={searchIcon}
        className="h-[56px] mb-5 lg:mb-0 md:w-[250px] lg:w-[302px]"
      />
      <IconBtn
        text="Search"
        src={searchIconCircle}
        IconBtnClick={searchHandler}
        className=" p-4 h-[56px] md:w-[250px] lg:w-[150px]"
      />
    </div>
  );
};

export default SearchBar;
