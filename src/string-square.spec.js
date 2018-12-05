const { stringSquare } = require('./string-square');

test('returns the square of a non-empty string', () => {
  const sl = stringSquare('hello');
  expect(sl).toBe('hello'.length ** 2);
});

test('returns zero for empty string', () => {
  const sl = stringSquare('');
  expect(sl).toBe(0);
});

test('returns -1 for undefined', () => {
  const sl = stringSquare();
  expect(sl).toBe(-1);
});

test('returns -1 for non-string', () => {
  const sl = stringSquare(200);
  expect(sl).toBe(-1);
});
