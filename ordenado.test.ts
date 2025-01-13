import { sortArray } from './ordenado';

describe('Array que ordena', () => {
  test('Array que ordena utilizando o método SORT', () => {
    const teste = ['carro', 'boneco', 'ave', 'lapís'];
    const resultado = ['ave', 'boneco', 'carro', 'lapís'];
    expect(sortArray(teste)).toEqual(resultado);
  });
});