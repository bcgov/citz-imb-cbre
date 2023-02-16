import * as dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

import { createServer, logger, dbConnect } from './utils';

const app = createServer();

app.listen(PORT, async () => {
  logger.info(`Server listening on port ${PORT}`);

  dbConnect();
});
