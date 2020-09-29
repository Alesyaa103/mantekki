const Post = require('../models/Post');
const uploadS3 = require('../helpers/awsUploadHelper');

const create = async (data, {isAdmin}, file) => {
  if (!isAdmin) {
    throw new Error('You are not allowed to make changes');
  }
  if (!file) {
    throw new Error('Couldn\'t load the file')
  }
  const timestamp = +new Date();
  const name = `${data.title}_${timestamp}`;
  const image = await uploadS3(file, name);
    if (!image) {
      throw new Error('Could not load image');
    }
  return await Post.create(new Post({image, ...data}));
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
    const timestamp = +new Date();
		const name = `${data.title}_${timestamp}`;
    const avatar = await uploadS3(file, name);
			if (!avatar) {
				throw new Error('Could not load image');
			}
    data = {image: avatar, ...data};
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