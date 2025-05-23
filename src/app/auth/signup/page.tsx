import SignUpForm from '@/components/auth/sign-up/signup-form'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='h-full w-full flex justify-center items-center tracking-wider'>
        <div className='border  border-blue-500 px-6 py-8 rounded-md shadow-xl'>
            <div>
            <h1 className='text-center text-2xl font-bold '>Register</h1>
            </div>
            <div>
                <SignUpForm/>
            </div>
            <div className='flex justify-center'>
              <p>Already have an account?<Link href={'/auth/login'}><span className='ml-1 text-blue-500 underline'>Login</span></Link></p>
            </div>
        </div>
        
    </main>
  )
}

export default Page