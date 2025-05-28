"use client";

import React from "react";
import {useForm } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";
import { IRegister } from "@/interfaces/auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/schema/auth.schema";
import {register as registerUser} from '@/api/auth.api'

import {useMutation} from '@tanstack/react-query'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";


const SignUpForm = () => {
	const router = useRouter()
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegister>({
		defaultValues: {
			fullName: "",
			userName: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		},
		// @ts-expect-error // phone is optional
		resolver: yupResolver(RegisterSchema),
		mode: "all",
	});


	const {mutate,isPending} = useMutation({
		mutationFn:registerUser,
		onSuccess:(data) =>{
			console.log('success',data)
			toast.success(data?.message ?? 'User registered successfully.')
			reset()
			router.replace('/auth/login')
		},
		onError:(error) =>{
			toast.error(error?.message ?? 'Registration failed.')
		}
	})


	console.log(errors);

	const onSubmit = (data:IRegister) => {
		console.log("register submitted", data);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const {confirmPassword,...others} = data
		mutate(others)
	};

	return (
		<div className="">
			<form className="w-full  flex justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full rounded-md">
					<div className="flex flex-col gap-1 ">
						<label className="flex text-lg font-semibold text-gray-800">
							Full Name <LuAsterisk className="text-sm text-red-500" />
						</label>
						<input
							{...register("fullName")}
							placeholder="Jhon Doe"
							type="text"
							className={`placeholder:text-lg text-lg border border-gray-400 px-2 py-2 rounded-md  ${
								errors.fullName
									? " border-red-500 focus:outline-red-500"
									: "focus:outline-blue-400"
							}`}
						/>
						{errors.fullName && (
							<p className="text-red-500 text-xs">{errors.fullName.message}</p>
						)}
					</div>
					<div className="flex flex-col gap-1 mt-4">
						<label className="flex text-lg font-semibold text-gray-800">
							User Name <LuAsterisk className="text-sm text-red-500" />
						</label>
						<input
							{...register("userName")}
							placeholder="Jhon Doe"
							type="text"
							className={`placeholder:text-lg text-lg border border-gray-400 px-2 py-2 rounded-md  ${
								errors.userName
									? " border-red-500 focus:outline-red-500"
									: "focus:outline-blue-400"
							}`}
						/>
						{errors.userName && (
							<p className="text-red-500 text-xs">{errors.userName.message}</p>
						)}
					</div>
					<div className="flex flex-col gap-1 mt-4">
						<label className="flex text-lg font-semibold text-gray-800">
							Email <LuAsterisk className="text-sm text-red-500" />
						</label>
						<input
							{...register("email")}
							placeholder="jhondoe@gmail.com"
							type="text"
							className={`placeholder:text-lg text-lg border border-gray-400 px-2 py-2 rounded-md  ${
								errors.email
									? " border-red-500 focus:outline-red-500"
									: "focus:outline-blue-400"
							}`}
						/>
						{errors.email && (
							<p className="text-red-500 text-xs">{errors.email.message}</p>
						)}
					</div>

					<div className="flex flex-col gap-1 mt-3">
						<label className="flex text-lg font-semibold text-gray-800">
							Password <LuAsterisk className="text-sm text-red-500" />
						</label>
						<input
							{...register("password")}
							type="password"
							placeholder="******"
							className={`placeholder:text-lg text-lg border border-gray-400 px-2 py-2 rounded-md  ${
								errors.password
									? " border-red-500 focus:outline-red-500"
									: "focus:outline-blue-400"
							}`}
						/>
						{errors.password && (
							<p className="text-red-500 text-xs">{errors.password.message}</p>
						)}
					</div>
					<div className="flex flex-col gap-1 mt-3">
						<label className="flex text-lg font-semibold text-gray-800">
							Confirm Password <LuAsterisk className="text-sm text-red-500" />
						</label>
						<input
							{...register("confirmPassword")}
							type="password"
							placeholder="******"
							className={`placeholder:text-lg text-lg border border-gray-400 px-2 py-2 rounded-md  ${
								errors.confirmPassword
									? " border-red-500 focus:outline-red-500"
									: "focus:outline-blue-400"
							}`}
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-1 mt-3">
						<label className="flex text-lg font-semibold text-gray-800">
							Phone{" "}
						</label>
						<input
							{...register("phone")}
							type="text"
							placeholder="98XXXXXXXX"
							className={`placeholder:text-lg text-lg border border-gray-400 px-2 py-2 rounded-md  ${
								errors.phone
									? " border-red-500 focus:outline-red-500"
									: "focus:outline-blue-400"
							}`}
						/>
						{errors.phone && (
							<p className="text-red-500 text-xs">{errors.phone.message}</p>
						)}
					</div>
					<div className="w-full mt-8">
						<button
						disabled={isPending}
							type="submit"
							className="disabled:cursor-not-allowed shadow-xl cursor-pointer w-full bg-blue-600 text-white py-3  rounded-md font-bold text-xl"
						>
							{isPending ? 'Loading... ' : 'Sign Up'}
						</button>
					</div>
					<div className='flex justify-center mt-4'>
              		<p>Already have an account?<Link href={'/auth/login'}><span className='ml-1 text-blue-500 underline'>Login</span></Link></p>
            		</div>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
