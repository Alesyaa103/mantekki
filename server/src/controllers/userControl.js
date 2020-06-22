const User = require('../models/User');
const createToken = require('../helpers/createToken');
const { encrypt } = require('../helpers/crypto');

exports.login = async ({ id, username, isAdmin }) =>{
  return {
    token: createToken({ id }),
    username,
    isAdmin
  }
};

exports.register = async ({isAdmin, password, username}) => {
  const hash = await encrypt(password);
  const newUser = new User({
    username,
    isAdmin,
    password: hash,
  });
  const user = await User.create(newUser);
  return {isAdmin: user.isAdmin, 
          username: user.username}
};