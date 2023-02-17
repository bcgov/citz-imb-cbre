import { Router } from 'express'
import { createUserHandler } from './user.controller'
import { validateResource } from '../middleware'
import { createUserSchema } from './create'

export const userRouter = Router()

userRouter.post('/create', validateResource(createUserSchema), createUserHandler)
