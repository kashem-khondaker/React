import React, { useState } from "react";

const FirstComponent = ({ items, heading }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1); // Better to use -1 for no selection
  const [selectedItem, setSelectedItem] = useState(null); // More generic name since items might not be fruits

  const handleClick = (item, index) => {
    setSelectedIndex(index);
    setSelectedItem(item);
    console.log("Selected:", item, "at index:", index); // Helpful for debugging
  };

  return (
    <div className="component-container">
      <div>
        <h1 className="text-2xl bg-amber-400 p-3 font-bold text-center mt-4">
          {heading}
        </h1>
      </div>
      
      <div className="border-2 bg-amber-200 border-amber-500 rounded-lg p-4 mt-4 m-7">
        <ul>
          {items.map((item, index) => ( 
            <li
              key={item}
              onClick={() => handleClick(item, index)}
              className={
                selectedIndex === index
                  ? "bg-amber-300 text-shadow-stone-950 font-medium rounded-lg p-3 m-3 cursor-pointer"
                  : "p-3 m-3 cursor-pointer hover:bg-amber-100"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {selectedItem && (
        <div className="text-center text-xl font-bold text-green-700 mt-4">
          You selected: {selectedItem}
        </div>
      )}
    </div>
  );
};

export default FirstComponent;