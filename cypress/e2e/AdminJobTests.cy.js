import AdminJobPage from "../support/pageObjects/adminJobPage";
import EntitlementPage from "../support/pageObjects/entitlementsPage";

describe('Employee management', () => {
  before(() => {

    cy.login('admin', 'admin123') // Custom command for login
      .goToAdminModule()

  });



  it('Add Job Title', () => {
   //Go to Admin section -> Jobs 
   AdminJobPage.goToJobsSection()
   cy.wait(100)
   
   //Select Job Title menu to add a new job title
   AdminJobPage.selectJobMenuItem("Job Titles")

   //Click on Add button to add a new job title
   AdminJobPage.selectJobTitleAddButton()

   //Generate a random string to add as a Job Title to avoid duplications
   cy.generateRandomString(5).then((randomString) => {
   cy.log(`Random String: ${randomString}`);
   AdminJobPage.jobTitleTextbox(randomString)
   });
   //Enter a job description
   AdminJobPage.jobDescriptionTextArea("Test Description")

   //Click on Job Title record Save button
   AdminJobPage.jobTitleSaveButton()

   //Verify the Job title record saved successfully
   AdminJobPage.jobTitleSaveSuccessMessage()


  })



})