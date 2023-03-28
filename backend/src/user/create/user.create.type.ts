import { TypeOf } from "zod";
import { createUserSchema } from "./user.create.schema";

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.password">
