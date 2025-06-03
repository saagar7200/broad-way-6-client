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
})

// interceptor
apiInstance.interceptors.request.use(function (config) {

    config.headers.Authorization = `BEARER ${getToken()}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default apiInstance