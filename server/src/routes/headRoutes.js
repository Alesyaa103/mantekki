const router = require('express').Router();
const headControl = require('../controllers/headControl.js');
const imageMiddleware = require('../middlewares/imageMiddleware.js');

router
  .post('/', imageMiddleware, (req, res, next) => headControl.create(req.body, req.user, req.file)
    .then(data => res.send(data))
    .catch(next))
  .get('/getAll', (req, res, next) => headControl.getAll()
    .then(data => res.send(data))
    .catch(next))
  .put('/:id', imageMiddleware, (req, res, next) => headControl.update(req.params, req.body, req.user, req.file)
    .then(data => res.send(data))
    .catch(next))  

module.exports = router;