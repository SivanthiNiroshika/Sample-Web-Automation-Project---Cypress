
import { LoginPage } from "../support/pageObjects/loginPage";
import { HomePage } from "../support/pageObjects/homePage";




describe('Login Test', () => {


    it('Verify user is able to login successfully with valid credentials', () => {
      // Visit the OrangeHRM login page
      cy.visit('/login');
  
      //Enter username and password
      //Use the page object methods for interaction
      LoginPage.getUsernameInput().type('Admin');
      LoginPage.getPasswordInput().type('admin123');
  
      // Click the login button
      LoginPage.getLoginButton().click();
  
      // Verify that the login is successful by checking the presence of a dashboard element
      HomePage.getDashboardText().should('contain', 'Dashboard');
    });




    it('Verify user is unable to Login with valid username and invalid passowrd', () => {
        // Visit the OrangeHRM login page
        cy.visit('/login');
    
        // Enter username and password
        // Use the page object methods for interaction
        LoginPage.getUsernameInput().type('Admin');
        LoginPage.getPasswordInput().type('invalidPassword');
    
        // Click the login button
        LoginPage.getLoginButton().click();
    
        // Verify that the login is unsuccessful by checking the validation error message
        LoginPage.getInvalidCredentialsText().should('be.visible');
      });


      it('Verify user is unable to Login with invalid username and valid passowrd', () => {
        // Visit the OrangeHRM login page
        cy.visit('/login');
    
        // Enter username and password
        // Use the page object methods for interaction
        LoginPage.getUsernameInput().type('InvalidUserName');
        LoginPage.getPasswordInput().type('admin123');
    
        // Click the login button
        LoginPage.getLoginButton().click();
    
        // Verify that the login is unsuccessful by checking the validation error message
        LoginPage.getInvalidCredentialsText().should('be.visible');
      });


  });
  