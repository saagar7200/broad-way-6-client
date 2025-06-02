import SelectInput  from './select-input'

const SelectCategory = () =>{

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
        <div>
            <label>Category</label>
            <SelectInput options={options}/>
        </div>
    )
}

export default SelectCategory