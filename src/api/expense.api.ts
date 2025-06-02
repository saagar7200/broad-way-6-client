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