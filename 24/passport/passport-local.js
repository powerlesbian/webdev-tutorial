import { Strategy } from 'passport-local';
import passport from 'passport';

import User from '../models/User.js';

const authFields = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

passport.use(
  'login',
  new Strategy(authFields, async (req, username, password, cb) => {
    try {
      const user = await User.findOne({ username });

      if (!user || !user.password) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }

      const checkPassword = await user.comparePassword(password);

      if (!checkPassword) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, user, { message: 'Logged In Successfully' });
    } catch (err) {
      console.error(err);
      return cb(null, false, { statusCode: 400, message: err.message });
    }
  }),
);

passport.use(
  'signup',
  new Strategy(authFields, async (req, username, password, cb) => {
    try {
      const checkUsername = await User.checkExistingField('username', username);

      if (checkUsername) {
        return cb(null, false, {
          statusCode: 409,
          message: 'Username already registered, log in instead',
        });
      }

      const newUser = new User();
      newUser.password = req.body.password;
      newUser.username = req.body.username;
      await newUser.save();
      return cb(null, newUser);
    } catch (err) {
      console.error(err)
      return cb(null, false, { statusCode: 400, message: err.message });
    }
  }),
);
