export abstract class Pessoa{
    private _cpf: string;
    private _nome: string;
    private _telefone: string;

    constructor(cpf: string, nome: string, telefone: string) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }

    public apresentacaoBasica(): string{
        return (`
        ========== Informações de ${this.nome} ==========
        \nNome: ${this.nome}
        \nTelefone: ${this.telefone}
        \nCPF: ${this.cpf}
        `);
    }

    public get cpf(): string
    {
           return this._cpf;
       }
   
       public set cpf(cpf: string
   ) {
           this._cpf = cpf;
       }
   
       public get nome(): string
    {
           return this._nome;
       }
   
       public set nome(nome: string
   ) {
           this._nome = nome;
       }
   
       public get telefone(): string {
           return this._telefone;
       }
   
       public set telefone(telefone: string) {
           this._telefone = telefone;
       }
}