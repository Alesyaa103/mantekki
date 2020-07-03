const Post = require('../models/Post');

const create = async (data, {isAdmin}, file) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (!file) {
    throw new Error('Couldn\'t load the file')
  }
  const path = file.path.slice(12);
  return await Post.create(new Post({image: path, ...data}));
};

const getAll = async () => {
  return await Post.find();
}

const getCollection = async ({collection}) => {
  return await Post.find({collect: collection});
}

const update = async ({id}, data, {isAdmin}, file) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (file) {
    const path = file.path.slice(12);
    data = {image: path, ...data};
  }
  await Post.findByIdAndUpdate(id, data);
  return await Post.findById(id);
}

const remove = async ({id}, { isAdmin }) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  const deletedPost = await Post.findById(id);
  await Post.findByIdAndDelete(id);
  return deletedPost;
}

module.exports = {remove, update, create, getCollection, getAll};