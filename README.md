# 🧪 QA E2E Cypress + Docker

Projeto de Quality Assurance desenvolvido para aplicar e integrar diferentes etapas de uma estratégia de automação de testes E2E, utilizando **Cypress, Cucumber, Docker, GitHub Actions e Allure Reports**.

O projeto teve como base uma aplicação utilizada durante a formação em Quality Assurance da EBAC e foi expandido com novas configurações de automação, containerização, integração contínua e geração de relatórios.

## 🎯 Objetivo

Construir um ambiente de testes automatizados capaz de executar cenários E2E de forma reproduzível tanto localmente quanto através de containers e pipelines de CI/CD.

Além da execução dos testes, o projeto busca demonstrar práticas relacionadas a:

* Automação de testes E2E;
* BDD com Cucumber/Gherkin;
* Organização e manutenção de cenários automatizados;
* Execução dos testes em ambiente Docker;
* Orquestração de serviços com Docker Compose;
* Integração contínua com GitHub Actions;
* Geração e publicação de relatórios com Allure Reports.

## 🛠️ Tech Stack

| Categoria       | Tecnologia         |
| --------------- | ------------------ |
| Linguagem       | JavaScript         |
| Automação E2E   | Cypress            |
| BDD             | Cucumber / Gherkin |
| Containerização | Docker             |
| Orquestração    | Docker Compose     |
| CI/CD           | GitHub Actions     |
| Relatórios      | Allure Reports     |
| Versionamento   | Git / GitHub       |

## 🧪 Estratégia de Testes

Os cenários automatizados foram estruturados utilizando Cypress em conjunto com Cucumber, permitindo a descrição dos comportamentos esperados através de arquivos `.feature`.

A automação busca validar os principais fluxos da aplicação através de testes E2E, mantendo os cenários organizados e reproduzíveis em diferentes ambientes.

## 🐳 Docker

O projeto possui configuração Docker própria para permitir que os testes sejam executados em um ambiente isolado e reproduzível.

Também foi utilizado Docker Compose para orquestrar os componentes necessários para execução da aplicação e dos testes automatizados.

Dessa forma, o ambiente pode ser preparado e executado sem depender exclusivamente das configurações locais da máquina.

## 🔄 CI/CD

O projeto utiliza **GitHub Actions** para automatizar a execução dos testes.

O pipeline permite validar a aplicação automaticamente através do ambiente configurado no projeto, integrando a execução dos testes ao fluxo de desenvolvimento.

## 📊 Allure Reports

Os resultados dos testes são integrados ao **Allure Reports**, permitindo uma visualização mais detalhada das execuções e facilitando a análise dos cenários automatizados.

Os relatórios gerados complementam os logs da execução e fornecem evidências dos resultados dos testes.

## 🚀 Executando o projeto

### Pré-requisitos

* Node.js
* npm
* Git
* Docker / Docker Compose

### Clone o repositório

```bash
git clone https://github.com/LucasBaccin/qa-e2e-cypress-docker.git
cd qa-e2e-cypress-docker
```

### Instale as dependências

```bash
npm install
```

### Execute os testes em modo headless

```bash
npx cypress run
```

### Abra o Cypress

```bash
npx cypress open
```

### Execução com Docker

```bash
docker compose build
docker compose up
```

## 📁 Estrutura do Projeto

```text
.
├── .github/
│   └── workflows/
├── allure-results/
├── cypress/
├── docker/
├── Dockerfile
├── docker-compose.yml
├── cypress.config.js
├── package.json
└── README.md
```

## 📚 Principais aprendizados

Durante a evolução deste projeto foram trabalhados conceitos importantes para uma rotina de Quality Assurance, como:

* Criação e manutenção de testes automatizados E2E;
* Utilização de BDD para definição dos cenários;
* Configuração de ambientes de teste com Docker;
* Integração da automação com pipelines CI/CD;
* Geração de evidências e relatórios de execução;
* Investigação e resolução de problemas relacionados ao ambiente de testes;
* Organização do projeto visando manutenção e evolução da suíte automatizada.

## 🔮 Próximas evoluções

* Ampliar a cobertura dos cenários automatizados;
* Melhorar a organização e reutilização dos testes;
* Explorar execução paralela;
* Expandir cenários utilizando `cy.intercept`;
* Integrar novos tipos de validação ao pipeline.

---

### 👨‍💻 Autor

**Lucas Baccin**

Quality Assurance | Test Automation | API Testing | CI/CD
