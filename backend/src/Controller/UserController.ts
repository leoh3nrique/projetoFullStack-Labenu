import { Request, Response } from "express"
import { UserBusiness } from "../Business/UserBusiness";
import { SignupSchema } from "../dtos/user/signup.dto";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const input = SignupSchema.parse({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
        
            const output = await this.userBusiness.signup(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)
        }

    }
}