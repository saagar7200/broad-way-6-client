"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";
import { IRegister } from "@/interfaces/auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/schema/auth.schema";

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegister>({
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		},
		// @ts-expect-error // phone is optional
		resolver: yupResolver(RegisterSchema),
		mode: "all",
	});
	console.log(errors);

	const onSubmit: SubmitHandler<Partial<IRegister>> = (data) => {
		console.log("register submitted", data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="w-[400px] py-4 rounded-md">
					<div className="flex flex-col gap-1 mt-4">
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
							type="submit"
							className="shadow-xl cursor-pointer w-full bg-blue-600 text-white py-3  rounded-md font-bold text-xl"
						>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
