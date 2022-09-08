const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { projectsRouter } = require('./routes');

require('./services/auth.service');
const app = express();

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/projects', projectsRouter);

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.send('<a href="/gitlab">Log in with GitLab</a>');
});

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

app.get('/gitlab', passport.authenticate('gitlab', { scope: ['api'] }));
app.get(
  '/gitlab/callback',
  passport.authenticate('gitlab', {
    successRedirect: '/success',
    failureRedirect: '/failure',
  })
);

app.get('/failure', (req, res) => {
  res.send('Something went wrong. Please try again');
});

app.get('/success', isLoggedIn, (req, res) => {
  res.setHeader('Set-Cookie', `user=${req.user._raw}`);
  res.redirect('http://localhost:8080/profile');
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('You are now logged out!');
});

app.listen(3000, async () => {
  console.log(`app listen 3000`);
});
