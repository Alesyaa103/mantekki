const { awsBucket } = require('../config/awsConfig');
const AWS = require('./awsHelper');

const s3 = new AWS.S3();

function uploadS3(file, fileName) {
	return new Promise((resolve, reject) => {
		if (awsBucket) {
			s3.upload(
				{
					Bucket: awsBucket,
					Key: fileName,
					Body: file.buffer,
				},
				(err, data) => {
					if (err) {
						reject(err);
					}
					resolve(data.Location);
				},
			);
		}
	});
}

module.exports = uploadS3;