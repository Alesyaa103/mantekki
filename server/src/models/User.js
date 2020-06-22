const mongoose = require('mongoose');
const { compare } = require('../helpers/crypto');

const User = mongoose.Schema;
const UserSchema = new User({
  username: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

UserSchema.methods.checkPassword = async function (pass) {
  if (!pass) return false;
  return await compare(pass, this.password);
};

module.exports = mongoose.model('User', UserSchema);