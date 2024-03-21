import { LoginPage } from "../support/pageObjects/loginPage";
import { HomePage } from "../support/pageObjects/homePage";
import {EmployeePage} from "../support/pageObjects/employeePage";


describe('Employee management', () => {
  before(() => {
  
    cy.login('admin', 'admin123');
   
  });

  it('should add a new employee', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
    
    EmployeePage.typeFirstName('John');
    EmployeePage.typeLastName('Doe');
    EmployeePage.clickSaveButton();
    EmployeePage.assertSuccessMessageVisible();
  });

  it('should search for an employee', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
    EmployeePage.visitEmployeeList();
    EmployeePage.searchEmployee('John Doe');
    EmployeePage.assertEmployeeDisplayed('John', 'Doe');
  });
});
