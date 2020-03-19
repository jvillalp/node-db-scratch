1. create README.md
2. `git init`
3. `npm init -y`
4. `npx gitignore node`
5. after setting up completly blank repo on Github
    a. `git remote -v`
    b. `git remote add origin <URL>`
    c. `git remote -v`
    d. `knex init` #1
6. add depencencies
    a. `npm i -D nodemon`
    b. `npm i express knex sqlite3 helmet morgan cors --save`
    c. `npm i dotenv --save`
7. Scaffold Basic Structure
    a. `mkdir api auth database util`
    b. `touch index.js api/server.js auth/character-model.js auth/character-router.js`
8. build `index.js and server.js`
9. confirm morgan is working on console.log and helmet is working in http client (headers)
10. can confirm API `is working`
11. Build server and character-router
12. build `dbConfig.js`
13. `touch .env`
14. `NullAsDefault` to knexfile.js

#1
``` development: {
    client: 'sqlite3',
    connection: {
      filename: './database/charactersDb.sqlite3'
    },
    migration: {
      directory: '/database/migrations'
    },
    seeds: {
      directory: '/database/seeds'
    }
  },```
