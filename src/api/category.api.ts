/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategory } from '@/interfaces/category.interface'
import apiInstance from '.'

export const createCategory = async(data:ICategory) =>{
    try{
        const response = await apiInstance.post(`/category/`,data)
        return response.data

    }catch(error:any){
        throw error.response.data
    }
}

export const deteleCategory = async(id:string) =>{
    try{
        const response = await apiInstance.delete(`/category/${id}`)
        return response.data

    }catch(error:any){
        throw error.response.data
    }
}



export const getAllCategoryByUser = async() =>{
    try{

        const response = await apiInstance.get('/category/all/user');
        return response.data;

    }catch(error:any){
        throw error.response.data
    }
}