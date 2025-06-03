import { getAllCategoryByUser } from '@/api/category.api'
import SelectInput  from './select-input'
import {useQuery} from '@tanstack/react-query'
import { ICategoryResponse } from '@/interfaces/category.interface'


const SelectCategory = () =>{

    const {data} = useQuery({
        queryFn:getAllCategoryByUser,
        queryKey:['get-all-user-category']
    })



    const options = data?.data.map((cat:ICategoryResponse) =>({
        label:cat.name,
        value:cat._id
    }))


    return (
        <div>
            <label>Category</label>
            <SelectInput options={options}/>
        </div>
    )
}

export default SelectCategory