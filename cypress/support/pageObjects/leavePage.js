// cypress/support/pageObjects/leavePage.js
class LeavePage {
  static visitApplyLeave() {
    cy.visit('/leave/applyLeave');
  }

  static selectLeaveType(leaveType) {
    cy.get('#applyleave_txtLeaveType').select(leaveType);
  }

  static typeFromDate(date) {
    cy.get('#applyleave_txtFromDate').type(date);
  }

  static typeToDate(date) {
    cy.get('#applyleave_txtToDate').type(date);
  }

  static clickApplyButton() {
    cy.get('#applyBtn').click();
  }

  static assertLeaveSuccessMessageVisible() {
    cy.get('.message.success').should('be.visible');
  }

  static visitViewLeaveBalance() {
    cy.visit('/leave/viewLeaveBalance');
  }

  static assertLeaveBalanceVisible() {
    cy.get('.legendLabel').should('be.visible');
    cy.get('.legendTxt').should('be.visible');
  }
}

export default LeavePage;
