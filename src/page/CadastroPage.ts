import {CadastroElements} from "../elements/CadastroElements";

export class CadastroPage extends CadastroElements{

    constructor(readonly page){
        super();
        this.page = page;
    }
}
