const dotenv = require('dotenv');

dotenv.config();

const env = {
  app: {
    port: process.env.APP_PORT,
    secret: process.env.SECRET_KEY
  },
  db: {
    dbName: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    claster: process.env.DB_CLASTER
  },
  aws: {
    awsId: process.env.ACCESS_KEY_ID,
    awsSecret: process.env.SECRET_ACCESS_KEY,
    awsBucket: process.env.BUCKET_NAME
  },
};

module.exports = env;