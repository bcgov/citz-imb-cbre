import { Router } from 'express';
import { userRouter } from '../user';
import { sessionRouter } from '../session';
import { deserializeUser } from '../middleware';

export const router = Router();

router.use(deserializeUser)

router.use('/users', userRouter);

router.use('/sessions', sessionRouter)


