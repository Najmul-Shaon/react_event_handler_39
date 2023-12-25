import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const handler = () => {
  //   alert("click")
  // };
  function handlerClcik() {
    console.log("click");
  }


  return (
    <>
      <h1>Event Handler Practice</h1>
      <button onClick={handlerClcik}>Click me</button>
    </>
  );
}

export default App;
