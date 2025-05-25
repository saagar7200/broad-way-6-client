import Link from 'next/link'
import React from 'react'
import { IoHomeOutline,IoPricetagOutline } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import Logo from '@/components/layout/logo'
const SideBar = () => {
  return (
    <div className='h-full w-full tracking-wider'>
        <div className='px-3 py-3'>
           <Logo/>
        </div>
        <div className=' flex flex-col gap-3 mt-2 border-t border-blue-500 px-3 py-4'>
            <div>
                <Link className='flex gap-1 items-center' href={'/'}>
                    <IoHomeOutline className='text-blue-500 text-xl font-bold'/>
                    <p className='text-lg font-medium text-gray-700'>Home</p>
                </Link>
            </div>
            <div>
                <Link className='flex gap-1 items-center' href={'/categories'}>
                    <IoPricetagOutline className='text-blue-500 text-xl font-bold'/>
                    <p className='text-lg font-medium text-gray-700'>Category</p>
                </Link>
            </div>
            <div>
                <Link className='flex gap-1 items-center' href={'/expenses'}>
                    <MdOutlineBarChart className='text-blue-500 text-xl font-bold'/>
                    <p className='text-lg font-medium text-gray-700'>Expenses</p>
                </Link>
            </div>
        </div>


    </div>
  )
}

export default SideBar