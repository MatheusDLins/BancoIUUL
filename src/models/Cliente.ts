import {Pessoa} from './Pessoa';
import {Conta} from './Conta';
import {Endereco} from './Endereco';
import {IUsuario} from './IUsuario';

export class Cliente extends Pessoa implements IUsuario{
    private _ListaEnderecos: Endereco[] = [];
    private listaContas: Conta[] = [];
    private _vip: boolean;

    constructor(cpf: string, nome: string, telefone: string,vip: boolean, enderecos: Endereco[]){
        super(cpf,nome,telefone);
        this._vip = vip;
        this._ListaEnderecos = enderecos;
    };

    public get listaEnderecos(): Endereco[] {
        return this._ListaEnderecos;
    }

    public Autenticacao(): boolean{
        return true;
    }

    public listarEnderecos(): string{
        for(var i = 0; i < this.listaEnderecos.length;){
            console.log (`
            ========== Endereço ==========
            \nCEP: ${this.listaEnderecos[i].cep}
            \nLogradouro: ${this.listaEnderecos[i].logradouro}
            \nNumero: ${this.listaEnderecos[i].numero}
            \nComplemento: ${this.listaEnderecos[i].complemento}
            \nCidade: ${this.listaEnderecos[i].cidade}
            \nUF: ${this.listaEnderecos[i].uf}
            `);
            i++
        }
        return ''
        };
    
    public addConta(conta: Conta){
        this.listaContas.push(conta);
    }
}