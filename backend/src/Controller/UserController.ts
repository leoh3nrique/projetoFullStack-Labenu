import { UserBusiness } from "../Business/UserBusiness";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            

        } catch (error) {
            console.log(error)
        }

    }
}