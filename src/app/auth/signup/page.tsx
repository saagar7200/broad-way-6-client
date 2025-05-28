import SignUpForm from '@/components/auth/sign-up/signup-form'
import React from 'react'

const Page = () => {
  return (
    <main className='px-2 md:px-0 w-full h-full flex justify-center items-center tracking-wider my-4'>
        <div className='w-[min(100%,500px)] md:w-[500px]   border  border-blue-500 px-6 py-8 rounded-md shadow-xl'>
            <div>
            <h1 className='text-center text-2xl font-bold '>Register</h1>
            </div>
            <div className='w-full h-full'>
                <SignUpForm/>
            </div>     
        </div>
        
    </main>
  )
}

export default Page