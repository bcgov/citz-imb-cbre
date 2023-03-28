import { Router } from 'express'
import { createUserHandler } from './user.controller'
import { validateResource } from '../middleware'
import { createUserSchema } from './create'

export const userRouter = Router()

/**
 * @openapi
 * /users:
 *  post:
 *   summary: Create a new user
 *  tags:
 *  - Users
 * requestBody:
 * required: true
 * content:
 * application/json:
 */
userRouter.post('/', validateResource(createUserSchema), createUserHandler)
