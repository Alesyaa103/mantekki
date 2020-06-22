const axios = require('axios');
const { imgurId } = require('../config/imgurConfig.js');

module.exports = async file => {
  try {
    const { data: { data } } = await axios.post(
      'https://api.imgur.com/3/upload',
      {
        image: file.buffer.toString('base64')
      }, {
        headers: { Authorization: `Client-ID ${imgurId}` }
      }
    );
    return {
      link: data.link,
      deleteHash: data.deletehash
    };
  } catch ({ response: { data: { status, data } } }) { // parse Imgur error
    return Promise.reject({ status, message: data.error });
  }
};