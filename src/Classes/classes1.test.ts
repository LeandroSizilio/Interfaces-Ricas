import { Aluno, Professor } from './classes1';


test('Teste de Aluno', () => {

    let aluno = new Aluno("Leandro", "TADS");

    expect(aluno.nome).toBe("Leandro");

    expect(aluno.curso).toBe("TADS");

  });

test('Teste Professor', () => {

    let professor = new Professor("Marcelo", "Interfaces Ricas");

    expect(professor.nome).toBe("Marcelo");

    expect(professor.materia).toBe("Interfaces Ricas");

  });

  test('Teste de Mudança de Nome Aluno', () => {

    let aluno = new Aluno("Joao", "TADS");
    
    aluno.novoNome("Lucas")

  });

  test('Teste de Mudança de Professor', () => {

    let professor = new Professor("Luiz", "Interfaces Ricas");
    
    professor.novoNome("Gustavo")
    professor.novaMateria("Programação Orientada a Objetos")

  });