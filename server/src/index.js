const fs = require('fs');
const express = require('express');
const path = require('path');
const passport = require('passport');
const env = require('./env.js');
require('./helpers/mongooseConnect.js');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const routes = require('./routes/index.js');
const authorizationMiddleware = require('./middlewares/authorizationMiddleware');
const routesWhiteList = require('./config/routesWhiteListConfig');
const cors = require('cors');
require('./config/passportConfig');
require('./helpers/removeUnusedImg');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api/', authorizationMiddleware(routesWhiteList));

routes(app);

const staticPath = path.resolve(`${__dirname}/../../client/build`);
const staticPathForImages = path.resolve(`${__dirname}/uploads`);
app.use("/image", express.static(staticPathForImages));
app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.write(fs.readFileSync(`${__dirname}/../../client/build/index.html`));
  res.end();
});

app.use(errorHandlerMiddleware);

app.listen(env.app.port, () => console.log(`Server listening on port ${env.app.port}!`));
