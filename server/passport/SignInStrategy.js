const Strategy = require("passport-local").Strategy;
const _ = require("lodash");
const users = require("../database/users");

const SignInStrategy = new Strategy({ session: true }, function (
  username,
  password,
  done
) {
  // эмуляция поиска в базе данных
  try {
    const user = _.find(users, { username: username });
    if (!user || user.password !== password) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    done(e);
  }
});

module.exports = SignInStrategy;
