import React, { useCallback, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const ImageUploader = ({ control, name, multiple = true }) => {
  const [dropError, setDropError] = useState('');

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      rules={{ required: 'At least one image is required.' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const onDrop = useCallback(
          (acceptedFiles) => {
            setDropError('');
            const filesWithPreview = acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            );
            onChange(multiple ? [...value, ...filesWithPreview] : filesWithPreview);
          },
          [onChange, value, multiple]
        );

        const onDropRejected = useCallback((fileRejections) => {
          const errors = fileRejections[0]?.errors || [];
          if (errors.length > 0) {
            const message = errors[0].message;
            setDropError(message);
          }
        }, []);

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          onDropRejected,
          accept: {
            'image/*': ['.jpg', '.jpeg', '.png', '.webp'],
          },
          maxFiles: 3,
          maxSize: 5 * 1024 * 1024, // 10MB
          multiple,
        });

        useEffect(() => {
          return () => {
            value.forEach((file) => URL.revokeObjectURL(file.preview));
          };
        }, [value]);

        const removeImage = (index) => {
          const newFiles = [...value];
          newFiles.splice(index, 1);
          onChange(newFiles);
        };

        return (
          <div>
            <div
              {...getRootProps()}
              className={`border-1 border-dashed p-6 rounded-md text-center transition-colors duration-300 cursor-pointer ${
                isDragActive ? 'bg-gray-100 border-blue-400' : 'bg-white border-gray-300 '
              } ${dropError ? 'border-red-500'  : ''} `}
            >
              <input {...getInputProps()} />
              <p className="text-gray-600">
                Drag and drop image{multiple ? 's' : ''} here, or click to select
              </p>
              <p className="text-sm text-gray-400 mt-1">(Max 3 images, 10MB each)</p>
            </div>

            {dropError && (
              <p className="text-red-500 text-sm mt-2">{dropError}</p>
            )}

            {error && (
              <p className="text-red-500 text-sm mt-2">{error.message}</p>
            )}

            {value.length > 0 && (
              <div className="flex flex-wrap mt-4 gap-4">
                {value.map((file, index) => (
                  <div key={index} className="relative w-24 h-24 rounded overflow-hidden border">
                    <Image
                    height={400}
                    width={400}
                      src={file.preview}
                      alt={`Preview ${index}`}
                      className="object-cover w-full h-full"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="cursor-pointer absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-700"
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default ImageUploader;
