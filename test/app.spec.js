const request = require('supertest');
const toBerlinTime = require('../src/BerlinClock');

jest.mock('../src/BerlinClock');
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

    test('Then I get a JSON object', async () => {
      const time = '00:00:00';
      const expectedResponse = {
        seconds: 'Y',
        fiveHours: 'OOOO',
        oneHour: 'OOOO',
        fiveMinutes: 'OOOOOOOOOOO',
        oneMinute: 'OOOO',
      };
      toBerlinTime.mockReturnValue(expectedResponse);
      const response = await request(app)
        .get(`/to-berlin-time/${time}`)
        .send()
        .expect('Content-Type', /json/);
      expect(response.body).toEqual(expectedResponse);
      expect(toBerlinTime).toHaveBeenCalledWith(time);
    });
  });
});
