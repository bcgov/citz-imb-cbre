import mongoose from "mongoose";
import { logger } from "./logger";
import { getErrorMessage } from "./getErrorMessage";

export const dbConnect = async () => {
  const dbURI: string = process.env.dbURI as string;

  logger.info(`Connecting to db: ${dbURI} ...`)

  try {
    await mongoose.connect(dbURI);
    logger.info("DB connected");
  } catch (error) {
    logger.error(getErrorMessage(error));
    process.exit(1);
  }
}
