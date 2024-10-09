import {faker} from "@faker-js/faker";

const cpf = require('gerador-validador-cpf');

export class FakerPage {
    constructor() {
    }


    nome = faker.person.firstName();
    sobreNome = faker.person.lastName();
    email = faker.internet.email();
    senha = faker.internet.password();
    cpfAleatorio = cpf.generate();
    cep = faker.location.zipCode('#####-###');


    getFakerData() {
        return {
            nome: this.nome,
            sobreNome: this.sobreNome,
            cpf: this.cpfAleatorio,
            email: this.email,
            senha: this.senha,
            cep: this.cep
        };
    }
}
