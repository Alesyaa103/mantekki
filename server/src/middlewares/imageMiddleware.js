const multer = require('multer');
const { fileSize } = require('../config/awsConfig');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize
  }
});

module.exports = upload.single('image');