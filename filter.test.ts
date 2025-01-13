import { filterPar } from './filter';

describe('Array Filter Even Numbers Program', () => {
  test('filters even numbers from the array [8, 3, 9, 5, 6, 12]', () => {
    const array = [8, 3, 9, 5, 6, 12];
    const resultado = [8, 6, 12];
    expect(filterPar(array)).toEqual(resultado);
  });
});

