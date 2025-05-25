import { MdOutlinePerson } from "react-icons/md";
import Link from 'next/link'
import { AiOutlineLogout } from "react-icons/ai";

const Header = () =>{
    return(
        <div className='w-full h-full flex flex-1  items-center justify-between tracking-wider px-4'>
            <div>
                <p >Hello Bob</p>
            </div>
            <div className='flex items-center gap-4 h-full'>
                <Link href={'#'}>
                    <MdOutlinePerson className='text-blue-500' size={27}/>
                </Link>
                <div>
                    <button className='flex gap-2 items-center text-lg tracking-wider px-3 py-1 cursor-pointer h-full text-red-500 border border-red-500 rounded-sm'>
                        Logout
                        <AiOutlineLogout className='text-red-500' size={23}/>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Header