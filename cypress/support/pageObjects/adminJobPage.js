

// cypress/support/pageObjects/adminJobPage.js
class AdminJobPage {


    
  
    static goToJobsSection() {

        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
  
    }

    static selectJobMenuItem(menu) {

        cy.contains(menu).click()
  
    }

    static selectJobTitleAddButton() {

        cy.get('.oxd-button').click()
  
    }
   
    

    static jobTitleTextbox(jobTitle) {

        cy.get(':nth-child(2) > .oxd-input').type(jobTitle)
  
    }


   
    static jobDescriptionTextArea(jobDesc) {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type(jobDesc)
  
    }

    

    static jobTitleSaveButton() {
        cy.get('.oxd-button--secondary').click()
        
  
    }

    

    static jobTitleSaveSuccessMessage() {
        cy.get('.oxd-toast-content').should('be.visible')
        
  
    }
  }
  
  export default AdminJobPage;
  