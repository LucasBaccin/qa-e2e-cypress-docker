import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
    cy.login()
});

Given(`que eu acesse a página de administração de livros`, () => {
    cy.get('.btn-primary').click()
});

When(`eu preencher o formulário`, () => {
    cy.adicionarLivro('O Cavaleiro dos Sete Reinos', 'George R.R. Martin', '978-85-565-1154-6', 'Fantasia', '10')
});

Then(`deve aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

Given(`que exista um livro com o título {string}`, (titulo) => {
    cy.get('#search-input').type(titulo)
    cy.wait(1000)    
});

When(`eu edito os detalhes do livro`, () => {
    cy.get(':nth-child(7) > .btn-outline-primary').click()
        cy.wait(1000)
        expect(cy.get('#modal-title').should('contain.text', 'Editar Livro'))
    cy.get('#book-category').select('Aventura')
    cy.get('#save-book-btn').click()
});

Then(`o livro deve aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

When(`eu removo o livro do catálogo`, () => {
    cy.get(':nth-child(7) > .btn-outline-danger').click()
        cy.wait(1000)
    cy.get('#confirm-delete-btn').click()
})

Then(`o livro deve ser removido e aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
})

When(`eu adiciono novos livros com os seguintes dados:`, (dataTable) => {
    const books = dataTable.hashes();
    books.forEach((book) => {
        cy.adicionarLivro(book.titulo, book.autor, book.isbn, book.categoria, book.exemplares)
    })
})

When(`eu adiciono um livro com {string}, {string}, {string}, {string}, e {string}`, (titulo, autor, isbn, categoria, exemplares) => {
    cy.adicionarLivro(titulo, autor, isbn, categoria, exemplares)
});

When(`eu tento preencher o formulário sem informar o autor`, () => {
    cy.get('.btn-success').click()
    cy.get('#book-title').clear().type("Exemplo", {force: true})
        expect(cy.get('#book-title').should('have.value', "Exemplo"))
    cy.get('#save-book-btn').click()
});

Then(`o campo de autor deve estar inválido`, () => {
    cy.get('#book-author').then(($input) => {
        expect($input[0].checkValidity()).to.be.false
    })
});