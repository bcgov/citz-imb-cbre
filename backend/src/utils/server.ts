import express, { Request, Response } from 'express';
import { router } from './routes.v1';

export const createServer = (apiVersion: string = 'v1') => {
  const app = express();

  app.use(express.json());

  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.use(`/api/${apiVersion}`, router)

  return app;
}
