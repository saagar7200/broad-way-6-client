import React from 'react'
import ExpenseForm from '@/components/expense/form'
import { PageHeader } from '@/components/common/page-header'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Page = () => {
  return (
    <div className='w-full h-full'>
        <PageHeader
        title="Add New Expense"
        buttonText="Back To List "
        link="/expenses"
        Icon={<MdOutlineKeyboardArrowLeft size={30} className='text-white'/>}
      />
      
        <div className=''>
            <ExpenseForm/>
        </div>

    </div>
  )
}

export default Page