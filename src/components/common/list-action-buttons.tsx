import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";



  const ActionButtons = () =>{
    return(
      <div className="flex w-full h-full justify-center gap-3">
            <CiEdit size={29} className='text-blue-500 cursor-pointer'/>
            <HiOutlineTrash size={24} className='text-red-500 cursor-pointer'/>
      </div>
    )
  }

  export default ActionButtons