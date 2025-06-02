/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { UseFormRegister } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";

interface IProps {
    label:string;
    name:string;
    register:UseFormRegister<any>;
    error?:string;
    required?:boolean;
    placeholder?:string;
    multiline?:boolean

}


const Input:React.FC<IProps>  =  ({label,error,register,required,name,placeholder,multiline}) =>{

    return(
        <div className='flex flex-col gap-1'>
               <div className='flex '>
               <label htmlFor={name} className=' text-lg  '>{label}</label>
               {required  &&<LuAsterisk size={18} className='text-red-500'/>}
               </div>
                {!multiline ? <input  
                    {...register(name)} 
                    placeholder={placeholder}
                     className={`border border-gray-300 rounded-md py-3 px-3 ${error ? "focus:outline-red-500 border-red-500" :  'focus:outline-blue-400'}`}   
                /> :
                <textarea  
                    {...register(name)} 
                    placeholder={placeholder}
                     className='min-h-[120px] border border-gray-300 rounded-md py-2 px-3 focus:outline-blue-400'   
                />}
                {error && <p className='text-xs text-red-500 mt-0'>{error}</p>}
            </div>
    )
}

export default Input