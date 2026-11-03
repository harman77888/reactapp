import { useContext } from "react"
import LoginContext from "../context/LoginContext";

const LoginPage = () => {
  const{isLogin,setIsLogin}=useContext(LoginContext);

  return (
    <div>
      <h1>Login Page</h1>
      <h2>
          {
            isLogin?'Welcome User':'Home Screen'
          }

      </h2>
      {
        isLogin?(
          <button onClick={()=>setIsLogin(false)}>Logout</button>
        ):(
          <button onClick={()=>setIsLogin(true)}>Login</button>
        )
      }
    </div>
  )
}

export default LoginPage
