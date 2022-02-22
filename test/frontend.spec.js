global.getTime = jest.fn();
global.fetch = jest.fn();

const berlinize = require('../static/frontend');

describe('Given a timestamp in the text field', () => {
  beforeEach(() => {
    global.getTime.mockReturnValue('12:34:56');
  });

  describe('When I click the button', () => {
    test('Then the timestamp is read from the text field', () => {
      berlinize();
      expect(global.getTime).toHaveBeenCalled();
    });

    test('Then the berlin time is fetched from the API', () => {
      berlinize();
      expect(global.fetch).toHaveBeenCalledWith('/to-berlin-time/12:34:56');
    });
  });
});
