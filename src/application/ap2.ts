import {Cliente} from "../models/Cliente";
import { Endereco } from "../models/Endereco";

const endereco1 = new Endereco("13411211","Rua joao", 111, "Casa", "Paulista", "PE");
const endereco2 = new Endereco("23999211","Rua joao2", 222, "Casa", "Paulista2", "PE");
const endereco3 = new Endereco("33444411","Rua joao3", 333, "Ap", "Paulista3", "PE");

const cliente1 = new Cliente("123.123.123-51", "luiz", "91525354", true, [endereco1, endereco2, endereco3]);

cliente1.listarEnderecos();

