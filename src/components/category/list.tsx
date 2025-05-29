/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { createColumnHelper } from "@tanstack/react-table"
import Table from "../common/table"
const defaultData = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  
  const columnHelper = createColumnHelper<any>()
  
  const columns = [
    columnHelper.accessor('firstName', {
     id:'firstName',
    cell: info => info.getValue(),
    header:()=><span> Catrgory Name</span>
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Description</span>,
      
    }),
    columnHelper.accessor('age', {
      cell: info => info.renderValue(),
      header: () => <span>Created At</span>,
      
    }),
    columnHelper.accessor('visits', {
      header: () => <span>Updated At</span>,
    }),
    columnHelper.accessor('visits', {
        header: () => <span>Action</span>,
      }),
    
  ]

const CategoryList = () =>{

    return(
        <div className='w-full'>
            <p>Category list</p>
            <div className='w-full '>
                <Table data={defaultData} columns={columns}/>
            </div>
        </div>
    )
}
 export default CategoryList