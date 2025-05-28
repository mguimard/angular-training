describe('template spec', () => {



  beforeEach(() => {
    cy.visit('/')
    cy.get('input').type('BEFORE');

    // login
  })


  for (let i = 0; i < 10; i++) {



    it('passes ' + i, () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('input').clear();
      cy.get('input').type('robert-' + i);
      cy.get('app-chat > button').click();
      cy.get('[ng-reflect-message="robert-' + i + '"] > p').click();
      /* ==== End Cypress Studio ==== */
    })
  }




  /* ==== Test Created with Cypress Studio ==== */
  it('should add users', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid="add-user"]').click();
    cy.get('[data-testid="add-user"]').click();
    cy.get('[data-testid="add-user"]').click();
    cy.get('[data-testid="add-user"]').click();
    cy.get('[data-testid="add-user"]').click();
    cy.get('app-users > div').click();
    /* ==== End Cypress Studio ==== */
  });
})