import React from "react";
import { useState } from "react";

const List = ({items , heading}) => {

  const [ selectedfruitsName , setFruitsName] = useState(" ");

  const HandleOnClick = (item) => {
    setFruitsName(item);
    console.log('selected item: ' , item);
  }


  return (
    <div className="border-2 bg-amber-200 border-amber-500 rounded-lg p-4 mt-4 ml-7">
      <h1 className="font-bold text-2xl  text-shadow-stone-950 items-center text-center bg-amber-400 p-2 rounded-sm w-full"> {heading} </h1>
      <ul className="list-disc list-inside pl-2.5 p-3">
        {items.map((item) => (
          <li
            onClick={ () => HandleOnClick(item)}
            key={item}
            className= {
              selectedfruitsName === item ? "bg-amber-300 text-shadow-stone-950 font-medium rounded-lg p-3 m-3" : " "
            }
          >
            {item} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
