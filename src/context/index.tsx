import { ReactNode } from "react";
import AuthProvider from "./auth.context";




const ContextProvider = ({children}:Readonly<{children:ReactNode}>) =>{


    return(

        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default ContextProvider