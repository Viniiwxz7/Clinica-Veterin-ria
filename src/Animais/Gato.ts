import { Animal } from "./Animal";
export class Gato extends Animal{
 
    constructor(nome:string,idade:number,tutor:string){
        super(nome,idade,tutor);
    }

    emitirSom():string{
        return "Miau";
    }

    descreverCuidados():string{
        return "Gatos precisam de um arranhador.";
    }

}