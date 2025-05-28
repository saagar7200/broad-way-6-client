import axios from 'axios'
import Cookies from 'js-cookie';


const getToken = () =>{
 const token = Cookies.get('access_token')
 console.log(token)
 return token

}

const url = process.env.NEXT_PUBLIC_API

const apiInstance = axios.create({
    baseURL:url,
    headers:{
        Authorization:`BEARER ${getToken()}`
    }
})


export default apiInstance