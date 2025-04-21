import { useState } from "react";
import React from "react";

const Person = () => {
  const [personInfo, setPersonInfo] = useState({
    firstName: "Your first name",
    lastName: "your last name",
    age: "your age",
    email: "email@example.com",
    address : {
        street: "Street 1",
        city: "City 1",
        state: "State 1",
        country: "Country 1",
    }
  });
  const [personLastName, setPersonLastName] = useState("");

  const HandleOnClick = () => {
    const newPersoneInfo = {
      ...personInfo,
      address: {
        ...personInfo.address,
        street: "dhanmondi"
      }
    };
    setPersonInfo(newPersoneInfo);
    console.log("button Clicked !");
  };

  return (
    <div className="m-5">
      <h1>
        {" "}
        {personInfo.firstName} {" "}
        {personInfo.lastName} ,
        {personInfo.age},
        {personInfo.email}
      </h1>
      <p>
        {personInfo.address.street} , {personInfo.address.city} , {personInfo.address.state} , {personInfo.address.country}
      </p>
      <button
        onClick={() => {
          HandleOnClick();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-sm py-2 px-4 rounded"
      >
        Click Me
      </button>
    </div>
  );
};

export default Person;
