/* eslint-disable @typescript-eslint/no-unused-vars */
import {jwtDecode} from 'jwt-decode'
import Cookies from 'js-cookie'
export const parseToken = (token:string) =>{
    try{
        const decoded:{exp:number,role:string}= jwtDecode(token)
        const now = Math.floor(Date.now()/1000)

        if( decoded?.exp && now > decoded?.exp){
            Cookies.remove('access_token')
            localStorage.removeItem('user')
            return{valid:false}

        }



        return {
            valid:true,
            role:decoded?.role
        }

    }catch(error){
        Cookies.remove('access_token')
        localStorage.removeItem('user')
        return{valid:false}
    }

}