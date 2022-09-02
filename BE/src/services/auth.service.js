const passport = require('passport');
const GitLabStrategy = require('passport-gitlab2');

require('dotenv').config();

const GITLAB_APP_ID = process.env.GITLAB_APP_ID;
const GITLAB_APP_SECRET = process.env.GITLAB_APP_SECRET;

passport.use(
  new GitLabStrategy(
    {
      clientID: GITLAB_APP_ID,
      clientSecret: GITLAB_APP_SECRET,
      callbackURL: 'http://localhost:3000/gitlab/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (user, cb) {
  cb(null, user);
});
