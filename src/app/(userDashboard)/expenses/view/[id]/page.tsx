import { PageHeader } from '@/components/common/page-header'
import ViewExpenseDetail from '@/components/expense/view'
import React from 'react'

type Props = {
  params:Promise<{
    id:string
  }>
}

const Page = async (props: Props) => {
    const {id} = await props.params
    console.log('expense id',id)
  return (
    <main className='h-full'>
        <PageHeader
            title='View Expense Detail'
            buttonText='Go Back'
            link='/expenses/'

        />
        <ViewExpenseDetail id={id}/>
    </main>
  )
}

export default Page