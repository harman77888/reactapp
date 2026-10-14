import { useContext } from "react";
import UserContext from "../context/UserContext";

function App() {
  // const names = ["Harman", "Aman", "Raj"];
  const name = useContext(UserContext)
  return (
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
        
      ))} */}
      <h1>This is Home Page</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default App;