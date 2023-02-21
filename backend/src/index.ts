import * as dotenv from 'dotenv';
dotenv.config();

const { PORT, API_VERSION } = process.env;

import { createServer, logger, dbConnect } from './utils';

const app = createServer(API_VERSION);

app.listen(PORT, async () => {
  logger.info(`Server listening on port ${PORT}`);

  dbConnect();
});
