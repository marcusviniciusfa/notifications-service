# Notifications Service

> Desenvolvido durante o Ignite Lab NodeJS

## Iniciando

* `git clone https://github.com/marcusviniciusfa/notifications-service.git` faça o download do repositório notifications-service
* `cd notifications-service` entre no diretório do projeto
* `npm install` instale as dependências do projeto
* `mv sample.env .env` renomeie o arquivo .env de amostra e popule as variáveis com os dados do Kafka

## Executando os testes

* `npm run test`

## Fazendo requisições

* `npm run start:dev` inicie a aplicação em modo de desenvolvimento
* Clique no botão abaixo para importar a collection de requests para o Insomnia, ou salve e importe o arquivo [notifications-service_requests-collection.har](https://gist.githubusercontent.com/marcusviniciusfa/609c76f9421e71d9bc280c0303cf83dd/raw/fe86e5a676bf0fe93d5040f430e3ddeb7fb9f0dd/notifications-service_request-collection.har) para o seu REST Client de preferência.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=notifications-service&uri=https://gist.githubusercontent.com/marcusviniciusfa/609c76f9421e71d9bc280c0303cf83dd/raw/fe86e5a676bf0fe93d5040f430e3ddeb7fb9f0dd/notifications-service_request-collection.json)

## Consumindo notificações do Kafka

* `git clone https://github.com/marcusviniciusfa/kafka-producer-to-notifications-service.git` faça o download do repositório [kafka-producer-to-notifications-service](https://github.com/marcusviniciusfa/kafka-producer-to-notifications-service) e siga o passo a passo no README para produzir mensagens com notificações que serão consumidas pelo serviço de notificações
* `npx prisma studio` utilize o prisma studio para conseguir visualizar as notificações inseridas na tabela Notifications

## Tecnologias utilizadas

* NestJS
* Prisma
* Jest
* Kafka

## Conceitos, padrões e princípios estudados

* [x] Dependency Inversion Principle (D do SOLI**D**. Utilizado nos use cases, e nos controllers)
* [x] Dependency Injection (Ex.: Decorator @Injectable na estrutura do NestJS)
* [x] Single Responsibility Principle (S do **S**OLID. Utilizado principalmente nos use cases)
* [x] Domain Driven Design (DDD)
  * [x] Entities (Ex.: Entidade Notification)
  * [x] Value Objects (Ex.: Entidade Content, utilizada para validação e teste unitário do conteúdo da notificação)
* [x] Repository Pattern
* [x] In-Memory-Database
* [x] Mappers

## Comandos úteis

* `nest new project-name` cria a estrutura padrão de um projeto nest
* `npx prisma init --datasource-provider sqlite` inicializa o prisma apontando o provider de banco de dados sqlite
* `npx prisma migrate dev` cria migration em modo desenvolvimento
* `npx prisma studio` inicia o prisma studio para visualizar o banco de dados
