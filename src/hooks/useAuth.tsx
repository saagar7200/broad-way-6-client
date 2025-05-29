import { useContext } from "react"
import { AuthContext } from '@/context/auth.context';


const useAuth = () =>{

    if(!AuthContext){
            console.log('useAuth must be used inside context provider')
    }

    return useContext(AuthContext)

}

export default useAuth