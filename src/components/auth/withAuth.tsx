'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { parseToken } from "@/utils/parse-token";

export function withAuth<T>(Component:React.ComponentType<T>,roles:string[]){


    return function WithAuthComponent(props:any) {
        const router = useRouter()
            
        useEffect(()=>{
            const token = Cookies.get('access_token')
            const {valid,role} =  parseToken(token ?? '')
            if(!valid || !roles.includes(role ?? '')){
                toast.error('Session expired.Try login again.')
                Cookies.remove('access_token')
                localStorage.removeItem('user')
                router.replace('/auth/login')
                return
            }
        },[])


        return <Component {...props}/>

    } 
}