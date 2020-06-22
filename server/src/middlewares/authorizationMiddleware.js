const jwtMiddleware = require('./jwtMiddleware');

module.exports = (routesWhiteList = []) => (req, res, next) => (
  routesWhiteList.some(route => req.path.includes(route))
    ? next()
    : jwtMiddleware(req, res, next) // auth the user if requested path isn't from the white list
)
