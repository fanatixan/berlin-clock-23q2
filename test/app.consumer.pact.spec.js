const { pactWith } = require('jest-pact');
// import { Matchers } from '@pact-foundation/pact';

const api = require('./mock-api');

// const toBerlinTime = require('../src/BerlinClock');

jest.mock('../src/BerlinClock');

pactWith(
  { consumer: 'BerlinClockApiConsumer', provider: 'BerlinClockApiProvider' },
  (provider) => {
    let client;

    beforeEach(() => {
      client = api(provider.mockService.baseUrl);
    });

    describe('Given a running app', () => {
      describe('When I call GET /health', () => {
        beforeEach(() =>
          provider.addInteraction({
            state: 'Server is healthy',
            uponReceiving: 'A request for healthcheck endpoint',
            willRespondWith: {
              status: 200,
            },
            withRequest: {
              method: 'GET',
              path: '/health',
            },
          }),
        );

        test('Then I get an HTTP OK', async () => {
          const status = await client.health();
          expect(status).toBe(200);
        });
      });
    });
  },
);

// describe('Given a time <time>', () => {
//   describe('When I call GET /to-berlin-time/<time>', () => {
//     test('Then I get an HTTP OK', async () => {
//       const time = '00:00:00';
//       await request(app).get(`/to-berlin-time/${time}`).send().expect(200);
//     });

//     test('Then I get a JSON object', async () => {
//       const time = '00:00:00';
//       const expectedResponse = {
//         seconds: 'Y',
//         fiveHours: 'OOOO',
//         oneHour: 'OOOO',
//         fiveMinutes: 'OOOOOOOOOOO',
//         oneMinute: 'OOOO',
//       };
//       toBerlinTime.mockReturnValue(expectedResponse);
//       const response = await request(app)
//         .get(`/to-berlin-time/${time}`)
//         .send()
//         .expect('Content-Type', /json/);
//       expect(response.body).toEqual(expectedResponse);
//       expect(toBerlinTime).toHaveBeenCalledWith(time);
//     });
//   });
// });
