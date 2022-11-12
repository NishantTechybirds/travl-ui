/** @format */

import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-red-500 py-3 rounded-2xl text-white font-semibold text-sm w-11/12 text-center">
      {children}
    </button>
  );
};

export default Button;
