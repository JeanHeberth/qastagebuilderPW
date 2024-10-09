export class CadastroElements {

  static  BTN_INSCRICAO = "#btn-enroll"
  static INPUT_NOME = "#signup-personal-data-firstName"
  static INPUT_SOBRENOME = "#signup-personal-data-lastName"
  static  INPUT_DATA_NASCIMENTO = "#signup-personal-data-birthDate"
  static  INPUT_CPF = "#signup-personal-data-cpf"
  static  INPUT_EMAIL = "#signup-personal-data-email"
  static  INPUT_CONFIRM_EMAIL = "#signup-personal-data-email-confirm"
  static  INPUT_PASSWORD = "#signup-personal-data-password"
  static  INPUT_CONFIRM_PASSWORD = "#signup-personal-data-password-confirm"
  static NIVEL_PROFICIENCIA = '//button[@aria-controls="dropdown-button-1"]'
  static TERMO_DE_USO = "#signup-personal-data-lgpd"
  static BTN_PROXIMO = "#signup_submit_button_1"
  static INPUT_CEP = "#signup-address-cep"
  static INPUT_CASA = "#signup-address-number"
  static INPUT_COMPLEMENTO = "#signup-address-complement"
  static BOTAO_PROXIMO_TELA_ENDERECO = "#signup_submit_button_3"
  static URL = "https://qastage.buildbox.one/18/sign-in";
  static BTN_ACESSAR_PLATAFORMA = "#wide_window_button"
  static LOGIN = "#user_login"
  static LOGIN_PASSWORD = "#user_pass"
  static BTN_ENTRAR = "#wp-submit"

  static DROPDOWN_NIVEL_PROFICIENCIA(proficiencia: string) {
    return `//span[text()="${proficiencia}"]`
  }

}

