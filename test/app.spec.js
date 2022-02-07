const request = require('supertest');
const app = require('../src/app');

describe('Given a running app', () => {
  describe('When I call GET /health', () => {
    test('Then I get an HTTP OK', async () => {
      await request(app).get('/health').send().expect(200);
    });
  });
});
