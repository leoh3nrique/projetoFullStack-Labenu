import express from 'express'
import { UserController } from '../Controller/UserController'
import { UserBusiness } from '../Business/UserBusiness'
import { UserDatabase } from '../Database/UserDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { HashManager } from '../services/HashManager'
import { TokenManager } from '../services/TokenManager'

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new TokenManager()
    ))

userRouter.post("/signup", userController.signup)
