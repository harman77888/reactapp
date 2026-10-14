import { useContext } from "react"
import UserContext from "../context/UserContext"


const UserScreen = () => {
    const name =useContext(UserContext)
  return (
    <div>
        <h1>This is user Context file</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default UserScreen
