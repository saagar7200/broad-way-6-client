/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICategoryResponse } from "./category.interface";

interface IImage{
    path:string;
    public_id:string
} 

interface ICategoryOption {
    label:string,
    value:string
}

export interface IExpense {
    title:string;
    amount:number;
    date:string;
    category:ICategoryOption | string;
    receipts?:File[] ,
    description?:string
}

export interface IExpenseResponse {
    _id:string;
    title:string;
    amount:number;
    date:string;
    category:ICategoryResponse;
    receipts?:IImage[]
    createdAt:string;
    updatedAt:string;
}