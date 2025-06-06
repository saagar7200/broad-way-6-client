'use client'
import { createCategory } from '@/api/category.api'
import { ICategory } from '@/interfaces/category.interface'
import { CategorySchema } from '@/schema/category.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation ,useQueryClient} from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Input from '../common/inputs/input'
import {useRouter} from 'next/navigation'

const CategoryForm  = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            name:'',
            description:''
        },
        resolver:yupResolver(CategorySchema)
    })

    const {mutate,isPending} = useMutation({
        mutationFn:createCategory,
        onSuccess:(data) =>{
            toast.success(data?.message ?? 'Category Added.')
            router.push('/categories')
            queryClient.invalidateQueries({queryKey:['get-all-user-category']})
        },
        onError:(data) =>{
            toast.error(data?.message ?? 'Operation failed.')
        }
    })

    const onSubmit = (data:ICategory) =>{
        mutate(data)
    }


  return (
  <div className=' h-full w-full flex items-center mt-18'>
      <div className='flex w-[min(100%,350px)]  mx-auto tracking-wider border border-blue-400  px-6 py-8  rounded-md'>
        <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
           
            <Input
                label={'Name'}
                name={'name'}
                required
                error={errors?.name?.message}
                register={register}
                placeholder={'Entertainment'}
            />

            <Input
            label={'Description'}
            name={'description'}
            multiline
            error={errors?.description?.message}
            register={register}
            placeholder={'Start typing here..'}
            />



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