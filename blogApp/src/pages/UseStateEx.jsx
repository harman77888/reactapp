import { useState } from "react";

const UseStateEx = () => {
  const [count, setCount] = useState(0);
  const [name, setChangeName] = useState("HarmanPreet Singh");
  const change = () => {
    setChangeName(false);
    name === "HarmanPreet Singh"
      ? setChangeName("Ravneet Sidhu")
      : setChangeName("HarmanPreet Singh");
  };

  // Q3. Light & Dark Mode — 8 Marks Create a simple webpage with Light Mode and Dark Mode functionality. *Requirements:* - Add a toggle button. - Use ⁠ useState ⁠ to manage the theme. - Change the background color and text color when the theme changes. - Update the button text according to the active theme.
  const [theme, setTheme] = useState("light");
  const toggleButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
   
  return (
    <div>
      
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>Name : {name}</h1>
      {/* <button onClick={()=>setChangeName('Ravneet Sidhu')}>Change Name</button> */}
      <button onClick={change}> Change Name </button>

      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          height: "100vh",
          width: "100vw",
        }}
      >
        <button onClick={toggleButton}>
          {theme === "light"  ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
    </div>
  );
};

export default UseStateEx;
 