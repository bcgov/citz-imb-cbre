import { verify } from 'jsonwebtoken';
import { getErrorMessage } from '../getErrorMessage';
import { logger } from '../logger';

export const verifyAccessToken = (token: string) => {

  const publicKey = process.env.ACCESS_TOKEN_PUBLIC_KEY || 'secret';
  logger.info('verifyAccessToken');
  logger.info(publicKey);
  logger.info(token);
  try {
    const decoded = verify(token, publicKey);
    logger.info(decoded);
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error) {
    return {
      valid: false,
      expired: getErrorMessage(error) === 'jwt expired',
      decoded: null
    };
  }
}
