class LoginPage {


  // Define locators or methods related to the login page



  static visitLoginPage() {
    return cy.visit('/login');
  }

  static getUsernameInput() {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');


  }

  static getPasswordInput() {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  static getLoginButton() {
    return cy.get('.oxd-button');
  }

  static getInvalidCredentialsText() {
    return cy.get('.oxd-alert-content > .oxd-text');
  }
  // Additional methods...

}

export { LoginPage };