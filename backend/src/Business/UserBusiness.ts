import { UserDatabase } from "../Database/UserDatabase";
import { SignupIputDto, SignupOutputDto } from "../dtos/user/signup.dto";
import { TokenPayload, USER_ROLES, User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";



export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private tokenManager: TokenManager

    ) { }

    public async signup(input: SignupIputDto): Promise<SignupOutputDto> {
        const { name, email, password } = input

        const isUserDB = await this.userDatabase.findUserByEmail(email)
        if (isUserDB) {
            throw new Error("Ja existe")
        }
        const id = this.idGenerator.generate()

        const hashedPassword = await this.hashManager.hash(password)

        const newUser = () => {
            const user = new User(
                id,
                name,
                email,
                hashedPassword,
                USER_ROLES.NORMAL,
                new Date().toISOString()
            )
            return user.toDBModel()
        }

        await this.userDatabase.insertUser(newUser())

        const tokenPayload: TokenPayload = {
            id: newUser().id,
            name: newUser().name,
            role: newUser().role
        }
        const token = this.tokenManager.createToken(tokenPayload)


        const output: SignupOutputDto = {
            token: token
        }

        return output
    }

}