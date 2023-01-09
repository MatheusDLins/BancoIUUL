import {Cliente} from "../models/Cliente";
import { Endereco } from "../models/Endereco";

import { Funcionario } from "../models/Funcionario";
import { Cargo } from "../models/Cargo";

const cargoGerente = new Cargo("Gerente");
const cargoAtendente = new Cargo("Atendente");

const func1 = new Funcionario(8000,"123.123.123.12", "Laura","81 91234-1234", cargoGerente);

const func2 = new Funcionario(4000,"123.123.123.12", "Luiz","81 91234-1234", cargoAtendente);

console.log(func1.apresentacaoFuncionario())
console.log(func2.apresentacaoFuncionario())