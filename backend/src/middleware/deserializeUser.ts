import { logger } from "../utils";
import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { verifyAccessToken } from "../utils/accessTokens";

/**
 * extract the access token from the request header and verify it
 *
 * if the token is valid, add the user to the response locals
 * if the token is invalid, do nothing
 * if the token is expired, do nothing
 * if the token is missing, do nothing
 * if the token is malformed, do nothing
 * if the token is not signed, do nothing
 *
 * if the token is valid, the user will be available in the response locals
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  if (!accessToken) return next();

  try {
    const { decoded, expired } = verifyAccessToken(accessToken);
    logger.debug("deserializeUser", { decoded, expired });
    if (expired ) return next();

    if (decoded) {
      res.locals.user = decoded;
      return next();
    }

    return next();
  } catch (error) {
    return next();
  }
}
