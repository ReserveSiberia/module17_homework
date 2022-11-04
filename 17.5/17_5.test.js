const reverseStr = require('./17_5');

test('reverse "Hello" to "olleH"', () => {
  expect(reverseStr('Hello')).toBe('olleH');
});