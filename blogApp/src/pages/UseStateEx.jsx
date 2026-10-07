import { useState } from "react";

const UseStateEx = () => {
  // Q1

  const [count, setCount] = useState(0);
  const [name, setChangeName] = useState("HarmanPreet Singh");
  const change = () => {
    setChangeName(false);
    name === "HarmanPreet Singh"
      ? setChangeName("Ravneet Sidhu")
      : setChangeName("HarmanPreet Singh");
  };

  
  // Q2 create a password to show and hide functionality using useState hook. *Requirements:* - Add a password input field. - Add a toggle button to show/hide the password. - Use to manage the visibility of the password.
  const [password, setPassword] = useState("password");
  const togglePassword = () => {
    setPassword(password === "password" ? "text" : "password");
  };

  // Q3. Light & Dark Mode — 8 Marks Create a simple webpage with Light Mode and Dark Mode functionality. *Requirements:* - Add a toggle button. - Use to manage the theme. - Change the background color and text color when the theme changes. - Update the button text according to the active theme.
  const [theme, setTheme] = useState("light");
  const toggleButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //Q4 .Login & Logout System — 8 Marks Create a simple login and logout interface using conditional rendering. **Requirements:** - Display a Login button when the user is logged out. - On clicking Login, display a welcome message. - Display a Logout button after login. - On clicking Logout, return to the initial login screen. - Manage the login status using `useState`

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleLogin=()=>{
    setIsLoggedIn(true);
  }
  const handleLogout=()=>{
    setIsLoggedIn(false);
  }


  // Q5. Show & Hide Content — 8 Marks Create a webpage with a button to show or hide a content section. **Requirements:** - Display a heading and a Show Details button. - When clicked, display a paragraph containing additional information. - Change the button text to Hide Details. - When clicked again, hide the paragraph. - Use conditional rendering and `useState

  
 const [showDetail,setShowDetail]=useState(false);
 const toggleDetail=()=>{
  setShowDetail(!showDetail);
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
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>



      <div>
        <input type={password} placeholder="Enter Password" />
        <button onClick={togglePassword}>
          {password === "password" ? "Show Password" : "Hide Password"}
        </button>
      </div>



      {isLoggedIn ? (
        <div>
          <h1>Welcome User</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <h1>Show & Hide Content</h1>
      <button onClick={toggleDetail}>
        {showDetail ? "Hide Details" : "Show Details"}
      </button>
      {showDetail &&(
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, enim.</p>
      )}
    </div>
  );
};

export default UseStateEx;
