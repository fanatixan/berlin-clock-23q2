global.getTime = jest.fn(() => '12:34:56');

const berlinize = require('../static/frontend');

describe('Given a timestamp in the text field', () => {
  describe('When I click the button', () => {
    test('Then the timestamp is read from the text field', () => {
      berlinize();
      expect(global.getTime).toHaveBeenCalled();
    });
  });
});
