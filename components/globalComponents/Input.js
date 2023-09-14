import React from 'react'

const Input = ({id, label, type, value, onChange, onBlur, placeholder, className}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${"w-[260px] h-[48px] border-[1px] outline-none border-[#4764C3] px-2 text-[#141B2D]"}  ${className}`}
      />
    </div>
  );
}

export default Input