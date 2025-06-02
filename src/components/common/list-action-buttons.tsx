import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";
import React from 'react'

type IProps = {
  onDelete:() => void;
  onEdit:() => void
}

  const ActionButtons:React.FC<IProps> =  ({onDelete,onEdit}) =>{
    return(
      <div className="flex w-full h-full justify-center gap-3">
            <CiEdit title='Edit' onClick={onEdit} size={29} className='text-blue-500 cursor-pointer'/>
            <HiOutlineTrash title={'Delete'} onClick={onDelete} size={24} className='text-red-500 cursor-pointer'/>
      </div> 
    )
  }

  export default React.memo(ActionButtons)