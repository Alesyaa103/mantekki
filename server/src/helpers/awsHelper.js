const AWS = require('aws-sdk');
const { awsId, awsSecret } = require('../config/awsConfig');

AWS.config.update({
	accessKeyId: awsId,
	secretAccessKey: awsSecret,
});

module.exports = AWS;
