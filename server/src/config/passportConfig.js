const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { secret } = require('./jwtConfig');
const User = require('../models/User');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};

passport.use(
  'login',
  new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
    try {
      const user = await User.findOne({username});
      if (!user) {
        return done({ status: 401, message: 'Incorrect username.' }, false);
      }
      return await user.checkPassword(password)
        ? done(null, user)
        : done({ status: 401, message: 'Passwords do not match.' }, null, false);
    } catch (err) {
      return done(err);
    }
  })
);

passport.use(
  'register',
  new LocalStrategy(
    { usernameField: 'username',  passwordField: 'password', passReqToCallback: true },
    async ({body}, username, password, done) => {
      try {
        const isAdmin = body.isAdmin;
        const user = await User.findOne({username});
        if(user) {
          return done({ status: 401, message: 'Username is already taken.' }, null)
        }
        return done(null, { username, isAdmin, password });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(new JwtStrategy(options, async ({ id }, done) => {
  try {
    const user = await User.findById(id);
    return user ? done(null, user) : done({ status: 401, message: 'Token is invalid.' }, null);
  } catch (err) {
    return done(err);
  }
}));