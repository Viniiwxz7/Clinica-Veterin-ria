import { Animal } from "./Animal";
export class Cachorro extends Animal{
 
    constructor(nome:string,idade:number,tutor:string){
        super(nome,idade,tutor);
    }

    emitirSom():string{
        return "Au Au";
    }

    descreverCuidados():string{
        return "Cachorros precisam de passeios diários.";
    }

}