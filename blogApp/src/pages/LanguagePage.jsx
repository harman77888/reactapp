import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const LanguagePage = () => {
    const{lang,setLang}=useContext(LanguageContext)
  return (
    <div>
      <h1>{
            lang==="English"?"This is English":"This is Hindi"
        }
        </h1>
        <p>Select Language</p>
        <button onClick={()=>{setLang("English")}}>English</button>
        <button onClick={()=>{setLang("Hindi")}}>Hindi</button>
    </div>
  )
}

export default LanguagePage
