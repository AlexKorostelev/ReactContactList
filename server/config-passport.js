const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userDB = require('./db/userDB');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = userDB.id === id ? userDB : false;
  done(null, user);
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, ((
    email,
    password,
    done,
  ) => {
    if (email === userDB.email && password === userDB.password) {
      return done(null, userDB);
    }
    return done(null, false);
  })),
);
