/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from "react";

import {  flexRender, getCoreRowModel, useReactTable,
 } from "@tanstack/react-table";


 interface IProps {
    data:any[],
    columns:any[]
 }
  
 
  

  
  const  Table:React.FC<IProps> = ({data=[],columns}) => {
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <div className="min-h-[400px] w-full shadow-md rounded-md">
        <table className='w-full rounded-md'>
          <thead className=' py-8 text-lg text-white'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th className='bg-blue-500 py-3 border-r border-white' key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td className='border-b border-gray-200 text-center text-lg py-3 '  key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          
        </table>
        <div className="h-4" />
        {/* <button onClick={() => rerender()} className="border p-2">
          Rerender
        </button> */}
      </div>
    )
  }
  

  export default Table