const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
    // check to see if the username exists
    //use findOne instead of findAll
    models.User.findOne({
            where: {
                username: username
            }
        })
        .then((user) => {
            //because of using findOne an array isn't returned so index is not needed 
            console.log(user);
            if (!user) {
                return done(null, false);
            }
            if (!authHelpers.comparePass(password, user.dataValues.password)) {
                return done(null, false);
            } else {
                return done(null, user.dataValues);
            }
        })
        .catch((err) => { return done(err); });
}));

module.exports = passport;