import supertest from 'supertest';
import { createServer } from './server';

const app = createServer();

describe('server', () => {
  describe('get', () => {
    describe('given / is not accessible', () => {
      it('should return 404', async () => {
        await supertest(app).get(`/`).expect(404);
      })
      describe('given /api is not accessible', () => {
        it('should return 404', async () => {
          await supertest(app).get(`/api`).expect(404);
        })
        describe('given /api/v1 is not accessible', () => {
          it('should return 404', async () => {
            await supertest(app).get(`/api/v1`).expect(404);
          })
        });

      });
    });

    describe('given /healthcheck is accessible', () => {
      it('should return 200', async () => {
        await supertest(app).get(`/healthcheck`).expect(200);
      })
    });
  })
});
