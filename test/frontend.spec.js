global.getTime = jest.fn();
global.fetch = jest.fn();
global.showSeconds = jest.fn();
global.showFiveHours = jest.fn();
global.showOneHour = jest.fn();
global.showFiveMinutes = jest.fn();
global.showOneMinute = jest.fn();

const berlinize = require('../static/frontend');

const berlinTime = jest.fn();

describe('Given a timestamp in the text field', () => {
  beforeEach(() => {
    global.getTime.mockReturnValue('12:34:56');
    berlinTime.mockResolvedValue({
      seconds: 'Y',
      fiveHours: 'ROOO',
      oneHour: 'OOOO',
      fiveMinutes: 'YYROOOOOOOO',
      oneMinute: 'YYOO',
    });

    global.fetch.mockResolvedValue({
      json: berlinTime,
    });
  });

  afterAll(() => {
    global.fetch.mockRestore();
    berlinTime.mockRestore();
  });

  describe('When I click the button', () => {
    test('Then the timestamp is read from the text field', async () => {
      await berlinize();
      expect(global.getTime).toHaveBeenCalled();
    });

    test('Then the berlin time is fetched from the API', async () => {
      await berlinize();
      expect(global.fetch).toHaveBeenCalledWith('/to-berlin-time/12:34:56');
      expect(berlinTime).toHaveBeenCalled();
    });

    test('Then the berlin time is presented in the UI', async () => {
      await berlinize();
      expect(global.showSeconds).toHaveBeenCalledWith('Y');
      expect(global.showFiveHours).toHaveBeenCalledWith('ROOO');
      expect(global.showOneHour).toHaveBeenCalledWith('OOOO');
      expect(global.showFiveMinutes).toHaveBeenCalledWith('YYROOOOOOOO');
      expect(global.showOneMinute).toHaveBeenCalledWith('YYOO');
    });
  });
});
