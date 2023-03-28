import { logger } from "../utils";
import { Request, Response, NextFunction } from "express";

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
  logger.debug("requireUser");
  if (!res.locals.user) return res.status(401).send("Unauthorized");

  next();
}
