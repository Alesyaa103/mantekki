const cron = require('node-cron');
const fs = require('fs');
const Post = require('../models/Post');
const Head = require('../models/Head');

module.exports = cron.schedule('0 0 1 * *', () => {
  cleanFolder(Post, '../uploads/posts');
  cleanFolder(Head, '../uploads/main');
}, {
  scheduled: true,
  timezone: 'America/Chicago'
});

const cleanFolder = async (Model, path) => {
  console.log('cleaning');
  const items = await Model.find();
  const modelImages = items.map(({image}) => image.split('/').pop());
  const folderImages = fs.readdirSync(path);

  folderImages.some(image => {
    if(!modelImages.includes(image)) {
      fs.unlinkSync(`${path}/${image}`);
    }
  })
}