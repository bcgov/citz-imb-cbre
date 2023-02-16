import { Express, Request, Response } from 'express';
import { createUserHandler, createUserSchema } from '../user';
import { validate } from '../middleware';

export const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  //? app.use('/api/v1') will this prefix to all routes?

  app.post('/api/v1/users', validate(createUserSchema), createUserHandler);
}

