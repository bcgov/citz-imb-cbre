import { model } from "mongoose";
import { userSchema } from "./user.schema";
import { UserDocument } from "./user.type";

export const UserModel = model<UserDocument>("User", userSchema);
