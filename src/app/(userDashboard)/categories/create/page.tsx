import React from 'react'
import CategoryForm from '@/components/category/form'
import { PageHeader } from '@/components/common/page-header'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Page = () => {
  return (
    <div className='w-full h-full'>
        <PageHeader
        title="Create Expense Category"
        buttonText="Back To List "
        link="/categories"
        Icon={<MdOutlineKeyboardArrowLeft size={30} className='text-white'/>}
      />
      
        <div className=''>
            <CategoryForm/>
        </div>

    </div>
  )
}

export default Page