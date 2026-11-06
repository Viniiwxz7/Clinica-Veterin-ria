import {Funcionario} from "./Funcionario";

export class Veterinario extends Funcionario {
    private consultasRealizadas: number;

    calcularBonus(): number {
    return this.consultasRealizadas * 50;
}

    realizarConsulta(): void {
        this.consultasRealizadas++;
    }

    prescreverTratamento(): void {
        console.log("Tratamento prescrito pelo veterinário.");
    }

    constructor(nome: string, salario: number, matricula: string, consultasRealizadas: number) {
        super(nome, salario, matricula);
        this.consultasRealizadas = consultasRealizadas;
    }

}

