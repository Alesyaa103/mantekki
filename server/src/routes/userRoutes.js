const router = require('express').Router();
const userControl = require('../controllers/userControl');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const registrationMiddleware = require('../middlewares/registrationMiddleware');

router
  .post('/login', authenticationMiddleware, (req, res, next) => userControl.login(req.user)
    .then(data => res.send(data))
    .catch(next))
  .post('/register', registrationMiddleware ,(req, res, next) => userControl.register(req.user)
    .then(data => res.send(data))
    .catch(next));

module.exports = router;