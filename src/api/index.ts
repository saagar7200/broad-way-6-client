import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API

const apiInstance = axios.create({
    baseURL:url
})


export default apiInstance