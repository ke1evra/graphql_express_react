const passport = require('passport');
const _ = require('lodash');
const users = require('../database/users');

passport.serializeUser(function (user, done) {
  if(!user){
    return done(null, false);
  }
  done(null, user.id)
});

passport.deserializeUser(function (id, done) {
  const user = _.find(users, {id: id});
  if(!user){
    return done(null, false);
  }
  done(null, user.id)
});

const SignUpStrategy = require('./SignUpStrategy');
const SignInStrategy = require('./SignInStrategy');

passport.use('local-signin', SignInStrategy);
passport.use('local-signup', SignUpStrategy);

module.exports = passport;
