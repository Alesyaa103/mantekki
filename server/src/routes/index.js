const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const headRoutes = require('./headRoutes');

module.exports = app => {
  app.use('/api/user', userRoutes);
  app.use('/api/post', postRoutes);
  app.use('/api/head', headRoutes);
};