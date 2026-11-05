 export abstract class Funcionario{
    private nome: string;
    private salario: number;
    private matricula: string;

    constructor(nome:string, salario:number, matricula:string){
        this.nome=nome;
        this.salario=salario;
        this.matricula=matricula;
    }
    
    setNome(nome:string):void{
        this.nome=nome;
    }

    getNome():string{
        return this.nome;
    }

    setMatricula(matricula:string):void{
        this.matricula=matricula;
    }

    getMatricula():string{
        return this.matricula;
    }

    getSalario():number{
        return this.salario;
    }

    alterarSalario(valor:number):void{
        if(valor<0){
            throw new Error("O valor do aumento deve ser positivo.");
        }
        this.salario+=valor;
    }

    abstract calcularBonus():number;


}