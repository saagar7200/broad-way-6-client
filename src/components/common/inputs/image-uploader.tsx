import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

const MAX_FILES = 3;
const MAX_FILE_SIZE_MB = 10;

const ImageUploaderField = ({ field, fieldState, multiple }) => {
  const { onChange, value } = field;
  const { error } = fieldState;

  const [files, setFiles] = useState(value || []);
  const [dropError, setDropError] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setDropError(null);

      if (fileRejections.length > 0) {
        setDropError('Some files were rejected. Please ensure they are under 10MB and valid image types.');
        return;
      }

      let newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      if (!multiple) {
        newFiles = newFiles.slice(0, 1);
      }

      const combinedFiles = multiple ? [...files, ...newFiles].slice(0, MAX_FILES) : newFiles;

      setFiles(combinedFiles);
      onChange(combinedFiles);
    },
    [files, multiple, onChange]
  );

  const removeImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple,
    accept: {
      'image/*': [],
    },
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
  });

  // Revoke data URIs to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-1 border-dashed p-6 rounded-md text-center transition-colors duration-300 cursor-pointer ${
          isDragActive ? 'bg-gray-100 border-blue-400' : 'bg-white border-gray-300'
        } ${dropError ? 'border-red-500' : ''}`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag and drop image{multiple ? 's' : ''} here, or click to select
        </p>
        <p className="text-sm text-gray-400 mt-1">(Max {MAX_FILES} images, {MAX_FILE_SIZE_MB}MB each)</p>
      </div>

      {dropError && <p className="text-red-500 text-sm mt-2">{dropError}</p>}
      {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}

      {files.length > 0 && (
        <div className="flex flex-wrap mt-4 gap-4">
          {files.map((file, index) => (
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
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-700"
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
};

export default ImageUploaderField;
