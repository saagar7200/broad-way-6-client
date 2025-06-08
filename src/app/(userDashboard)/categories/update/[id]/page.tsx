import UpdateCategory from '@/components/category/update-form';
import { PageHeader } from '@/components/common/page-header';
import { Metadata } from 'next';
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi';

type Props = {
    params:Promise<{
        id:string
    }>

}


export const metadata: Metadata = {
  title: "Expense Tracker | Update Category",
  description: "Track Your Daily Expenses",
};

const Page = async({params}: Props) => {
  const {id} = await params
  return (
    <main>
      <PageHeader
        title="Update Category"
        buttonText="Go Back"
        link="/categories"
        Icon={<BiChevronLeft size={26}/>}
      />

      <UpdateCategory id={id}/>

    </main>
  )
}

export default Page