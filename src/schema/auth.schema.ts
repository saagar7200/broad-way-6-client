
import * as yup from 'yup'

export const LoginSchema = yup.object({
    email:yup.string().required('Email is required.').email('Enter valid email.'),
    password:yup.string().required('Password is required')
})


export const RegisterSchema = yup.object({
    fullName:yup.string().required('Full name is required.'),
    email:yup.string().required('Email is required.').email('Enter valid email.'),
    password:yup.string().required('Password is required').min(6,'Password must be at least 6 character long.').matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
        'Password must include at least one uppercase letter, one number, and one special character.'
      ),
    confirmPassword:yup.string().required('Confirm password is required').oneOf([yup.ref('password'),''],'Passwords must match'),
    phone:yup.string().optional()

})