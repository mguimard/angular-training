describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[data-testid=add-user').click();
    cy.get('[data-testid=add-user').click();
    cy.get('[data-testid=add-user').click();
    cy.get('[data-testid=add-user').click();
    cy.get('[data-testid=add-user').click();
    cy.get('[data-testid=add-user').click();
    cy.get('[data-testid=add-user').click();

    cy.get('app-user').should('have.length', 9)
    cy.screenshot()
  })
})