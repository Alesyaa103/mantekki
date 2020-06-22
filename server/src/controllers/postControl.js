const Post = require('../models/Post');
const fs = require('fs');

const create = async (data, file, {isAdmin}) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (!file) {
    throw new Error('Couldn\'t load the file')
  }
  const path = `posts/${file.originalname}`;
  return await Post.create(new Post({image: path, ...data}));
};

const getAll = async () => {
  return await Post.find();
}

const getCollection = async ({collection}) => {
  return await Post.find({collect: collection});
}

const update = async ({id}, file, data, {isAdmin}) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (file) {
    const path = `posts/${file.originalname}`;
    data = {image: path, ...data};
  }
  await Post.findByIdAndUpdate(id, data);
  return await Post.findById(id);
}

const remove = async ({id}, { isAdmin }) => {
  console.log(id,isAdmin)
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  await Post.findByIdAndDelete(id);
  return 'Post was deleted';
}

module.exports = {remove, update, create, getCollection, getAll};