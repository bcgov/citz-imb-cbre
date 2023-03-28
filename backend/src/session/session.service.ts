import { FilterQuery } from "mongoose";
import { UserDocument } from "../user";
import { SessionModel } from "./session.model";

export const createSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({ user: userId, userAgent });
  return session.toJSON();
}

export const findSessions = async (query: FilterQuery<typeof SessionModel>) => {
  const sessions = await SessionModel.find(query).lean();
  return sessions;
}
