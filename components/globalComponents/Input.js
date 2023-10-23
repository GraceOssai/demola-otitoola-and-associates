import React from 'react'

const Input = ({id, label, type, value, onChange, onBlur, placeholder, className}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${"border-[1px] outline-none border-primary-1 px-2 rounded text-primary-0"}  ${className}`}
      />
    </div>
  );
}

export default Input