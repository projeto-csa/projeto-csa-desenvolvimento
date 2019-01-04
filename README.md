# Projeto CSA wiki

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Setup do projeto

Para configurar o projeto siga os seguintes passos:
* instalar dependências (node_modules)
* configurar variáveis de ambiente
* configurar maquinas docker

## Instalar dependências

Na raíz do projeto, rode: 

`cd server && npm i`

`cd ..`

`cd client $$ npm i`

## Configurar variáveis de ambiente

no diretório '/server', crie um arquivo '.env'

`cd server && touch .env`

Copie o conteúdo de '.env.default' para '.env', e faça quaisquer ajustes necessários para seu ambiente local.

Repita esse procedimento no diretório '/client'.

## Rodar máquina docker

O app tem três máquinas docker: Uma para o servidor, uma para o cliente, e uma para o banco de dados (mongodb). Para rodar as máquinas siga os comandos abaixo.

Na raíz do projeto, rode

`docker-compose up`

ou 

`docker-compose up -d` para rodar no background

Note que os node_modules são instalados na máquina local, e não dentro do container.

Para abrir um terminal em um dos containers, rode

`docker-compose exec server bash` ou `docker-compose exec client bash`

Acesse localhost:3000 para ver o app.
