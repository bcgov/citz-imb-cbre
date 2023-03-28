import supertest from 'supertest';
import { createServer } from '../utils/server';

const app = createServer();

describe('building', () => {
  describe('get Building route', () => {
    describe('given the building does not exist', () => {
      it('should return 404', async () => {
        const buildingId = '123';

        await supertest(app).get(`/api/building/${buildingId}`).expect(404);
      })
    })
  });
})
