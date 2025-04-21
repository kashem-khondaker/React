import React, { useState } from "react";
import { CircleX } from 'lucide-react';

const alertStyles = {
  primary: "bg-blue-100 text-blue-800 border-blue-300",
  danger: "bg-red-100 text-red-800 border-red-300",
  success: "bg-green-100 text-green-800 border-green-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-cyan-100 text-cyan-800 border-cyan-300",
  dark: "bg-gray-100 text-gray-800 border-gray-300",
};

const Alert = ({ children, color = "primary"  , onClose}) => {


  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 ml-3 mr-3 mt-2 rounded-md shadow-md transition-all duration-300 ease-in-out mb-4 ${
        alertStyles[color] 
      }`}
    >
      <span className="text-md font-medium">{children}</span>
      <button
        onClick={onClose}
        className="ml-4 text-lg font-bold text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <CircleX className="text-green-700 hover:text-red-500"/>
      </button>
    </div>
  );
};

export default Alert;
