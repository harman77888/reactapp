// import Home from "./pages/Home"
// import UseStateEx from "./pages/UseStateEx"
// import MapEx from "./pages/MapEx"
// import UseRefEx from "./pages/UseRefEx"
// import FormListRenderingAssignment from "./pages/FormListRenderingAssignment"
// import FormHandlingEx from "./pages/FormHandlingEx"
// import ListRenderingEx from "./pages/ListRenderingEx"

// import UseMemoEx from "./pages/UseMemoEx"
import UserContext from "./context/UserContext";
import UserScreen from "./pages/UserScreen";
import Home from "./pages/Home"

const App = () => {
  const name = "John Doe";
  return (
    <div>
      {/* <Home/> */}
      {/* <UseStateEx/> */}
      {/* <MapEx/> */}
      {/* <ListRenderingEx/> */}
      {/* <FormHandlingEx/> */}
      {/* <FormListRenderingAssignment/> */}
      {/* <UseRefEx/> */}
      {/* <UseMemoEx/> */}
      <UserContext.Provider value={name}>
        <UserScreen/>
        <Home/>
      </UserContext.Provider>
    </div>
  )
}

export default App
