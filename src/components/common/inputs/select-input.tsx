import React from 'react'
import Select from 'react-select'



interface IProps {
    options:{label:string;value:string}[]
}

const SelectInput:React.FC<IProps> = ({options}) => (
  <Select 
  styles={{
    input: (baseStyles) => ({
      ...baseStyles,
      padding:'8px',
    }),
  }}
  options={options} />
)

export default SelectInput