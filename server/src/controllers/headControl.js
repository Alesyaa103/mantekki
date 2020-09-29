const Head = require('../models/Head');
const uploadS3 = require('../helpers/awsUploadHelper');

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
  const timestamp = +new Date();
  const name = `${data.title}_${timestamp}`;
  const image = await uploadS3(file, name);
    if (!image) {
      throw new Error('Could not load image');
    }
  return await Head.create(new Head({image, ...data}));
};

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
  await Head.findByIdAndUpdate(id, data);
  return await Head.findById(id);
}

module.exports = {create, getAll, update};