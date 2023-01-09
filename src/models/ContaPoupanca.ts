import {Conta} from "./Conta";
import {Cliente} from "./Cliente";
import {Credito} from "./Credito";
import { Debito } from "./Debito";


export class ContaPoupanca extends Conta{
    private _rentabilidadeMensal: number;
    private _listaDeTransacoes: [] =[];

    constructor(numero: string, cliente:Cliente, rentabilidadeMensal: number) {
        super(numero,cliente)
        this._rentabilidadeMensal = rentabilidadeMensal;
    }

    public calcularRendimento(): number {
        var dataInicial: number = this.consultarCredito[0].data.getMonth();
        var dataFinal: number = this.consultarCredito[this.consultarCredito.length - 1].data.getMonth();

        

        console.log("=============INFO==============");
        console.log(`Primeiro deposito foi no mês: ${dataInicial}`);
        console.log(`Ultimo deposito foi no mês: ${dataFinal}`);

        var rendimentoTotal: number = 0
        var rentabilidade: number = this.rentabilidadeMensal/100;
        console.log(`A rentabilidade é de: ${rentabilidade}`);
        
        var saldoAtual: number = 0;
        console.log(`O Saldo inicial é de ${saldoAtual.toFixed(2)}`);

        
        console.log("===============================");
        
        
        
        while(dataInicial <= dataFinal) {
            
            var credito = this.consultarCredito[dataInicial]


            
                
            if(credito){
                console.log(`----------MES: ${dataInicial}----------`);
                saldoAtual += credito.valor
                console.log(`novo saldo de: ${credito.valor} depositado na data ${credito.data.getDate()}/${credito.data.getMonth()}/${credito.data.getFullYear()}`);

                this.consultarDebito.forEach(debito => {
                    if(debito.data.getMonth() == dataInicial) {
                        var dataD = debito.data;
                        console.log(`Foi encontrado um debito de ${debito.valor} na data ${dataD.getDate()}/${dataD.getMonth()}/${dataD.getFullYear()}`);
                        
                        saldoAtual -= debito.valor
    
                        console.log(`Saldo apos debito de ${debito.valor} é de ${saldoAtual.toFixed(2)}`);                       
                    }               
                })


                var rendimento = saldoAtual*rentabilidade
                        saldoAtual += rendimento;
                        console.log(`Rendimento de: ${rendimento.toFixed(2)}`);
                        rendimentoTotal += rendimento;
                        console.log(`valor em conta: ${saldoAtual.toFixed(2)}`);
                        console.log("--------------------------");
            }else{
                var rendimento = saldoAtual*rentabilidade;
                saldoAtual += rendimento;
                console.log(`---------+MES: ${dataInicial}----------`);
                console.log(`valor em conta: ${saldoAtual.toFixed(2)}`);
                console.log(`Rendimento de: ${rendimento.toFixed(2)}`);
                
                        console.log("--------------------------");
                rendimentoTotal += rendimento;               
            }
            
            
        
         
        dataInicial++   
        }

        console.log(`Seus investimentos renderam ${rendimentoTotal.toFixed(2)}`);

        return rendimentoTotal;
        
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

    public get rentabilidadeMensal(): number {
        return this._rentabilidadeMensal;
    }

    public set rentabilidadeMensal(rentabilidadeMensal: number) {
        this._rentabilidadeMensal = rentabilidadeMensal;
    }

    public get listaDeTransacoes(): []{
        return this._listaDeTransacoes;
    }
}