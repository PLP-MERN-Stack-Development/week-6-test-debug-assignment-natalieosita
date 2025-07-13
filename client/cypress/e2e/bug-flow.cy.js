describe('Bug Tracker Flow', () => {
  it('creates, updates, and deletes a bug', () => {
    cy.visit('http://localhost:3000');

    // Create a bug
    cy.get('input[name="title"]').type('Cypress Test Bug');
    cy.get('textarea[name="description"]').type('Bug description from Cypress');
    cy.contains('Report Bug').click();

    cy.contains('Cypress Test Bug').should('exist');

    // Update status
    cy.get('select').first().select('resolved');
    cy.get('select').first().should('have.value', 'resolved');

    // Delete the bug
    cy.contains('Delete').click();
    cy.contains('Cypress Test Bug').should('not.exist');
  });
});