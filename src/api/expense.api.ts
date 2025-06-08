/* eslint-disable @typescript-eslint/no-explicit-any */
import apiInstance from '.'

export const getAllExpenses = async() =>{
    try{

        const response = await apiInstance.get('/expense/user');
        return response.data;

    }catch(error:any){
        throw error.response.data
    }
}

export const createExpense = async(data:any) =>{
    try{
        const response = await apiInstance.post(`/expense/`,data)
        return response.data

    }catch(error:any){
        throw error.response.data
    }
}

export const getById = async(id:string) =>{
    try {
        const response = await  apiInstance.get(`/expense/${id}`)
       return response.data
        
    } catch (error:any) {
        throw error.response.data
    }
}