# Notifications Service

> Desenvolvido durante o Ignite Lab NodeJS

## Iniciando

* `https://github.com/marcusviniciusfa/notifications-service.git` faça o download do repositório
* `cd notifications-service` entre no diretório do projeto
* `npm install` instale as depend6encias do projeto
* `echo 'DATABASE_URL="file:./dev.db"' > .env` crie o arquivo .env com a variável de ambiente do host do banco de dados

## Executando os testes

* `npm run test`

## Fazendo requisições

* `npm run start:dev` inicie a aplicação em modo de desenvolvimento
* Clique no botão abaixo para importar a collection de requests para o Insomnia, ou salve e importe o arquivo [notifications-service_requests-collection.har](https://gist.githubusercontent.com/marcusviniciusfa/759eccbb961dcef4cb23876e3368ff8e/raw/ec73a151b2b13fcdf1da68139bc823e905ac7990/notifications-service_requests-collection.har) para o seu REST Client de preferência.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=notifications-service&uri=https://gist.githubusercontent.com/marcusviniciusfa/759eccbb961dcef4cb23876e3368ff8e/raw/ec73a151b2b13fcdf1da68139bc823e905ac7990/notifications-service_requests-collection.json)

## Tecnologias utilizadas

* NestJS
* Prisma
* Jest

## Conceitos, padrões e princípios estudados

* Dependency Inversion Principle (D do SOLI**D**. Utilizado nos use cases, e nos controllers)
* Dependency Injection (Ex.: Decorator @Injectable na estrutura do NestJS)
* Single Responsibility Principle (S do **S**OLID. Utilizado principalmente nos use cases)
* Domain Driven Design (DDD)
  * Entities (Ex.: Entidade Notification)
  * Value Objects (Ex.: Entidade Content, utilizada para validação e teste unitário do conteúdo da notificação)
* Repository Pattern
* In-Memory-Database
* Mappers

## Comandos úteis

* `nest new project-name` cria a estrutura padrão de um projeto nest
* `npx prisma init --datasource-provider sqlite` inicializa o prisma apontando o provider de banco de dados sqlite
* `npx prisma migrate dev` cria migration em modo desenvolvimento
* `npx prisma studio` inicia o prisma studio para visualizar o banco de dados
