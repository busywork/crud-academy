const { DataTypes } = require('sequelize');
const db = require('../db');

const Student = db.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageURL: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
});

module.exports = Student;
