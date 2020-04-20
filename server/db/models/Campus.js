const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: './public/images/default_campus.png',
  },
});

module.exports = Campus;
