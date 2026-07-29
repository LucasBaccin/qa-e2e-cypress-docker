// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
    cy.visit('login.html')
    cy.get('.mt-3 > .btn').click()
        expect(cy.get('#email').should('have.value', 'admin@biblioteca.com'))
    cy.get('#login-btn').click()
        cy.get('h1').should('contain', 'Painel Administrativo')
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('adicionarLivro', (titulo, autor, isbn, categoria, copias) => {
    cy.get('.btn-success').click()
    cy.get('#book-title').clear().type(titulo, {force: true})
        expect(cy.get('#book-title').should('have.value', titulo))
    cy.get('#book-author').clear().type(autor)
    cy.get('#book-isbn').clear().type(isbn)
    cy.get('#book-category').select(categoria)
    cy.get('#book-copies').clear().type(copias)
    cy.get('#save-book-btn').click()
})