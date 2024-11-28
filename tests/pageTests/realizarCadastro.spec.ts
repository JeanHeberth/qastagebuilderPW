import {expect, test} from "@playwright/test";
import {CadastroPage} from "../../src/page/CadastroPage";
import {FakerPage} from "../../src/utils/FakerPage";
import {CadastroElements} from "../../src/elements/CadastroElements";

let cadastroPage: CadastroPage;
const faker = new FakerPage();

test.beforeEach(async ({page}) => {
    cadastroPage = new CadastroPage(page);
    await page.goto("");
    await cadastroPage.clicarEmFazerInscricao();
})

test.describe('Cadastro de dados', () => {


    test('Cadastro de dados pessoais', async () => {

        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome)
        await cadastroPage.digitarDataNascimento("17/07/1988")
        await cadastroPage.digitarCPF(faker.cpfAleatorio)
        await cadastroPage.digitarEmail(faker.email)
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()

        // Inscrição de endereço
        await cadastroPage.digitarCep("40100380")
        await cadastroPage.digitarCasa("101")
        await cadastroPage.digitarComplemento("Conjunto 1")
        await cadastroPage.clicarNoBotaoProximoTelaEndereco()
        await cadastroPage.clicarBotaoAcessarPlataforma()
        await cadastroPage.validarUrl()

        // acessando a plataforma
        await cadastroPage.realizarLogin(faker.email, faker.senha)
    })

    test('Cadastro de nome vazio', async () => {
        await cadastroPage.digitarNomeESobreNome("", "Teste")
        await cadastroPage.digitarDataNascimento("17/07/1988")
        await cadastroPage.digitarCPF(faker.cpfAleatorio)
        await cadastroPage.digitarEmail(faker.email)
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()
        await cadastroPage.mensagemDeError()

    })
    test('Cadastro de sobrenome vazio', async () => {
        await cadastroPage.digitarNomeESobreNome("Teste", "")
        await cadastroPage.digitarDataNascimento("17/07/1988")
        await cadastroPage.digitarCPF(faker.cpfAleatorio)
        await cadastroPage.digitarEmail(faker.email)
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()
        await cadastroPage.mensagemDeError()

    })
    test('Cadastro de data de nascimento vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome)
        await cadastroPage.digitarDataNascimento("")
        await cadastroPage.digitarCPF(faker.cpfAleatorio)
        await cadastroPage.digitarEmail(faker.email)
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()
        await cadastroPage.mensagemDeError()
    })
    test('Cadastro de cpf vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome);
        await cadastroPage.digitarDataNascimento("17/07/1988");
        await cadastroPage.digitarCPF("");
        await cadastroPage.digitarEmail(faker.email);
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()
        await cadastroPage.mensagemDeError()
    })
    test('Cadastro de email vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome);
        await cadastroPage.digitarDataNascimento("17/07/1988");
        await cadastroPage.digitarCPF(faker.cpfAleatorio);
        await cadastroPage.digitarEmail("");
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()
        await cadastroPage.mensagemDeError()
    })
    test('Cadastro de confirmar email vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome);
        await cadastroPage.digitarDataNascimento("17/07/1988");
        await cadastroPage.digitarCPF(faker.cpfAleatorio);
        await cadastroPage.digitarEmail(faker.email);
        await cadastroPage.digitarConfirmeEmail("");
        await cadastroPage.digitarSenha(faker.senha);
        await cadastroPage.digitaronfirmeSenha(faker.senha);
        await cadastroPage.selecionarNivelProficiencia("Beginner");
        await cadastroPage.clicarNosTermosDeUso();
        await cadastroPage.clicarNoBotaoProximo();
        await cadastroPage.mensagemDeError();
    })
    test('Cadastro de senha vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome);
        await cadastroPage.digitarDataNascimento("17/07/1988");
        await cadastroPage.digitarCPF(faker.cpfAleatorio);
        await cadastroPage.digitarEmail(faker.email);
        await cadastroPage.digitarConfirmeEmail(faker.email);
        await cadastroPage.digitarSenha("");
        await cadastroPage.digitaronfirmeSenha(faker.senha);
        await cadastroPage.selecionarNivelProficiencia("Beginner");
        await cadastroPage.clicarNosTermosDeUso();
        await cadastroPage.clicarNoBotaoProximo();
        await cadastroPage.mensagemDeError();
    })
    test('Cadastro de confirmar senha vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome);
        await cadastroPage.digitarDataNascimento("17/07/1988");
        await cadastroPage.digitarCPF(faker.cpfAleatorio);
        await cadastroPage.digitarEmail(faker.email);
        await cadastroPage.digitarConfirmeEmail(faker.email);
        await cadastroPage.digitarSenha(faker.senha);
        await cadastroPage.digitaronfirmeSenha("");
        await cadastroPage.selecionarNivelProficiencia("Beginner");
        await cadastroPage.clicarNosTermosDeUso();
        await cadastroPage.clicarNoBotaoProximo();
        await cadastroPage.mensagemDeError();
    })
    test('Cadastro de nivel de proficiencia vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome);
        await cadastroPage.digitarDataNascimento("17/07/1988");
        await cadastroPage.digitarCPF(faker.cpfAleatorio);
        await cadastroPage.digitarEmail(faker.email);
        await cadastroPage.digitarConfirmeEmail("");
        await cadastroPage.digitarSenha(faker.senha);
        await cadastroPage.digitaronfirmeSenha(faker.senha);
        await cadastroPage.clicarNosTermosDeUso();
        await cadastroPage.clicarNoBotaoProximo();
        await cadastroPage.mensagemDeError();
    })
    test('Cadastro de cep incorreto', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome)
        await cadastroPage.digitarDataNascimento("17/07/1988")
        await cadastroPage.digitarCPF(faker.cpfAleatorio)
        await cadastroPage.digitarEmail(faker.email)
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()

        // Inscrição de endereço
        await cadastroPage.digitarCep("111")
        await cadastroPage.digitarCasa("101")
        await cadastroPage.digitarComplemento("Conjunto 1")
        await cadastroPage.mensagemDeError();


    })
    test('Cadastro de casa vazio', async () => {
        await cadastroPage.digitarNomeESobreNome(faker.nome, faker.sobreNome)
        await cadastroPage.digitarDataNascimento("17/07/1988")
        await cadastroPage.digitarCPF(faker.cpfAleatorio)
        await cadastroPage.digitarEmail(faker.email)
        await cadastroPage.digitarConfirmeEmail(faker.email)
        await cadastroPage.digitarSenha(faker.senha)
        await cadastroPage.digitaronfirmeSenha(faker.senha)
        await cadastroPage.selecionarNivelProficiencia("Beginner")
        await cadastroPage.clicarNosTermosDeUso()
        await cadastroPage.clicarNoBotaoProximo()

        // Inscrição de endereço
        await cadastroPage.digitarCep("40100380")
        await cadastroPage.digitarCasa("")
        await cadastroPage.digitarComplemento("Conjunto 1")
        await cadastroPage.clicarNoBotaoProximoTelaEndereco()
        await cadastroPage.mensagemDeError();

    })
})

