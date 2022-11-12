/** @format */

import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#e23428] py-3 rounded-2xl text-white font-semibold text-sm w-full text-center">
      {children}
    </button>
  );
};

export default Button;
