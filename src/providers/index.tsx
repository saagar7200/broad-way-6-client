import {  ReactNode } from "react"
import ReactQueryProvider from "./react-query.provider"
import ContextProvider from "@/context"



const Providers = ({children}:Readonly<{children:ReactNode}>) =>{

    return (
        <ContextProvider>
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
        </ContextProvider>
    )

}

export default Providers
