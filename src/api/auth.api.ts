/* eslint-disable @typescript-eslint/no-explicit-any */
import {ILogin, IRegister} from '@/interfaces/auth.interface'
import apiInstance from '.'

export const login = async(data:ILogin) =>{

    try{

        const response = await apiInstance.post(`/user/login`,data)
        return response.data

    }catch(error:any){
        throw error.response.data
    }
    

}


export const register = async(data:Omit<IRegister,'confirmPassword'>) =>{

    try{

        const response = await apiInstance.post(`/user/register`,data)
        return response.data

    }catch(error:any){
        throw error.response.data
    }
    

}

