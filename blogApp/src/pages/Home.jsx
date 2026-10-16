// import { useContext } from "react";
// import UserContext from "../context/UserContext";
import Profile from "../components/Profile";

function App() {
  // const names = ["Harman", "Aman", "Raj"];
  // const name = useContext(UserContext)
  return (
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
        
      ))} */}
      <h1>This is Home Page</h1>
      <Profile/>
    </div>
  );
}

export default App;