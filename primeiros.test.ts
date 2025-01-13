import { getTwoFirstElements } from './primeiros';

describe('Array 2 primeiros', () => {
  test('Programa que pega os 2 primeiros numeros do array [2,4,6,2,8,9,5]', () => {
    const teste = [2,4,6,2,8,9,5];
    const resultado = [2,4];
    expect(getTwoFirstElements(teste)).toEqual(resultado);
  });
});
