import React, { useState } from "react";

const Employee = () => {
  const initialEmployees = [
    { id: 1, name: "John Doe", age: 30, position: "Software Engineer" },
    { id: 2, name: "Jane Smith", age: 25, position: "Data Analyst" },
    { id: 3, name: "Sam Wilson", age: 35, position: "Project Manager" },
    { id: 4, name: "Sara Connor", age: 28, position: "UX Designer" },
    { id: 5, name: "Peter Parker", age: 22, position: "Intern" },
  ];

  const [employeeInfo, setEmployeeInfo] = useState(initialEmployees);

  const handleOnClick = () => {
    setEmployeeInfo(
      employeeInfo.map((emp) =>
        emp.name === "John Doe" ? { ...emp, name: "John Smith" } : emp
      )
    );
  };

  return (
    <div>
      <ul className="m-5 list-disc">
        {employeeInfo.map((emp, index) => (
          <li key={index}>
            Employee Name : {emp.name} , Age : {emp.age} , Position :{" "}
            {emp.position}
          </li>
        ))}
      </ul>
      <button
        onClick={handleOnClick}
        className="bg-blue-500 text-white px-3 py-1 rounded m-2"
      >
        Click Me
      </button>
    </div>
  );
};

export default Employee;
