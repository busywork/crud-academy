const { Campus, Student, db } = require('./server/db/models');

// randomizers for seeding
const faker = require('faker');
const avatar = require('cartoon-avatar');
const chance = require('chance')(12345);

const numOfStudents = 12;
const numOfCampuses = 3;

const doTimes = (n, func) => {
  const result = [];
  while (n--) {
    result.push(func());
  }
  return result;
};

const randomCampus = () => {
  const address = chance.address({ short_suffix: true });
  const city = faker.address.city();
  const state = chance.state({ country: 'us' });
  const zip = chance.zip();
  return Campus.build({
    name: `${city} Campus`,
    address,
    city,
    state,
    zip,
  });
};

const randomStudent = () => {
  const gender = chance.gender();
  const firstName = chance.first({ gender });
  const lastName = chance.last();
  return Student.build({
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@crud.edu`,
    imageURL: avatar.generate_avatar({ gender }),
  });
};

const campuses = doTimes(numOfCampuses, randomCampus);
const students = doTimes(numOfStudents, randomStudent);

const seed = () =>
  Promise.all(campuses.map(campus => campus.save())).then(() =>
    Promise.all(
      students.map(student =>
        student.save().then(student => {
          const randomCampus = chance.pickone(campuses);
          return student.setCampus(randomCampus);
        })
      )
    )
  );

db.sync({ force: true })
  .then(() => {
    console.log('Seeding...');
    return seed();
  })
  .then(() => console.log('Database successfully seeded!'))
  .catch(err => console.log('Error while seeding!', err))
  .finally(() => {
    db.close();
    return null;
  });
