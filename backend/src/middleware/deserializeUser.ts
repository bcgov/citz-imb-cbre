import { logger } from "../utils";
import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { verifyAccessToken } from "../utils/accessTokens";

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
