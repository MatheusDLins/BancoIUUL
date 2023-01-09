import {Cliente} from "../models/Cliente";
import { Endereco } from "../models/Endereco";
import {Credito} from "../models/Credito";
import { ContaCorrente } from "../models/ContaCorrente";
import { ContaPoupanca } from "../models/ContaPoupanca";





//Crie um cliente que possua uma ContaCorrente
const endereco1 = new Endereco("13411211","Rua joao", 111, "Casa", "Paulista", "PE");

const cliente1 = new Cliente("123.123.123-51", "luiz", "91525354", true, [endereco1]);

const conta1 = new ContaCorrente('01',cliente1,1000)

//Efetue um depósito de 1000 nessa ContaCorrente
const credito1 = new Credito(1000,new Date(2001,5,31))
conta1.depositar(credito1)
console.log("Saldo inicial conta 1: " + conta1.calcularSaldo());


//Crie um cliente que possua uma ContaPoupanca
const endereco2 = new Endereco("23999211","Rua joao2", 222, "Casa", "Paulista2", "PE");

const cliente2 = new Cliente("123.123.123-51", "luiza", "91525354", true, [endereco2]);

const conta2 = new ContaPoupanca('02',cliente2,1)

//Efetue um depósito de 1000 reais nessa conta Poupanca
const credito2 = new Credito(1000,new Date(2001,6,10))
conta2.depositar(credito2)
console.log("Saldo inicial conta 2: " + conta2.calcularSaldo());

//Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
conta1.transferir(conta2, 500)

//Verificando saldo
console.log("Saldo Final conta 1: " + conta1.calcularSaldo());


console.log("Saldo Final conta 2: " + conta2.calcularSaldo());