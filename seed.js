const { Campus, Student, db } = require('./server/db/models');

// randomizers for seeding
const faker = require('faker');
const avatar = require('cartoon-avatar');
const chance = require('chance')(12345);

const numOfStudents = 100;
const numOfCampuses = 10;

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
    description: faker.lorem.paragraphs(3),
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

const seed = () => {
  return Promise.all(campuses.map(campus => campus.save())).then(() =>
    Promise.all(
      students.map(student =>
        student.save().then(student => {
          const randomCampus = chance.pickone(campuses);
          student.setCampus(randomCampus);
        })
      )
    )
  );
};

console.log('Syncing...');

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
