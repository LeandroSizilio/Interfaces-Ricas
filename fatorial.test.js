const fatorial = require('./fatorial');

test('fatorial de 10', () => {
  expect(fatorial(10)).toBe(3628800);
});