/** @format */

import { useField } from "formik";
import React from "react";

const Input = ({ id, children, placeholder, type, name, ...rest }) => {
  const field = useField(name);
  return (
    <div className="space-y-1">
      <label className="text-[#6e6e6e] text-sm font-bold" htmlFor={id}>
        {children}
      </label>
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={name}
        id={id}
        placeholder={placeholder}
        className="block w-full py-2 border px-6 focus:border-none focus:ring-red-500  border-gray-400 rounded-2xl"
        type={type || "text"}
        {...rest}
      />
    </div>
  );
};

export default Input;
