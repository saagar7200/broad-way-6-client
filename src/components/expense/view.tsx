'use client'

import { getById } from '@/api/expense.api'
import { formatDate } from '@/utils/format-date'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { IoPricetag } from "react-icons/io5";
import Image from 'next/image'
type Props = {
    id: string
}

const ViewExpenseDetail = (props: Props) => {
    const { id } = props
    console.log(id)

    const { data, isLoading } = useQuery({
        queryFn: () => getById(id),
        queryKey: ['get-expense-by-id']
    })

    if (isLoading) {
        return (<div className='w-full h-full flex justify-center items-center'>
            <p>Loading....</p>
        </div>)
    }

    const { title, category, amount, date, createdAt,receipts } = data?.data


    return (
        <div className='h-full w-full mt-4'>
            <div className='border border-gray-300 w-[min(100%,700px)] min-h-[500px] rounded-md shadow-md p-4 mx-auto '>
                <h1 className='text-center tracking-wider underline text-xl font-semibold'>Expense Detail</h1>
               <div className='flex flex-col items-center gap-4'>
               <div className=' p-3 mt-6 border border-gray-300 rounded-sm w-1/2 min-h-[150px]'>
                    <div className='tracking-wider flex  flex-col justify-around h-[150px]'>
                       <div>
                       <p className={'text-xl font-bold text-blue-600'}>{title}</p>
                            <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-1 bg-teal-700 px-2 py-1/2 rounded-md'>
                                        <IoPricetag className='text-white '/>
                                    <p className='text-sm text-white font-semibold'> {category.name}</p>
                                    </div>
                                    <p className=' text-end text-sm'>NRP. <span className='text-red-500 font-bold italic '>{amount}</span></p>
                            </div>
                       </div>
                        <div className='flex justify-between px-2 mt-1'>
                            <div>
                                <p className='text-xs text-teal-500'>Created on</p>
                            <p>{formatDate(createdAt)}</p>
                            </div>
                            <div>
                                <p className='text-xs text-blue-500'>Expense on</p>
                            <p>{formatDate(date)}</p>
                            </div>
                        </div>
                    </div>

                   

                </div>
                {/* receipts */}
                <div className='flex gap-2 items-center h-full'>
                    {

                    receipts && receipts.length > 0 ?

                        receipts?.map((receipt:{path:string,public_id:string}) =>(
                            <div key={receipt.public_id} className='h-[200px] w-[200px] aspect-square'>
                                <Image
                                
                                src={receipt.path}
                                alt={'receipts'}
                                height={400}
                                width={400}
                                className='h-full w-full object-cover'
                                />

                               
                            </div>
                        ))

                        :'No receipts'
                    }

                </div>
               </div>
            </div>


        </div>
    )
}

export default ViewExpenseDetail