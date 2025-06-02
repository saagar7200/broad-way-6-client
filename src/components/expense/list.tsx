/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { createColumnHelper } from "@tanstack/react-table"
import {useQuery} from '@tanstack/react-query'
import Table from "../common/table"
import { getAllExpenses } from "@/api/expense.api"
import {toast } from 'react-hot-toast'
import {formatDate} from '@/utils/format-date'
import ActionButtons from '@/components/common/list-action-buttons'



const columnHelper = createColumnHelper<any>()
  
  const columns = [
    columnHelper.accessor('title', {
     id:'title',
    cell: info => info.getValue(),
    header:()=><span className='tracking-wider'>Title</span>
    }),
    columnHelper.accessor(row => row.amount, {
      id: 'amount',
      cell: info => <i className='tracking-wider'>NRP. {info.getValue() ?? '-'}</i>,
      header: () => <span className='tracking-wider' >Amount (NRP.)</span>,
      
    }),
    columnHelper.accessor('date', {
      cell: info => <span className='tracking-wider'>{formatDate(info.renderValue())}</span>,
      header: () => <span className='tracking-wider'>Billing Date</span>,
      
    }),

    columnHelper.accessor('category', {
      cell: info => info.renderValue(),
      header: () => <span className='tracking-wider'>Category</span>,
      
    }),
    columnHelper.accessor('createdAt', {
      cell: info => formatDate(info.renderValue()),
      header: () => <span>Created At</span>,
      
    }),
    columnHelper.accessor('updatedAt', {
      header: () => <span className='tracking-wider'>Updated At</span>,
      cell: info => formatDate(info.renderValue()),

    }),
    columnHelper.accessor('action', {
        header: () => <span className='tracking-wider'>Actions</span>,
        cell:() => <ActionButtons onDelete={()=>{}} onEdit={()=>{}}/>
      }),
    
  ]




const ExpenseList = () =>{

  const {data,isLoading,error} = useQuery({
    queryFn:getAllExpenses,
    queryKey:['get-all-user-expense']
  })

  if(error){
    toast.error(error?.message ?? 'Something went wrong')
  }

    return(
        <div className='w-full'>
            <div className='w-full '>
                <Table data={data?.data} columns={columns}/>
            </div>
        </div>
    )
}
 export default ExpenseList