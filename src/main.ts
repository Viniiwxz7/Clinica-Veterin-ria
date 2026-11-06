import { Clinica } from "./Clinica";
import { Consulta } from "./Consulta";
import { Cachorro } from "./Animais/Cachorro";
import { Gato } from "./Animais/Gato";
import { Ave } from "./Animais/Ave";
import { Veterinario } from "./Funcionarios/Veterinario";
import { Recepcionista } from "./Funcionarios/Recepcionista";

const clinica = new Clinica();


const rex = new Cachorro("Rex", 3, "Ana");
const mia = new Gato("Mia", 2, "Carlos");
const piu = new Ave("Piu", 1, "Marta");


const vet = new Veterinario("Dr. João", 4000, "V001", 0);
const recep = new Recepcionista("Paula", 2000, "R001");


clinica.adicionarAnimal(rex);
clinica.adicionarAnimal(mia);
clinica.adicionarAnimal(piu);
clinica.adicionarFuncionario(vet);
clinica.adicionarFuncionario(recep);

console.log("===== CADASTROS =====");
clinica.listarAnimais();
clinica.listarFuncionarios();


console.log("\n===== SONS E CUIDADOS =====");
[rex, mia, piu].forEach((animal) => {
    console.log(`${animal.getNome()} diz: ${animal.emitirSom()}`);
    console.log(`Cuidados: ${animal.descreverCuidados()}`);
});


console.log("\n===== CONSULTA =====");
const consulta = new Consulta(new Date("2026-11-10T14:00:00"), rex, vet);
consulta.realizar();


console.log("\n===== AGENDAMENTOS =====");
recep.agendarAtendimento();
recep.agendarAtendimento();


console.log("\n===== BÔNUS =====");
console.log(`Bônus do veterinário: R$ ${vet.calcularBonus()}`);
console.log(`Bônus da recepcionista: R$ ${recep.calcularBonus()}`);


console.log("\n===== SALÁRIO =====");
console.log(`Salário antes: R$ ${vet.getSalario()}`);
vet.alterarSalario(500);
console.log(`Salário depois de +500: R$ ${vet.getSalario()}`);

try {
    vet.alterarSalario(-100);
} catch (erro) {
    if (erro instanceof Error) {
        console.log(`Erro esperado: ${erro.message}`);
    }
}
console.log(`Salário continua: R$ ${vet.getSalario()}`);