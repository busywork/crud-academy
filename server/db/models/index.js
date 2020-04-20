const db = require('../index');
const Student = require('./Student');
const Campus = require('./Campus');

Student.belongsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};
