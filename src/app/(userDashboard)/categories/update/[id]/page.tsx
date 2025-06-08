import { Metadata } from 'next';
import React from 'react'

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
    <div>Page{id}</div>
  )
}

export default Page