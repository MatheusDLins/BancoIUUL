import {Pessoa} from './Pessoa';
import {IUsuario} from './IUsuario';
import { Cargo } from './Cargo';

export class Funcionario extends Pessoa implements IUsuario {
    private _salario: number;
    private _cargo: Cargo;

    constructor(salario: number,cpf: string, nome: string, telefone: string, cargo: Cargo) {
        super(cpf,nome,telefone);
        this._salario = salario;
        this._cargo = cargo;
    }

    public Autenticacao(): boolean{
        return true;
    }

    public apresentacaoFuncionario(): string{
        return this.apresentacaoBasica()+(`
        \nCargo: ${this.cargo.nome}
        \nSalario: ${this.salario}
        `);
    }

    public get salario(): number
    {
           return this._salario;
       }
   
       public set salario(salario: number
   ) {
           this._salario = salario;
       }
   
       public get cargo(): Cargo {
           return this._cargo;
       }
   
       public set cargo(cargo: Cargo) {
           this._cargo = cargo;
       }
}