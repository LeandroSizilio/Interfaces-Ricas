import { quadrado, quadradoArraycomFor, quadradoArraycomForEach } from './quadrado';

describe('Array quadrado Calculator', () => {
  const Array = [3, 5, 7, 3, 8, 9, 1];
  const resultado = [9, 25, 49, 9, 64, 81, 1];

  test('Teste de Quadrado usando For Simples com array [3,5,7,3,8,9,1]', () => {
    const result = quadradoArraycomFor(Array);
    expect(result).toEqual(resultado);
  });

  test('Teste de Quadrado usando ForEach com array [3,5,7,3,8,9,1]', () => {
    const result = quadradoArraycomForEach(Array);
    expect(result).toEqual(resultado);
  });
});

