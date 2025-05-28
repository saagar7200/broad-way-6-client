import React from 'react'
import CategoryForm from '@/components/category/form'
const Page = () => {
  return (
    <div className='w-full h-full'>
        <div>
            <h1 className='tracking-wider font-semibold text-xl'>Create new Expense Category</h1>
        </div>
        <div className=''>
            <CategoryForm/>

        </div>

    </div>
  )
}

export default Page