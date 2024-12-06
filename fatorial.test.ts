import fatorial from './fatorial';

test('fatorial de 10', () => {
  expect(fatorial(10)).toBe(3628800);
});

test('fatorial de 7', () => {
  expect(fatorial(7)).toBe(5040);
});

test('fatorial de 0', () => {
  expect(fatorial(0)).toBe(1);
});

test('Fatorial -5', () => {
  expect(() => {fatorial(-5);}).toThrow("Número negativo não é permitido");
});