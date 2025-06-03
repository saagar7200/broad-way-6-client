/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICategoryResponse } from "./category.interface";

interface IImage{
    path:string;
    public_id:string
} 

export interface IExpense {
    title:string;
    amount:number;
    date:string;
    category:any;
    receipts:File[]
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