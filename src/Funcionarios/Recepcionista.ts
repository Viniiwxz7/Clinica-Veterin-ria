import {Funcionario} from "./Funcionario";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number;


    constructor(nome: string, salario: number, matricula: string) {
        super(nome, salario, matricula);
        this.agendamentosConfirmados = 0;
    }

      calcularBonus(): number {
        return this.agendamentosConfirmados * 50;
    }

    agendarAtendimento(): void {
        console.log("Atendimento agendado.");
        this.agendamentosConfirmados++;
    }

}