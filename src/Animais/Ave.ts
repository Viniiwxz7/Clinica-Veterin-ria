import { Animal } from "./Animal";
export class Ave extends Animal{
 
    constructor(nome:string,idade:number,tutor:string){
        super(nome,idade,tutor);
    }

    emitirSom():string{
        return "Piu Piu";
    }

    descreverCuidados():string{
        return "Aves precisam de uma gaiola adequada ao seu tamanho.";
    }

}