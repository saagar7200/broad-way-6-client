'use client'
import SideBar from '@/components/layout/sidebar/sidebar'
import Header from '@/components/layout/header/header'
import React from 'react'
import { withAuth } from '@/components/auth/withAuth'

const Layout = ({children}:Readonly<{children:React.ReactNode}>) =>{

    return( 
        <div className={`w-full h-full flex overflow-y-clip`}>

            {/* side bar */}
            <div className='h-full min-h-[100vh] w-[300px] border-r border-blue-500 '>
                <SideBar/>
            </div>
            <div className=' w-full  overflow-y-auto'>
                {/* header */}
                <div className='z-50 backdrop-blur-2xl  px-5 w-full  fixed   py-4  shadow-md top-0 flex items-center  '>
                    <Header/>
                </div>
    
                 {/* main content */}
                 <div className='mt-20 pb-20 2xl:pb-0 -z-50  flex flex-col  p-5 overflow-y-auto'>
                    {children}
                </div>
    
                 {/* footer */}
                 <div className='fixed z-50 backdrop-blur-2xl bottom-0 w-full border-t border-blue-500 px-5 py-4'>
                    <p>Footer</p>
                </div>
                </div>

        </div>
    )

}

export default withAuth(Layout,['User'])