export interface ILogin {
    email:string;
    password:string
}

export interface IRegister {
    email:string;
    password:string;
    fullName:string;
    userName:string;
    phone?:string;
    confirmPassword:string
}


export interface IUser {
    fullName:string;
    email:string;
    password:string;
    role:string;
    userName:string;
    createdAt:string;
    updatedAt:string;
    _id:string;

}