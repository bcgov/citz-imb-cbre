import supertest from 'supertest';
import { createServer } from './server';

const app = createServer();

describe('server', () => {
  describe('get root route', () => {
      it('should return 404', async () => {
        await supertest(app).get(`/`).expect(404);
      })
  });
  describe('get api route', () => {
    it('should return 404', async () => {
      await supertest(app).get(`/api`).expect(404);
    })
  });
  describe('get api/v1 route', () => {
    it('should return 404', async () => {
      await supertest(app).get(`/api/v1`).expect(404);
    })
  });
  describe('get healthcheck route', () => {
    it('should return 200', async () => {
      await supertest(app).get(`/healthcheck`).expect(200);
    })
  });
})
