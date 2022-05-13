/* ==== Test Created with Cypress Studio ==== */
it('automatictest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://opensource-demo.orangehrmlive.com/');
  cy.get('#divUsername > .form-hint').click();
  cy.get('#txtUsername').clear();
  cy.get('#txtUsername').type('Admin');
  cy.get('#txtPassword').clear();
  cy.get('#txtPassword').type('admin123');
  cy.get('#btnLogin').click();
  /* ==== End Cypress Studio ==== */
});