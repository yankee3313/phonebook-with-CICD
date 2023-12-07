describe('Note app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
    cy.contains('Add New Contact')
    cy.contains('Phonebook app, Ross Comer 2023')
  })
})