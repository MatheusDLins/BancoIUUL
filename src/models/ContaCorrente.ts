import {Conta} from "./Conta";
import {Cliente} from "./Cliente";
import { ContaPoupanca } from "./ContaPoupanca";
import { Credito } from "./Credito";
import { Debito } from "./Debito";


export class ContaCorrente extends Conta{
    private _limite: number;

    constructor(numero: string, cliente:Cliente, limite: number) {
        super(numero,cliente)
        this._limite = limite;
    }

    public transferir(contaDestino: ContaCorrente | ContaPoupanca, valor: number): void {
        if(valor > this.limite) {
            console.log(`Você não pode transferir para a conta ${contaDestino.numero} pois seu limite atual é de ${this.limite}, tente um valor mais baixo`)
        }else{
            this.sacar(new Debito(valor, new Date(2001,3,22)))
            contaDestino.depositar(new Credito(valor, new Date()))
        }

        console.log("Realizando transferencia...")
        
    }

    public get limite(): number {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }
}