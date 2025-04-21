import React, { useState } from "react";

// practice code for useState hook practice
const Practice = ({items , heading}) => {
  

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(" ");

  const HandleOnclick_ = (fruitsName, index) => {
    console.log("Selected fruit: ", fruitsName);
    console.log("Selected index: ", index);

    setSelectedIndex(index);
    setSelectedFruit(fruitsName);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl bg-amber-400 p-3 font-bold text-center mt-4">
          {heading}
        </h1>
      </div>

      <div className="border-2 bg-amber-200 border-amber-500 rounded-lg p-4 mt-4 m-7">
        <ul>
          {items.map((fruitsName, index) => {
            return (
              <li
                key={fruitsName}
                onClick={() => HandleOnclick_(fruitsName, index)}
                className={
                  selectedIndex === index
                    ? "bg-amber-300 text-shadow-stone-950 font-medium rounded-lg p-3 m-3"
                    : "p-3 m-3"
                }
              >
                {fruitsName}
              </li>
            );
          })}
        </ul>
      </div>

      {selectedFruit && (
        <p className="text-center text-xl font-bold text-green-700">
          You selected: {selectedFruit}
        </p>
      )}
    </>
  );
};

export default Practice;
