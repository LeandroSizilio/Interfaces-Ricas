import { Array } from './espaco';

describe('Array que adiciona espaço', () => {
  test('Array que adiciona espaço', () => {
    const teste = ['Arrays', 'com', 'TypeScript'];
    const resultado = 'Arrays com TypeScript';
    expect(Array(teste)).toBe(resultado);
  });
});

