import React, { useState } from "react";

const FormUseState = () => {
  const person = {
    name: "",
    age: 0,
    address: {
      city: "",
      county: "",
    },
  };

  const [personInfo, setPersonInfo] = useState(person);

  const handleInputChange = (e) => {
    setPersonInfo({
      ...personInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setPersonInfo({
      ...personInfo,
      address: {
        ...personInfo.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personInfo);
  }

  return (
    <div className="p-6 ">
      <form className="max-w-md mx-auto mt-5 bg-gray-200 p-6 rounded"
      onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block text-gray-800 text-sm font-bold mb-2"
        >
          Name :
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={personInfo.name}
          onChange={(event) =>
            setPersonInfo({ ...personInfo, name: event.target.value })
          }
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label
          htmlFor="age"
          className="block text-gray-800 text-sm font-bold mb-2 mt-4"
        >
          Age :
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={personInfo.age}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label
          htmlFor="county"
          className="block text-gray-800 text-sm font-bold mb-2 mt-4"
        >
          County :
        </label>
        <input
          type="text"
          name="county"
          id="county"
          value={personInfo.address.county}
          onChange={handleAddressChange}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label
          htmlFor="city"
          className="block text-gray-800 text-sm font-bold mb-2 mt-4"
        >
          City :
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={personInfo.address.city}
          onChange={handleAddressChange}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="m-7 px-3 py-2 rounded-md text-white text-md cursor-pointer transition duration-300 bg-blue-500 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormUseState;
