#language: pt
Funcionalidade: Administração de livros Hub de Leitura
Como administrador do sistema
Quero adicionar, editar e remover múltiplos livros de uma só vez
Para que eu possa gerenciar o catálogo de forma rápida e eficiente

    Cenário: Adicionar novos livros com tabela de exemplos
        Dado que eu acesse a página de administração de livros
        Quando eu adiciono novos livros com os seguintes dados:
        | titulo            | autor             | categoria | isbn              | exemplares |
        | Cujo              | Stephen King      | Terror    | 978-85-333-0386-6 | 3          |
        | O Portador da Luz | Jean Pierre Sarda | Fantasia  | 978-85-333-0387-3 | 10         |
        | O Homem de Giz    | C.J. Tudor        | Suspense  | 978-85-333-0388-0 | 100        |
        Então deve aparecer uma mensagem de atualização: "Livro adicionado com sucesso!"
    @only
    Esquema do Cenário: Adicionar livros usando exquema do cenário - Livro: "<titulo>"
        Dado que eu acesse a página de administração de livros
        Quando eu adiciono um livro com "<titulo>", "<autor>", "<isbn>", "<categoria>", e "<exemplares>"
        Então deve aparecer uma mensagem de atualização: "Livro adicionado com sucesso!"
        Exemplos:
        | titulo                    | autor                |isbn              | categoria | exemplares |
        | D&D 5e Livro do Mestre    | Wizards of the Coast | 978-85-333-0389-7 | Fantasia  | 58         |
        | D&D 5e Livro do Jogador   | Wizards of the Coast | 978-85-333-0390-3 | Fantasia  | 51         |
        | D&D 5e Livro dos Monstros | Wizards of the Coast | 978-85-333-0391-0 | Fantasia  | 38         |
        | O Iuminado                | Stephen King         | 978-85-333-0392-7 | Terror    | 7          |
        | Era uma vez em Hollywood  | Quentin Tarantino    | 978-85-333-0393-4 | Suspense  | 29         |
