





// cypress/support/pageObjects/leavePage.js
class EntitlementPage {



    static selectEmployeeName(empName) {
        cy.get('.oxd-autocomplete-text-input > input').type(empName);
        cy.wait(400)

        //cy.get('.oxd-input-group > div > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input.first-item').click()
    }



    static selectLeaveType(leaveType) {
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select(leaveType);
    }

}

export default EntitlementPage;
