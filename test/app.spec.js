const request = require('supertest');
const app = require('../src/app');

describe('Given a running app', () => {
  describe('When I call GET /health', () => {
    test('Then I get an HTTP OK', async () => {
      await request(app).get('/health').send().expect(200);
    });
  });
});

describe('Given a time <time>', () => {
  describe('When I call GET /to-berlin-time/<time>', () => {
    test('Then I get an HTTP OK', async () => {
      const time = '00:00:00';
      await request(app).get(`/to-berlin-time/${time}`).send().expect(200);
    });
  });
});
