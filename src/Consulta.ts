import { Animal } from "./Animais/Animal";
import { Veterinario } from "./Funcionarios/Veterinario";

export class Consulta {
    private data: Date;
    private animal: Animal;
    private veterinario: Veterinario;

    constructor(data: Date, animal: Animal, veterinario: Veterinario) {
        this.data = data;
        this.animal = animal;
        this.veterinario = veterinario;
    }

    getData(): Date {
        return this.data;
    }

    setData(novaData: Date): void {
        this.data = novaData;
    }

    getAnimal(): Animal {
        return this.animal;
    }

    getVeterinario(): Veterinario {
        return this.veterinario;
    }

    realizar(): void {
        this.veterinario.realizarConsulta();
        console.log(
            `Consulta de ${this.animal.getNome()} (tutor: ${this.animal.getTutor()}) ` +
            `realizada em ${this.data.toLocaleString()}.`);
    }
}