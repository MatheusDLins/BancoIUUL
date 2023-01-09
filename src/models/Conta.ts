import { Cliente } from "./Cliente";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
  private _numero: string;
  private _cliente: Cliente;
  private _saldo: number;
  private _debito: Debito[] = [];
  private _credito: Credito[] = [];

  constructor(numero: string, cliente: Cliente) {
    this._numero = numero;
    this._cliente = cliente;
    this._saldo = 0;
  }

  public depositar(credito: Credito): void {
    this._credito.push(credito);
    //this.saldo += +credito.valor;
  }

  public sacar(debito: Debito): void {
    if(debito.valor <= this.calcularSaldo()){
      this._debito.push(debito);
      this.saldo -= +debito.valor;
    }else{
      console.log(`Você não pode sacar R$ ${debito.valor} pois não tem Limite suficiente`)
    }
    
  }

  public get consultarDebito(): Debito[]{
    return this._debito;
  }

  public listaDeDebitos(): string{
    console.log('-----------Historico Debito-----------')
    for(var i = 0; i < this.consultarDebito.length;){
      let data = this.consultarDebito[i].data;
      console.log(`
      \nTransferencia do dia ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
      \nValor: -R$${this.consultarDebito[i].valor}
      `);
          i++
      }
      console.log('-----------   Fim   -----------')
      return ''
  }

  public get consultarCredito(): Credito[]{
    return this._credito;
  }

  public listaDeCreditos(): string{
    console.log('-----------Historico Credito-----------')
    for(var i = 0; i < this.consultarCredito.length;){
      let data = this.consultarCredito[i].data;
      console.log(`
          \nTransferencia do dia ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
          \nValor: +R$${this.consultarCredito[i].valor}
          `);
          i++
      }
      console.log('-----------   Fim   -----------')
      return ''
  }

  public calcularSaldo(): number{
    var debito = 0
    var credito = 0
    var total
    this.consultarDebito.forEach(element => {
        debito += element.valor
    });
    this.consultarCredito.forEach(element => {
        credito += element.valor
    });
    total = credito - debito;
    return total
}

  public get saldo(): number {
    return this._saldo;
}

public set saldo(saldo: number) {
    this._saldo = saldo;
}

  public get numero(): string {
    return this._numero;
  }
  public set numero(numero: string) {
    this._numero = numero;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }

  public set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }
}
