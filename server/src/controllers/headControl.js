const Head = require('../models/Head');
const fs = require('fs');

const getAll = async () => {
  return await Head.find();
}

const create = async (data, file, {isAdmin}) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (!file) {
    throw new Error('Couldn\'t load the file')
  }
  const path = `posts/${file.originalname}`;
  return await Head.create(new Head({image: path, ...data}));
};

const update = async ({id}, file, data, {isAdmin}) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (file) {
    const path = `posts/${file.originalname}`;
    data =  {image: path, ...data};
  }
  await Head.findByIdAndUpdate(id, data);
  return await Head.findById(id);
}

module.exports = {create, getAll, update};