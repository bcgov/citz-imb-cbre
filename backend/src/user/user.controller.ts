import { getErrorMessage } from '../utils';
import { Request, Response } from 'express';
import { logger } from '../utils';
import { createUser, CreateUserInput } from './create'

export const createUserHandler = async (req: Request<{}, {}, CreateUserInput['body']>, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (error) {
    const message = getErrorMessage(error)
    logger.error(message);
    return res.status(400).send(message);
  }
};
