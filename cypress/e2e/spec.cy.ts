describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('[data-cy="new-todo"]').type('whatever', {force: true})
    cy.get('[data-cy="add-todo"]').click({force: true})
    cy.contains('90 / 201')
    cy.screenshot()
  })
})
