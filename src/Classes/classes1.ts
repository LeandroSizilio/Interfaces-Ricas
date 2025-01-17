interface Pessoa {
    nome: string,
    novoNome(novo_nome: string): void,
    print(): string
}


export class Aluno implements Pessoa{
    nome: string
    curso:string

    constructor(nome: string, curso: string) { 
        this.nome = nome; 
        this.curso = curso  
    }

    novoNome(novo_nome: string){ 
        this.nome = novo_nome 
    }

    atualizarcurso(novo_curso: string): string{ 
        this.curso = novo_curso; 
        return "Curso atualizado." 
    }

    print(): string{  
        return `Nome: ${this.nome}, Matriculado no curso ${this.curso}.` 
    }
}

export class Professor implements Pessoa{
    nome: string
    materia:string

    constructor(nome: string, materia: string) { 
        this.nome = nome; 
        this.materia = materia; 
    }

    novoNome(novo_nome: string){ 
        this.nome = novo_nome 
    }

    novaMateria(novo_materia: string): string{ 
        this.materia = novo_materia; 
        return "Materia atualizado" 
    }

    print(): string{  
        return `Nome: ${this.nome}, Professor da materia ${this.materia}.` 
    }
}