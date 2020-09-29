const env = require('../env.js');

const { awsId, awsSecret, awsBucket } = env.aws;
const fileSize = 10000000; // ~ 10MB

module.exports = { awsId, awsSecret, awsBucket, fileSize }