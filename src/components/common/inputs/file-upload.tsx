/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ImageUploaderController.jsx
import React from 'react';
import { Controller } from 'react-hook-form';
import ImageUploaderField from './image-uploader';
import { LuAsterisk } from 'react-icons/lu';

interface IProps {
  control:any,
  name:string,
  multiple?:boolean,
  required?:boolean,
  label:string
}

const ImageUploaderController:React.FC<IProps> = ({required=false, label,control, name, multiple = true }) => {
  return (
<div>
    <div className='flex  gap-1/2 mb-1'>
      <label htmlFor='receipts' className=' text-lg  '>{label}</label>
      {required && <LuAsterisk size={18} className='text-red-500'/>}
    </div>
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      // rules={{ required: 'At least one image is required.' }}
      render={({ field, fieldState }) => (
        <ImageUploaderField
          field={field}
          fieldState={fieldState}
          multiple={multiple}
        />
      )}
    />
</div>
  );
};

export default ImageUploaderController;
