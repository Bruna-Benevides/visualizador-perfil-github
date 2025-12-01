# Visualizador de Perfil do GitHub

Este é um projeto de um visualizador de perfil do GitHub, que permite aos usuários pesquisar por um nome de usuário e visualizar informações detalhadas do perfil, incluindo seus repositórios mais recentes.

## Funcionalidades

- **Pesquisa de Usuário:** Permite pesquisar por qualquer usuário do GitHub.
- **Visualização de Perfil:** Exibe informações do perfil do usuário, como avatar, nome, bio, número de seguidores e de usuários que está seguindo.
- **Lista de Repositórios:** Mostra os 10 repositórios do usuário com mais interações recentes, com detalhes como estrelas, forks e linguagem de programação.

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização, incluindo um design responsivo.
- **JavaScript (ES6+):** Para a lógica da aplicação, incluindo a comunicação com a API do GitHub e a renderização dinâmica do conteúdo.

## Como Rodar o Projeto

1. Abra o arquivo `index.html` em seu navegador de preferência.
2. Digite um nome de usuário do GitHub no campo de pesquisa e clique em "Buscar" ou pressione Enter.

## Deploy

O projeto está disponível para visualização no seguinte link:

[Visualizador de Perfil do GitHub](https://elidianaandrade.github.io/visualizador-perfil-github/)

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `index.html`: O arquivo principal da aplicação.
- `src/`: A pasta contendo os arquivos de código-fonte.
  - `css/`: Contém os arquivos de estilo.
    - `reset.css`: Para resetar os estilos padrão do navegador.
    - `styles.css`: Os estilos principais da aplicação.
    - `animations.css`: Estilos para animações.
    - `responsive.css`: Estilos para tornar a aplicação responsiva a diferentes tamanhos de tela.
  - `js/`: Contém os arquivos de script.
    - `index.js`: O arquivo principal que lida com a interação do usuário e orquestra a aplicação.
    - `githubApi.js`: Um módulo para interagir com a API do GitHub.
    - `profileView.js`: Um módulo responsável por renderizar o perfil do usuário e seus repositórios na tela.
- `README.md`: Este arquivo, com informações sobre o projeto.
