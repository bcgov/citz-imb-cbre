import { createServer } from './utils/server';

const app = createServer();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
