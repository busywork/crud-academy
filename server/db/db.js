const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`, {
  // Postgres SSL config
  // https://devcenter.heroku.com/articles/heroku-postgresql#heroku-postgres-ssl
  // dialect: 'postgres',
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
  logging: false,
});

module.exports = db;
