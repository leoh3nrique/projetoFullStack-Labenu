import { UserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public async findUserByEmail(email:string): Promise<UserDB>{
        const [request] = await BaseDatabase.connection("users").where({ email: email })
        return request
    }
    
    public async insertUser(newUser: UserDB): Promise<void> {
        await BaseDatabase.connection("users").insert(newUser)
    }

}