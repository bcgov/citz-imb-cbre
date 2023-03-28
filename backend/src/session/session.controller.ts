import { validateUser } from "../user";
import { signAccessToken } from "../utils/accessTokens";
import { Request, Response } from "express";
import { createSession, findSessions } from "./session.service";
import { logger } from "../utils";

export const createUserSessionHandler = async (
  req: Request,
  res: Response
) => {
  // Validate the email and password
  const user = await validateUser(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  // Create a session
  const session = await createSession(user._id, req.get("User-Agent") || "");

  // Create an access token
  const accessTimeToLive: string = process.env.ACCESS_TOKEN_TIME_TO_LIVE || "15m";
  const accessToken = signAccessToken({ ...user, session: session._id }, accessTimeToLive);

  // Create a refresh token
  const refreshTimeToLive: string = process.env.REFRESH_TOKEN_TIME_TO_LIVE || "1d";
  const refreshToken = signAccessToken({ ...user, session: session._id }, refreshTimeToLive);

  // Send back refresh and access token
  return res.send({ accessToken, refreshToken });
}

export const getSessionsHandler = async (req: Request, res: Response) => {
  logger.debug("getSessionsHandler");
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: true });
  return res.send(sessions);
}
