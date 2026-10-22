// import Home from "./pages/Home"
// import UseStateEx from "./pages/UseStateEx"
// import MapEx from "./pages/MapEx"
// import UseRefEx from "./pages/UseRefEx"
// import FormListRenderingAssignment from "./pages/FormListRenderingAssignment"
// import FormHandlingEx from "./pages/FormHandlingEx"
// import ListRenderingEx from "./pages/ListRenderingEx"
// import UseMemoEx from "./pages/UseMemoEx"
// import UserContext from "./context/UserContext";
// import UserScreen from "./pages/UserScreen";
// import Home from "./pages/Home"

// import UseEffectAssignment from "./pages/UseEffectAssignment"

// import CounterScreen from "./components/CounterScreen";

// const App = () => {
//   // const name = "John Doe";
//   return (
//     <div>
//       {/* <Home/> */}
//       {/* <UseStateEx/> */}
//       {/* <MapEx/> */}
//       {/* <ListRenderingEx/> */}
//       {/* <FormHandlingEx/> */}
//       {/* <FormListRenderingAssignment/> */}
//       {/* <UseRefEx/> */}
//       {/* <UseMemoEx/> */}
//       {/* <UseEffectAssignment/> */}
//       {/* <UserContext.Provider value={name}>
//         <UserScreen/>
//         <Home/>
//       </UserContext.Provider> */}

//       {/* <CounterScreen/> */}
//     </div>
//   )
// }

// export default App


import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './pages/Home';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
