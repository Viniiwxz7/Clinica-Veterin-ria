export abstract class Animal{
    private nome : string;
    private idade : number;
    private tutor : string;

    constructor(nome:string,idade:number,tutor:string){
        this.nome=nome;
        this.idade=idade;
        this.tutor=tutor;
    }

    setNome(nome:string):void{
        this.nome=nome;
    }

    getNome():string{
        return this.nome;
    }

    setIdade(idade:number):void{
        this.idade=idade;
    }

    getIdade():number{
        return this.idade;
    }

    setTutor(tutor:string):void{
        this.tutor=tutor;
    }

    getTutor():string{
        return this.tutor;
    }

    abstract emitirSom():void;
    abstract descreverCuidados():void;

}