'use client'

import Link from 'next/link';
import React from 'react'
import { LuAsterisk } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { ILogin } from '@/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/schema/auth.schema';
import { login } from '@/api/auth.api';
import {useMutation} from  '@tanstack/react-query'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';



const LoginForm = () => {
  const router = useRouter()
  const {reset,register,handleSubmit,formState:{errors}} = useForm<ILogin>({
    defaultValues:{
      email:'',
      password:''
    },
    resolver:yupResolver(LoginSchema),
    mode:'all'
  })

  const {isPending,mutate} = useMutation({
    mutationFn:login,
    onSuccess: (response) =>{
      toast.success(response.message ?? 'Login success!!!!')
      console.log('on success',response)
      localStorage.setItem('user',JSON.stringify(response.data))
      router.replace('/')
      reset()


    },
    onError:(error) =>{
      console.log('on err',error)
      toast.error(error.message ?? 'Login Failed!!!!')


    }
  })





 
  const submit = (data:ILogin) =>{

        console.log('submitted',data)
        mutate(data)
        // await login(data)
  }

  return (
    <div className='w-full h-full flex  justify-center items-center tracking-wider'  >
        <form  onSubmit={handleSubmit(submit)}>
        <div className='w-[400px] border border-blue-600  px-4 py-10 rounded-md'>
        <h2 className='text-center text-2xl font-bold '>Login</h2>
        {/* email */}
        <div className='flex flex-col gap-1 mt-4'>
            <label className='flex text-lg font-semibold text-gray-800'>Email <LuAsterisk className='text-sm text-red-500' /></label>
            <input  {...register('email')} placeholder='jhondoe@gmail.com' type='text' className=' border border-gray-400 px-2 py-2 rounded-md focus:outline-blue-400'/>
            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
        </div>
        {/* password */}
        <div className='flex flex-col gap-1 mt-3'>
            <label className='flex text-lg font-semibold text-gray-800' >Password <LuAsterisk className='text-sm text-red-500' /></label>
            <input  {...register('password')}  type='password' placeholder='******' className=' border border-gray-400 px-2 py-2 rounded-md focus:outline-blue-400'/>
            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
       
        </div>
        <div className='w-full mt-10'>
            <button disabled={isPending} type='submit' className='cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 w-full bg-blue-600 text-white py-2  rounded-md font-bold text-xl'>Login</button>
        </div>
        <div className='flex justify-center mt-4'>
              <p>Don&apos;t have an account?<Link href={'/auth/signup'}><span className='ml-1 text-blue-500 underline'>Sign Up</span></Link></p>
            </div>
        </div>
        </form>
    </div>
  )
}

export default LoginForm