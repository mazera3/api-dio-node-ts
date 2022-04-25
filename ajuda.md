/* Criando uma API REST */

// Criar um usuário - C
// Selecionar o usuario - R
// Editar o usuário - U
// deletar o usuário - D

/* endpoints */
// dominio: /usuario

/* Verbos http */
// GET - ler
// PUT, PATCH - criar
// UPDATE - atualizar
// DELETE - apagar

# Iniciar e Instalar dependências
- yarn init -y
- Express: yarn add express
- yarn add @types/express -D
- yarn add typescript -D
- npx tsc --init
- yarn add ts-node-dev -D
- TypeORM: yarn add typeorm@v0.2.38 reflect-metadata
- SQLite: yarn add sqlite3

# Migrations
- Criar: npx typeorm migration:create -n CreateUser
- Rodar: yarn typeorm migration:run
- Para reverter: yarn typeorm migration:revert

# Entities
- yarn add uuid && yarn add @types/uuid -D

# Testes
- yarn add jest @types/jest ts-jest -D
- npx jest --init
- yarn test