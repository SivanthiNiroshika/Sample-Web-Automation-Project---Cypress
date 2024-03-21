// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


import { LoginPage } from "../support/pageObjects/loginPage";
import { HomePage } from "../support/pageObjects/homePage";

Cypress.Commands.add('login', (username, password) => {
  LoginPage.visitLoginPage();
  LoginPage.getUsernameInput().type('Admin');
  LoginPage.getPasswordInput().type('admin123');
  LoginPage.getLoginButton().click();

});

//Add a custom command to navigate to Leave Section
Cypress.Commands.add('goToLeaveModule', () => {
  cy.contains('Leave').click()
});

//Add a custom command to navigate to Admin Section
Cypress.Commands.add('goToAdminModule', () => {
  cy.contains('Admin').click()
});

//Add a custom command to navigate to Entitlement section
Cypress.Commands.add('goToEntitlement', () => {
  cy.contains('Leave').click()
  cy.contains('Entitlements').click()
  cy.contains('Add Entitlements').click()
});

//Generate Random Strings
Cypress.Commands.add('generateRandomString', (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText= '';
  for (let i = 0; i < length; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomText;
});


