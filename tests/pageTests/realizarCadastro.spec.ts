import {test} from "@playwright/test";
import {CadastroPage} from "../../src/page/CadastroPage";

let cadastroPage: CadastroPage;
test.beforeEach(async ({page}) => {
    cadastroPage = new CadastroPage(page);
    await page.goto("/");
})

test('Realizar Cadastro', async () => {


})
