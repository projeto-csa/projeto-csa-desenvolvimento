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

Na raíz do projeto, rode

`docker-compose up`

ou 

`docker-compose up -d` para rodar no background

Note que os node_modules são instalados na máquina local, e não dentro do container.

Acesse localhost:3000 para ver o app.
