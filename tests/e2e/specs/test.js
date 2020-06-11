// https://docs.cypress.io/api/introduction/api.html

describe('h1 header on root page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Covid19 Summary')
  })
})
