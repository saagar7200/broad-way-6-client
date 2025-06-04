'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation ,useQueryClient} from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Input from '../common/inputs/input'
import {useRouter} from 'next/navigation'
import ImageUploader from '../common/inputs/file-upload'
import  SelectCategory from '../common/inputs/category-select-input'
import { IExpense } from '@/interfaces/expense.interface'
import expenseSchema from '@/schema/expense.schema'
import { createExpense } from '@/api/expense.api'
const ExpenseForm  = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const {control ,register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            title:'',
            description:'',
            date:'',
            category:'',
            receipts:[]
        },
        resolver:yupResolver(expenseSchema)
    })

    console.log(errors)

    const {mutate,isPending} = useMutation({
        mutationFn:createExpense,
        onSuccess:(data) =>{
            toast.success(data?.message ?? 'Expense Added.')
            router.back()
            queryClient.invalidateQueries({queryKey:['get-all-user-expenses']})
        },
        onError:(data) =>{
            toast.error(data?.message ?? 'Operation failed.')
        }
    })

    const onSubmit = (data:IExpense) =>{
        const {category,title,amount,date,description,receipts} = data
        const formData = new FormData()
        formData.append('title',title)
        formData.append('amount',amount.toString())
        formData.append('date',date)
        formData.append('categoryId',typeof category === 'string' ? category : category?.value)
        if(description ) {
            formData.append('description',description)
        }

        if(receipts &&  receipts?.length > 0 && Array.isArray(receipts)){
            receipts.forEach((file) =>{
                formData.append('receipts',file)
            })
        }
         
        console.log(formData)
        mutate(formData)
    }


  return (
  <div className=' h-full w-full flex items-center mt-10'>
      <div className='flex w-[min(100%,500px)]  mx-auto tracking-wider border border-blue-400  px-6 py-8  rounded-md'>
        {/* @ts-expect-error //amount  */}
        <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
           
            <Input
                label={'Name'}
                name={'title'}
                required
                error={errors?.title?.message}
                register={register}
                placeholder={'Entertainment'}
            />
            <SelectCategory error={errors.category?.message} required control={control}/>


           <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 items-center'>
           <Input
                label={'Amount'}
                name={'amount'}
                required
                type={'number'}
                error={errors?.amount?.message}
                register={register}
                placeholder={'1000'}
            />

            
            <Input
                label={'Billing Date'}
                name={'date'}
                required
                error={errors?.date?.message}
                register={register}
                placeholder={'Entertainment'}
                type={'date'}

            />
            </div>
            <div className='flex flex-col gap-1'>
           
                <ImageUploader label={'Receipts'} name='receipts' control={control}/>
            </div>

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

export default ExpenseForm 