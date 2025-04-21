import React from "react";


const Button = ({ handleClick, children, color = "primary" , className=" " }) => {
  const buttonColor = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
    warning: "bg-yellow-500 hover:bg-yellow-700",
    info: "bg-cyan-500 hover:bg-cyan-700",
    success: "bg-green-500 hover:bg-green-700",
    dark: "bg-gray-500 hover:bg-gray-700",
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} m-7 px-3 py-2 rounded-md text-black text-md cursor-pointer transition duration-300 ${buttonColor[color]}`}
    >
      {children}
    </button>
  );
};

export default Button;
