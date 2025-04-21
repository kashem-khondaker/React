import React from "react";
import { useState } from "react";

const NewComponent = ({ items, heading }) => {
  //   const [selectedItems, setItem] = useState(" ");

//   const countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan"];
  const [selectedIndex, setIndex] = useState(-1);

  const HandleOnClick = (item, index) => {
    // setItem(item);
    setIndex(index);

    console.log(item);
    console.log(index);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-black "> {heading} </h1>
        <div className="bg-amber-300 max-w-[400px] p-4 mt-10 text-center">
          <ul className="text-sm font-bold ">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => HandleOnClick(item, index)}
                className={
                  selectedIndex === index
                    ? "bg-amber-400 text-shadow-stone-950 font-medium rounded-lg p-3 m-3"
                    : "p-3 m-3 "
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewComponent;
