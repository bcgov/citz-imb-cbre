import * as dotenv from 'dotenv';
dotenv.config();

const { PORT, API_VERSION } = process.env;

import { createServer, logger, dbConnect } from './utils';
import { serve, setup } from 'swagger-ui-express';
import * as swaggerOptions from './swagger.options.json';
import swaggerJsdoc from 'swagger-jsdoc';

const app = createServer(API_VERSION);

const swaggerSpecification = swaggerJsdoc(swaggerOptions);

logger.info(swaggerSpecification)

app.use('/api-docs', serve, setup(swaggerSpecification));

app.listen(PORT, async () => {
  logger.info(`Server listening on port ${PORT}`);

  dbConnect();
});
