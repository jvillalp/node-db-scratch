1. create README.md
2. `git init`
3. `npm init -y`
4. `npx gitignore node`
5. after setting up completly blank repo on Github
    a. `git remote -v`
    b. `git remote add origin <URL>`
    c. `git remote -v`
6. add depencencies
    a. `npm i -D nodemon`
    b. `npm i express knex sqlite3 helmet morgan cors --save`
    c. `npm i dotenv --save`
    d. `knex init` #1
7. Scaffold Basic Structure
    a. `mkdir api auth database util`
    b. `touch index.js api/server.js auth/character-model.js auth/character-router.js`
8. build `index.js and server.js`
9. confirm morgan is working on console.log and helmet is working      in http client (headers)
10. can confirm API `is working`
11. Build server and character-router
12. build `dbConfig.js`
13. `touch .env`
14. `NullAsDefault` to knexfile.js
15. create character-model
16. create database
17. `knex migrate:make characters`
18. `knex migrate:latest`
19. `knex seed:make 00_characters`
20. `knex seed:run`

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


Explain the difference between Relational Databases and SQL.

Relational database is the database software which manages storage, querying, updating, etc. (it is the system)

SQL (structured query language) is a language which is typically used to query the RDB. (this is the language used to interact with the system)

 Why do tables need a primary key?

 Tables need a primary key to ensure these values are unique. Each table should have a column that uniquely identifies one and only one row. Without the primary key it would be difficult to insert the same data various times. They are NOT NULL and unique.

 What is the name given to a table column that references the primary key on another table.

Foreign key
The table with the foreign key is called the child table and the table containing the candidate key is called the referenced (parent table)

 What do we need in order to have a many to many relationship between two tables.

A many-to-many relationship occurs when multiple records in a tbale are associated with multiple records in another table. 

customers can purchase many products,
products can be purchased by many customers.
