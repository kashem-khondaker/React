import React, { useState } from "react";

const Skill = () => {
  const [skills, setSkills] = useState(["python", "javaScript"]);

  const HandleOnClick = () => {
    console.log("clicked")
    // add skill to the list
    // setSkills([...skills, "react"])
    //update the state with new skill
    setSkills(skills.map(
      (skill) => skill === "python" ? (skill ="Python3") : (skill)
    ))
    //remove skill 
    // setSkills(skills.filter((skill) => skill !== "python"))
  }
  return (
    <div>
      <ul className="m-5 list-disc">
        {skills.map(
            (skill , index) => (<li key={index}> {skill} </li>)
        )}
      </ul>
      <button className="bg-blue-600 text-white p-2 m-3 rounded-sm cursor-pointer" onClick={()=> HandleOnClick()}>Click Me</button>
    </div>
  );
};

export default Skill;
