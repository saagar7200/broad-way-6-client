import React from 'react'
import Select from 'react-select'



interface IProps {
    options:{label:string;value:string}[]
}

const SelectInput:React.FC<IProps> = ({options}) => (
  <Select options={options} />
)

export default SelectInput