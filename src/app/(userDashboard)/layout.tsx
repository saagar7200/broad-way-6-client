import SideBar from '@/components/layout/sidebar/sidebar'
import Header from '@/components/layout/header/header'
import React from 'react'

const Layout = ({children}:Readonly<{children:React.ReactNode}>) =>{

    return( 
        <div className={`w-full h-full flex overflow-y-hidden`}>

            {/* side bar */}
            <div className='h-full min-h-[100vh] w-[300px] border-r border-blue-500 '>
                <SideBar/>
            </div>
            <div className='w-full'>
                {/* header */}
                <div className='z-50  px-5 w-full   py-4  shadow-md top-0 flex items-center '>
                    <Header/>
                </div>
    
                 {/* main content */}
                 <div className='-z-50 min-h-[100vh] mt-15 flex flex-col h-full p-5 overflow-y-auto'>
                    {children}
                </div>
    
                 {/* footer */}
                 <div className='fixed bottom-1 w-full border-t border-blue-500 px-5 py-4'>
                    <p>Footer</p>
                </div>
                </div>

        </div>
    )

}

export default Layout