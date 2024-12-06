import fatorial from './fatorial';

test('fatorial de 10', () => {
  expect(fatorial(10)).toBe(3628800);
});

test('fatorial de 7', () => {
  expect(fatorial(7)).toBe(5040);
});

