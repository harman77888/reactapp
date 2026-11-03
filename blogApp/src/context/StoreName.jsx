// **Q3. Language Switcher — 4 Marks** Create a language context that stores
//  the selected language, such as English or Hindi, and displays it on the page. *


import { createContext, useState } from "react";

const StoreName=createContext();

export function Storeprovider({children}){
    const [name,setName]=useState('Harmanpreet Singh')
    if(!name){
        setName('')
    }

    return(
        <div>
            <StoreName.Provider value={name}>
                {children}
            </StoreName.Provider>
        </div>
    )
}

export default StoreName;