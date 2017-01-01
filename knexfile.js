'use strict';


module.exports = {

  development:  {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/express-ejs-practice'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/express-ejs-practice',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


//
