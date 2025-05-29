/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { IUser } from "@/interfaces/auth.interface";
import { createContext, ReactNode, useEffect, useState } from "react";

// context create
interface IContext {
    user:IUser | null;
    updateUser:(x:IUser) => void
}

const initialValue = {
    user:null,
    updateUser:(x:IUser)=>{}
}


export const AuthContext = createContext<IContext>(initialValue)

// wrapper -> app wrap

const AuthProvider = ({children}:Readonly<{children:ReactNode}>) =>{
    const [user,setUser] = useState<IUser | null>(null)

    const updateUser = (userData:IUser ) =>{
        setUser(()=> userData)
    }

    useEffect(()=>{
        const localUser = localStorage.getItem('user') 
        if(localUser){
            setUser(JSON.parse(localUser))
        }
    },[])

    return(
        <AuthContext.Provider value={{user,updateUser}}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

// useContext()


