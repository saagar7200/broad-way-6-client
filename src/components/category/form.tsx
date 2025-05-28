'use client'
import { createCategory } from '@/api/category.api'
import { ICategory } from '@/interfaces/category.interface'
import { CategorySchema } from '@/schema/category.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const CategoryForm  = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            name:'',
            description:''
        },
        resolver:yupResolver(CategorySchema)
    })

    const {mutate,isPending} = useMutation({
        mutationFn:createCategory,
        mutationKey:['category'],
        onSuccess:(data) =>{
            toast.success(data?.message ?? 'Category Added.')
        },
        onError:(data) =>{
            toast.error(data?.message ?? 'Operation failed.')
        }
    })

    const onSubmit = (data:ICategory) =>{
        console.log('category from data',data)
        mutate(data)
    }


  return (
  <div className=' h-full w-full flex items-center mt-18'>
      <div className='flex w-[min(100%,350px)]  mx-auto tracking-wider border border-blue-400  px-6 py-8  rounded-md'>
        <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1'>
                <label className=' text-lg  '>Category Name</label>
                <input  
                    {...register('name')} 
                    placeholder='Entertainment'
                     className={`border border-gray-400 rounded-md py-2 px-3 ${errors.name ? "focus:outline-red-500 border-red-500" :  'focus:outline-blue-400'}`}   
                />
                {errors.name && <p className='text-xs text-red-500 mt-0'>{errors.name.message}</p>}
            </div>

            <div className='flex flex-col gap-1'>
                <label className=' text-lg  '>Description</label>
                <textarea  
                    {...register('description')} 
                    placeholder='write here....'
                     className='border border-gray-400 rounded-md py-2 px-3 focus:outline-blue-400'   
                />
                {errors.description && <p className='text-xs text-red-500 mt-0'>{errors.description.message}</p>}

            </div>

            <div className='w-full flex items-center mt-8 '>
                <button disabled={isPending} className='cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300  w-full bg-blue-500 text-amber-50 font-bold text-xl py-3 rounded-md'>
                    {isPending ?'Creating...' :"Create"}
                </button>
            </div>
        </form>
        
    </div>
  </div>
  )
}

export default CategoryForm 