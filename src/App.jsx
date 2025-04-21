// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import List from './components/List'
// import FirstComponent from './components/FirstComponent'
// import Practice from './components/practice'
// import NewComponent from './components/newComponent'';
// import PlayWithButton from './components/PlayWithButton';
// import Person from './components/Person';
// import Skill from './components/Skill'
// import Employee from "./components/Employee"

import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)
  // const fruits = ["Mango", "Banana", "Apple", "Grapes", "Orange", "Malta"];
  // const vegetables = ["Potato", "Tomato", "Onion", "Carrot", "Cabbage"];
  // const cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"];
  // const countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan"];

  // const HandleClick = () => {
  //   console.log("Button clicked");
  // }
  const [CartItems, setCartItems] = useState([
    "product1",
    "product2",
    "product3",
    "product4",
    "product5",
  ]);
  const handleProductRemove = (item) => {
    setCartItems(CartItems.filter((product) => product !== item));
  };
  return (
    <>
      {/* //   <Practice items = {fruits} heading = "Fruits"/> */}
      {/* <Practice items = {vegetables} heading = "vegetables"/> */}
      {/* //   <List items = {vegetables} heading = "vegetables" />  */}
      {/* //   <FirstComponent items = {cities} heading = "Cities" /> */}
      {/* //   <NewComponent items = {countries} heading = "countries" /> */}
      {/* <PlayWithButton></PlayWithButton> */}
      {/* <Person></Person> */}
      {/* <Skill></Skill> */}
      {/* <Employee></Employee> */}
      <Navbar CartItemCount={CartItems.length} />
      <Cart
        CartItems={CartItems}
        onClear={() => setCartItems([])}
        onRemove={handleProductRemove}
      />
    </>
  );
}

export default App;
