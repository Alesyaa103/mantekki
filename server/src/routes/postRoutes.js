const router = require('express').Router();
const postControl = require('../controllers/postControl');
const imageMiddleware = require('../middlewares/imageMiddleware');

router
  .post('/', imageMiddleware, (req, res, next) => postControl.create(req.body, req.user, req.file)
    .then(data => res.send(data))
    .catch(next))
  .get('/all', (req, res, next) => postControl.getAll()
    .then(data => res.send(data))
    .catch(next))
  .get('/collection/:collection', (req, res, next) => postControl.getCollection(req.params)
    .then(data => res.send(data))
    .catch(next))
  .put('/:id', imageMiddleware, (req, res, next) => postControl.update(req.params, req.body, req.user, req.file)
    .then(data => res.send(data))
    .catch(next))
  .delete('/:id', (req, res, next) => postControl.remove(req.params, req.user)
    .then(data => res.send(data))
    .catch(next));
  

module.exports = router;