import { model } from "mongoose";
import { sessionSchema } from "./session.schema";
import { SessionDocument } from "./session.type";

export const SessionModel = model<SessionDocument>("Session", sessionSchema);
