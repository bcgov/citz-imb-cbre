import express, { Request, Response } from 'express';

export const createServer = () => {
  const app = express();

  app.use(express.json());

  const router = express.Router();

  router.get('/', (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.use('/api/v1', router)

  return app;
}
