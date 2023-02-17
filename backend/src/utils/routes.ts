import { Express, Request, Response } from 'express';
import { userRouter} from '../user';

export const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.use('/user', userRouter);

}

