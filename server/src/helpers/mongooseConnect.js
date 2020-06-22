const mongoose = require('mongoose');
const { username, password, dbName, claster } = require('../config/dbConfig.js');

mongoose.Promise = Promise;
mongoose.set('debug', true); //write all requests in console
mongoose.connect( `${dbName}+srv://${username}:${password}@${claster}-kpole.mongodb.net/${claster}?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useFindAndModify:  false, useCreateIndex: true,  useUnifiedTopology: true },
(err) => { if (err) throw new Error('Connected with db is faild'); console.log('connected'); });

module.exports = mongoose;