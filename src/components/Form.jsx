import { useRef } from "react";

const Form = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(0);

  const person = {name : "" , age: 0}
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameRef.current.value && ageRef.current.value) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
    }
    console.log( person.name , person.age);
  };
  return (
    <div className="max-w-md mx-auto mt-5 bg-gray-200 p-6 rounded">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block text-gray-800 text-sm font-bold mb-2"
        >
          {" "}
          Name :
        </label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Name"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <label
          htmlFor="age"
          className="block text-gray-800 text-sm font-bold mb-2"
        >
          {" "}
          Age :
        </label>
        <input
          ref={ageRef}
          type="number"
          id="age"
          placeholder="age"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md mt-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
