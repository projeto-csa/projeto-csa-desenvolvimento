import session from 'express-session';
import uuid from 'uuid';
import passport from 'passport';

import passportSetup from './passport';

const authSetup = (app) => {
  passportSetup(passport);

  app.use(
    session({
      genid: req => uuid.v4(),
      secret: 'Z3]GJW!?9uP"/Kpe',
      resave: true, // verify these later:
      saveUninitialized: false, // https://github.com/expressjs/session#options
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
      if (error) {
        return res
          .status(500)
          .json({
            success: false,
            error,
          });
      }

      if (!user) {
        return res
          .status(403)
          .json({
            success: false,
            message: info.message || 'Incorrect credentials.',
          });
      }

      // Manually establish the session...
      req.login(user, (err) => { // verificar se pode dar erro
        if (err) {
          return res
            .status(500)
            .json({
              success: false,
              error,
            });
        }
        return res
          .status(200)
          .json({
            success: true,
            message: 'user authenticated!',
          });
      });
      return next();
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('connect.sid');
    res.end();
  });
};

export default authSetup;
