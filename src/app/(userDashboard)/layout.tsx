import React from 'react'

const Layout = ({children}:Readonly<{children:React.ReactNode}>) =>{

    return( 
        <div className={`w-full h-full flex`}>

            {/* side bar */}
            <div className='h-full min-h-[100vh] w-[300px] border border-blue-500 '>
                <p>Side bar</p>
            </div>
            <div>
                {/* heander */}
                <div className='z-50 w-full px-5 min-h-[40px]  py-4 fixed shadow-md top-0 flex items-center '>
                    <p>Header</p>
                </div>
    
                 {/* main content */}
                 <div className='-z-50 mt-15 flex flex-col h-full p-5'>
                    {children}
                </div>
    
                 {/* footer */}
                 <div className='fixed bottom-1 w-full border border-blue-500 px-5 py-4'>
                    <p>Footer</p>
                </div>
                </div>

        </div>
    )

}

export default Layout