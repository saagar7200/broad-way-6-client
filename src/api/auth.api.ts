/* eslint-disable @typescript-eslint/no-explicit-any */
import {ILogin} from '@/interfaces/auth.interface'
import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API
export const login = async(data:ILogin) =>{

    try{

        const response = await axios.post(`${url}user/login`,data)
        return response.data



    }catch(error:any){
        throw error.response.data
    }
    

}

