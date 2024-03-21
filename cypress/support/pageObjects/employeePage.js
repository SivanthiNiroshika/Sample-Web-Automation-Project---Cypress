// cypress/support/pageObjects/employeePage.js
class EmployeePage {


  static visitAddEmployeePage() {
    cy.visit('/pim/addEmployee');
  }

  static typeFirstName(firstName) {
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstName);
  }

  static typeLastName(lastName) {
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lastName);
  }

  static clickSaveButton() {
    cy.get('.oxd-button--secondary').click();
  }

  static assertSuccessMessageVisible() {
    cy.get('.oxd-toast').should('be.visible');
  }

  static visitEmployeeList() {
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();
  }

  static searchEmployee(employeeName) {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type(employeeName);
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
  }

  static assertEmployeeDisplayed(firstName, lastName) {
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('contain', firstName);
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').should('contain', lastName);
  }
}

export { EmployeePage };  