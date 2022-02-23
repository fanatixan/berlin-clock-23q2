global.getTime = jest.fn();
global.fetch = jest.fn();
global.showSeconds = jest.fn();

const berlinize = require('../static/frontend');

describe('Given a timestamp in the text field', () => {
  beforeEach(() => {
    global.getTime.mockReturnValue('12:34:56');
    global.fetch = jest.fn().mockResolvedValue({
      body: {
        seconds: 'Y',
        fiveHours: 'ROOO',
        oneHour: 'OOOO',
        fiveMinutes: 'YYROOOOOOOO',
        oneMinute: 'YYOO',
      },
    });
  });

  afterAll(() => global.fetch.mockRestore());

  describe('When I click the button', () => {
    test('Then the timestamp is read from the text field', async () => {
      await berlinize();
      expect(global.getTime).toHaveBeenCalled();
    });

    test('Then the berlin time is fetched from the API', async () => {
      await berlinize();
      expect(global.fetch).toHaveBeenCalledWith('/to-berlin-time/12:34:56');
    });

    test('Then the berlin time is presented in the UI', async () => {
      await berlinize();
      expect(global.showSeconds).toHaveBeenCalledWith('Y');
    });
  });
});
