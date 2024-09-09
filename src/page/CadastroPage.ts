import {CadastroElements} from "../elements/CadastroElements";

export class CadastroPage extends CadastroElements {

    constructor(readonly page) {
        super();
        this.page = page;
    }

    async clicarEmFazerInscricao() {
        await this.page.locator(CadastroElements.BTN_INSCRICAO).click();
    }

    async digitarNomeESobreNome(nome: string, sobrenome: string) {
        await this.page.locator(CadastroElements.INPUT_NOME).fill(nome);
        await this.page.locator(CadastroElements.INPUT_SOBRENOME).fill(sobrenome);
    }

    async digitarDataNascimento(dataNascimento: string) {
        await this.page.locator(CadastroElements.INPUT_DATA_NASCIMENTO).fill(dataNascimento);
    }

    async digitarCPF(cpf: string) {
        await this.page.locator(CadastroElements.INPUT_CPF).fill(cpf);
    }

    async digitarEmail(email: string) {
        await this.page.locator(CadastroElements.INPUT_EMAIL).fill(email);
    }

    async digitarConfirmeEmail(confirmeEmail: string) {
        await this.page.locator(CadastroElements.INPUT_CONFIRM_EMAIL).fill(confirmeEmail);
    }

    async digitarSenha(senha: string) {
        await this.page.locator(CadastroElements.INPUT_PASSWORD).fill(senha);
    }

    async digitaronfirmeSenha(confirmeSenha: string) {
        await this.page.locator(CadastroElements.INPUT_CONFIRM_PASSWORD).fill(confirmeSenha);
    }

    async selecionarNivelProficiencia(nivelProficiencia) {
        await this.page.locator(CadastroElements.NIVEL_PROFICIENCIA).click()
        await this.page.locator(CadastroElements.DROPDOWN_NIVEL_PROFICIENCIA(nivelProficiencia)).click()
    }

    async clicarNosTermosDeUso(){
        await this.page.locator(CadastroElements.TERMO_DE_USO).click()
    }

    async clicarNoBotaoProximo(){
        await this.page.locator(CadastroElements.BTN_PROXIMO).click()
    }

}
