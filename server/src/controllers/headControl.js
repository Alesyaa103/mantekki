const Head = require('../models/Head');
const fs = require('fs');

const getAll = async () => {
  return await Head.find();
}

const create = async (data, {isAdmin}, file) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (!file) {
    throw new Error('Couldn\'t load the file')
  }
  const path = file.path.slice(12);
  return await Head.create(new Head({image: path, ...data}));
};

const update = async ({id}, data, {isAdmin}, file) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (file) {
    const path = file.path.slice(12);
    data =  {image: path, ...data};
  }
  await Head.findByIdAndUpdate(id, data);
  return await Head.findById(id);
}

module.exports = {create, getAll, update};