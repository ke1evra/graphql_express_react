const Strategy = require('passport-local').Strategy;

const SignUpStrategy = new Strategy(
    function(username, password, done) {
        //Процедура регистрации нового пользователя
        return done(null, username);
    }
);

module.exports = SignUpStrategy;
