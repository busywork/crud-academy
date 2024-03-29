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

router.put('/:id', (req, res, next) => {
  Campus.findByPk(req.params.id)
    .then(campus => campus.update(req.body))
    .then(campus => res.send(campus))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Campus.findByPk(req.params.id)
    .then(campus => campus.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
