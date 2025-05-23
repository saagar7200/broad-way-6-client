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