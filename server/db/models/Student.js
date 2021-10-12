const { DataTypes } = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
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
    defaultValue: '/images/default_student.png',
  },
});

module.exports = Student;
