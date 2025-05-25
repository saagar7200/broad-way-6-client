import { BiBarChart } from "react-icons/bi";
import Link from 'next/link'

const Logo = () =>{
    return (
        <Link href='/' className=' h-full mx-auto tracking-widest flex gap-2 items-center'>
            <BiBarChart size={29} className='text-blue-500'/>
            <p className='text-lg font-seibold text-blue-500'>Expense Flow</p>
        </Link>
    )
}

export default Logo