import { getErrorMessage } from '../helpers';
import { Request, Response } from 'express';
import { logger } from '../utils';
import { CreateUserInput } from './user.schema';
import { createUser } from './user.service';
import { omit} from 'lodash'

export const createUserHandler = async (req: Request<{}, {}, CreateUserInput["body"]>, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), 'password'));
  }
  catch (error) {
    const message = getErrorMessage(error);
    logger.error(message);
    res.status(409).json({ message });
  }
}
