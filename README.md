**Overview**
This repository contains a web automation framework built using Cypress for end-to-end testing of web applications. 
The framework is designed to provide a structured approach to writing and organizing automated tests for web UI components.

**Features**
Utilizes Cypress for fast and reliable test execution.
Follows the Page Object Model (POM) design pattern for better test maintenance and readability.
Includes sample test cases demonstrating various functionalities.
Pre-configured plugins for generating test reports and screenshots.

**Prerequisites**
Node.js and npm installed on your machine.

**Installation**
Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install the necessary dependencies.

**Running Tests**
Use npm test to run all test suites.
Use npm run test:headless to run tests in headless mode.
Use npm run test:report to generate a test report after running tests.

**Project Structure**
cypress/

fixtures/: Contains sample data fixtures for test data.

e2e/: Contains test files organized by feature or module.

plugins/: Cypress plugins configuration.

support/: Page Objects and Custom commands 

cypress.config.js/: Base URL is given in this file
