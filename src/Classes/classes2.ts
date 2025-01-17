export abstract class Empregado  {
    constructor(public nome: string, public cargo: string, public salario: number){}

    protected abstract calcularPromocao(salario: number): number;

    abstract print(): string;

    static aplicarAumento(empregado: Empregado, bonus: number){

        empregado.salario = empregado.salario + bonus

    }

}


export class Medico extends Empregado{
    constructor(nome: string, cargo: string, salario: number){

        super(nome, cargo, salario)
    }

    alterarNome(nome: string){
        this.nome = nome
    }
    alterarsalario(salario: number){
        this.salario = salario
    }
    alterarcargo(cargo: string){
        this.cargo = cargo
    }

    protected calcularPromocao(salario: number): number{ 
        return (salario * 0.2) 
    }

    promocao(salario: number): number { 
        return this.salario + this.calcularPromocao(salario)
    }

    print(): string{  
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, salario: ${this.salario}.` }
}


export class Seguranca extends Empregado{
    constructor(nome: string, cargo: string, salario: number){
        super(nome, cargo, salario)
    }

    alterarNome(nome: string){
        this.nome = nome
    }
    alterarsalario(salario: number){
        this.salario = salario
    }
    alterarcargo(cargo: string){
        this.cargo = cargo
    }

    protected calcularPromocao(diaria: number): number{ 
        return (diaria * 200) 
    }

    promocao(salario: number): number { 
        return this.salario + this.calcularPromocao(salario)
    }

    print(): string{  
        return `Nome: ${this.nome}, salario: ${this.salario}, Cargo: ${this.cargo}` }
}
