// components/ImageUploaderController.jsx
import React from 'react';
import { Controller } from 'react-hook-form';
import ImageUploaderField from './image-uploader';

const ImageUploaderController = ({ control, name, multiple = true }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      rules={{ required: 'At least one image is required.' }}
      render={({ field, fieldState }) => (
        <ImageUploaderField
          field={field}
          fieldState={fieldState}
          multiple={multiple}
        />
      )}
    />
  );
};

export default ImageUploaderController;
