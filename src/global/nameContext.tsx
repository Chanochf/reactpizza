import { createContext, useState } from "react";

export const nameContext =createContext({})

export function NameProvider ({children}:any){
    const [userName, setUserName] = useState('')
    return(
        <nameContext.Provider value={{userName ,setUserName}}>
            {children}
        </nameContext.Provider>
    )
}
