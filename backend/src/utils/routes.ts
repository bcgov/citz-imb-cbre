import { Express, Request, Response } from 'express';
import { userRouter } from '../user';
import { sessionRouter } from '../session';
import { deserializeUser } from '../middleware';

export const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.use(deserializeUser)

  app.use('/api/users', userRouter);

  app.use('/api/sessions', sessionRouter)

}

