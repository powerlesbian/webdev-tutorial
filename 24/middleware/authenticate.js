import passportConfig from '../passport/config.js';

export default {
  authenticate: (req, res, next) => {
    passportConfig.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        throw new Error(
          'invalid token, please log in or sign up',
        );
      }

      req.user = user;
      return next();
    })(req, res, next);
  },
};
