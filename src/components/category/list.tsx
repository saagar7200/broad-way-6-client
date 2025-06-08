/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { createColumnHelper } from "@tanstack/react-table"
import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import Table from "../common/table"
import { getAllCategoryByUser,deleteCategory } from "@/api/category.api"
import {toast } from 'react-hot-toast'
import {formatDate} from '@/utils/format-date'
import ActionButtons from '@/components/common/list-action-buttons'
import { useCallback } from "react"
import { useRouter } from "next/navigation"
  


const CategoryList = () =>{
  const columnHelper = createColumnHelper<any>()
  const router = useRouter()
  const queryClient = useQueryClient()
  const {data,isLoading,error} = useQuery({
    queryFn:getAllCategoryByUser,
    queryKey:['get-all-user-category']
  })

  const {mutate} = useMutation({
    mutationFn:deleteCategory,
    onSuccess:(response) =>{
        console.log(response)
        toast.success(response.message ?? 'Category deleted')
        queryClient.invalidateQueries({queryKey:['get-all-user-category']})
    },
    onError:(error) =>{
      toast.error(error.message ?? 'Can not perform this task.')
      console.log(error)
  }
  })

  const onDelete = useCallback((id:string) =>{
    console.log('Delete button clicked',id)
    mutate(id)
   },[mutate])

  const onEdit = useCallback((id:string) =>{
    router.push('/categories/update/${id}')
   },[])

  if(error){
    toast.error(error?.message ?? 'Something went wrong')
    return
  }

  if(isLoading){
    return(
      <div>
        Loading....
      </div>
    )
  }



 
  
  const columns = [
    columnHelper.accessor('name', {
     id:'name',
    cell: info => info.getValue(),
    header:()=><span> Category Name</span>
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'description',
      cell: info => <i>{info.getValue() ?? '-'}</i>,
      header: () => <span>Description</span>,
      
    }),
    columnHelper.accessor('createdAt', {
      cell: info => formatDate(info.renderValue()),
      header: () => <span>Created At</span>,
      
    }),
    columnHelper.accessor('updatedAt', {
      header: () => <span>Updated At</span>,
      cell: info => formatDate(info.renderValue()),

    }),
    columnHelper.accessor('action', {
        header: () => <span>Actions</span>,
        cell:(info) => <ActionButtons onDelete={()=>onDelete(info.row.original._id)} onEdit={() => onEdit(info.row.original._id)}/>
      }),
    
  ]

    return(
        <div className='w-full'>
            <div className='w-full '>
                <Table data={data?.data} columns={columns}/>
            </div>
        </div>
    )
}
 export default CategoryList