const env = require('../env.js');

const { secret } = env.app;
const expiresIn = '24h';

module.exports = {secret, expiresIn};