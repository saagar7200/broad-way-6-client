import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import React from 'react'

type IProps = {
  onDelete:() => void;
  onEdit:() => void
  onView?:() => void
}

  const ActionButtons:React.FC<IProps> =  ({onDelete,onEdit,onView}) =>{
    return(
      <div className="px-1 flex w-full h-full justify-center gap-1 xl:gap-3">
            {onView &&  <IoEyeOutline title='View Details' onClick={onView} size={26} className='text-blue-500 cursor-pointer'/>}
            <CiEdit title='Edit' onClick={onEdit} size={29} className='text-blue-500 cursor-pointer'/>
            <HiOutlineTrash title={'Delete'} onClick={onDelete} size={24} className='text-red-500 cursor-pointer'/>
      </div> 
    )
  }

  export default React.memo(ActionButtons)