'use client'
import React from 'react'
import CategoryForm from './form'
import { useQuery } from '@tanstack/react-query'
import { getCategoryById } from '@/api/category.api'

type Props = {
    id:string
}

const UpdateCategory = ({id}: Props) => {

    const {data,isLoading} = useQuery({
        queryFn:() =>getCategoryById(id),
        queryKey:['get-category-by-id']
    })

    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }


  return (
    <section>
        <CategoryForm category={data?.data}/>
    </section>
  )
}

export default UpdateCategory