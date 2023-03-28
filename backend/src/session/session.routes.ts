import { Router } from 'express'
import { createUserSessionHandler, getSessionsHandler } from './session.controller'
import { requireUser, validateResource } from '../middleware'
import { createSessionSchema } from './session.schema.create'

export const sessionRouter = Router()

sessionRouter.get('/', requireUser, getSessionsHandler)
sessionRouter.post('/', validateResource(createSessionSchema), createUserSessionHandler)
