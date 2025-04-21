// import React from "react";
import { useState } from "react";
import Alert from "./Alart";
import Button from "./Button";

const PlayWithButton = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
    console.log("Button clicked");
  };

  return (
    <div>
      {visible && <Alert color="success" onClose={() => setVisible(false)}> You have clicked this button </Alert>}
      <Button className="font-medium" handleClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default PlayWithButton;
