import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, label, i_id, i_class, name, val, onChng, onBlr } =
    props;
  return (
    <div className="flex flex-col justify-center items-center gap-[0.5rem]">
      <label htmlFor={label} className="w-full text-start">
        {label}
      </label>
      <input
        type={type}
        className="bg-[#FAD3B1] placeholder:text-[black]/50 placeholder:text-[0.875rem] px-3 py-2 outline-none w-[380px] text-black text-[0.875rem]  border transition-colors duration-100 border-solid focus:border-transparent "
        id={i_id}
        placeholder={placeholder}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlr}
      />
    </div>
  );
};

export default CustomInput;
