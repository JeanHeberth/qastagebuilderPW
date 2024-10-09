import {test} from "@playwright/test";
import {CadastroPage} from "../../src/page/CadastroPage";
import {FakerPage} from "../../src/utils/FakerPage";

let cadastroPage: CadastroPage;
const faker = new FakerPage();

test.beforeEach(async ({page}) => {
    cadastroPage = new CadastroPage(page);
    await page.goto("");
    await cadastroPage.clicarEmFazerInscricao();
})

test('Realizar Cadastro', async () => {


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
