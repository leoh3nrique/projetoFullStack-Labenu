import z from "zod"

export interface SignupIputDto{
    name:string,
    email:string,
    password:string
}

export interface SignupOutputDto{
    token:string
}
 
export const SignupSchema = z.object({
    name:z.string().min(1),
    email:z.string().email(),
    password:z.string().min(4).max(12)
}).transform(data => data as SignupIputDto)