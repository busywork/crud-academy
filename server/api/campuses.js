const router = require('express').Router();
const { Campus } = require('../db/models');

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next);
});

module.exports = router;
