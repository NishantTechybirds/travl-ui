/** @format */

import React from "react";

const Input = ({ id, children, placeholder }) => {
  return (
    <div className="">
      <label className="text-gray-600 text-sm font-semibold" htmlFor={id}>
        {children}
      </label>
      <input
        placeholder={placeholder}
        className="block w-11/12 py-2 px-4 border focus:border-none focus:ring-red-500  border-gray-400 rounded-2xl"
        id={id}
        type="text"
      />
    </div>
  );
};

export default Input;
