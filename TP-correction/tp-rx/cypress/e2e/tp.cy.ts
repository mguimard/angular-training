describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should pass test 1', () => {
    cy.get('[data-testid=user-list] > *').should('have.length', 2);
    cy.get('[data-testid="add-user"]').click();
    cy.get('[data-testid=user-list] > *').should('have.length', 3);
  })


  it('should pass test 2', () => {
    cy.get('[data-testid=message-list] > *').should('have.length', 2);
    cy.get('[data-testid=message-input]').clear();
    cy.get('[data-testid=message-input]').type('Bonjour');
    cy.get('[data-testid=send-message]').click();
    cy.get('[data-testid=message-list] > *').should('have.length', 3);
  })
})