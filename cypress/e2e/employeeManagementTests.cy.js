import { LoginPage } from "../support/pageObjects/loginPage";
import { HomePage } from "../support/pageObjects/homePage";
import {EmployeePage} from "../support/pageObjects/employeePage";


describe('Employee management', () => {
  before(() => {
  
    cy.login('admin', 'admin123');

    cy.fixture('testData.json').then((data) => {
   
    cy.visit(data.urlAddEmplyeePage);

    })
   
  });

  it('should add a new employee', () => {
    
    EmployeePage.typeFirstName('John');
    EmployeePage.typeLastName('Doe');
    EmployeePage.clickSaveButton();
    EmployeePage.assertSuccessMessageVisible();
  });

  it('should search for an employee', () => {

  
    EmployeePage.visitEmployeeList();
    EmployeePage.searchEmployee('John Doe');
    EmployeePage.assertEmployeeDisplayed('John', 'Doe');
  });
});
