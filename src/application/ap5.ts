import {Cliente} from "../models/Cliente";
import { Endereco } from "../models/Endereco";
import {Credito} from "../models/Credito";
import { ContaPoupanca } from "../models/ContaPoupanca";
import { Debito } from "../models/Debito";


const endereco2 = new Endereco("23999211","Rua joao2", 222, "Casa", "Paulista2", "PE");


const cliente2 = new Cliente("123.123.123-51", "luiza", "91525354", true, [endereco2]);


const conta2 = new ContaPoupanca('02',cliente2,1)

const credito1 = new Credito(200,new Date(2022,0,1))
const credito2 = new Credito(200,new Date(2022,1,1))
const credito3 = new Credito(200,new Date(2022,2,1))
const saque1 = new Debito(100,new Date(2022,2,5))
const credito4 = new Credito(200,new Date(2022,3,1))
const credito5 = new Credito(200,new Date(2022,4,1))
const credito6 = new Credito(200,new Date(2022,5,1))
const credito7 = new Credito(200,new Date(2022,6,1))
const saque2 = new Debito(200,new Date(2022,7,3))
const credito8 = new Credito(200,new Date(2022,7,1))
const credito9 = new Credito(200,new Date(2022,8,1))
const credito10 = new Credito(200,new Date(2022,9,1))
const credito11 = new Credito(200,new Date(2022,10,1))
const credito12 = new Credito(200,new Date(2022,11,1))

conta2.depositar(credito1)
conta2.depositar(credito2)
conta2.depositar(credito3)
conta2.sacar(saque1)
conta2.depositar(credito4)
conta2.depositar(credito5)
conta2.depositar(credito6)
conta2.depositar(credito7)
conta2.sacar(saque2)
conta2.depositar(credito8)
conta2.depositar(credito9)
conta2.depositar(credito10)
conta2.depositar(credito11)
conta2.depositar(credito12)


conta2.calcularRendimento()