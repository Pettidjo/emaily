const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongooseConnect, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/authRoutes.js');
const billingRouter = require('./routes/billingRoutes.js');

app.use(authRouter);
app.use(billingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT);