import {Cliente} from "../models/Cliente";
import { Endereco } from "../models/Endereco";
import {Credito} from "../models/Credito";
import { ContaCorrente } from "../models/ContaCorrente";
import { Debito } from "../models/Debito";

const endereco1 = new Endereco("13411211","Rua joao", 111, "Casa", "Paulista", "PE");

const cliente1 = new Cliente("123.123.123-51", "luiz", "91525354", true, [endereco1]);

const contaC = new ContaCorrente('01',cliente1,1000)

const credito = new Credito(100,new Date(1995,11,17))
const debito = new Debito(50,new Date(1995,11,17))

contaC.depositar(credito)
contaC.depositar(credito)
contaC.depositar(credito)
contaC.sacar(debito)

console.log("Saldo: " + contaC.calcularSaldo());

//Caso queira verificar o historico de credito e debito basta descomentar as duas seguintes linhas
//contaC.listaDeCreditos()
//contaC.listaDeDebitos()