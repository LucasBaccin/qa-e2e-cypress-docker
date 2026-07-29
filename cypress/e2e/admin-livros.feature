# language: pt
Funcionalidade: Administraçao de livros
    
    Cenário: Adicionar um novo livro
        Dado que eu acesse a página de administração de livros
        Quando eu preencher o formulário
        Então deve aparecer uma mensagem de atualização: "Livro adicionado com sucesso!"
    
    Cenário: Editar um livro existente
        Dado que eu acesse a página de administração de livros
        E que exista um livro com o título "O Cavaleiro dos Sete Reinos"
        Quando eu edito os detalhes do livro
        Então o livro deve aparecer uma mensagem de atualização: "Livro atualizado com sucesso!"
    
    Cenário: Excluir um livro existente
        Dado que eu acesse a página de administração de livros
        E que exista um livro com o título "O Cavaleiro dos Sete Reinos"
        Quando eu removo o livro do catálogo
        Então deve aparecer uma mensagem de atualização: "Livro excluído com sucesso!"
        
    Cenário: Adicionar um livro sem autor
        Dado que eu acesse a página de administração de livros
        Quando eu tento preencher o formulário sem informar o autor
        Então o campo de autor deve estar inválido