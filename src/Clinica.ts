import { Animal } from "./Animais/Animal";
import { Funcionario } from "./Funcionarios/Funcionario";


export class Clinica {
    private funcionarios: Funcionario[];
    private animais: Animal[];

    constructor() {
        this.funcionarios = [];
        this.animais = [];
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    adicionarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    listarFuncionarios(): void {
        console.log("Lista de Funcionários:");
        this.funcionarios.forEach((funcionario) => {
            console.log(`Nome: ${funcionario.getNome()}, Salário: ${funcionario.getSalario()}, Matrícula: ${funcionario.getMatricula()}`);
        });
    }

    listarAnimais(): void {
        console.log("Lista de Animais:");
        this.animais.forEach((animal) => {
            console.log(`Nome: ${animal.getNome()}, Idade: ${animal.getIdade()}, Tutor: ${animal.getTutor()}`);
        });
    }
}