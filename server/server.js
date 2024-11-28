const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/database');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    httpOnly: true,
    maxAge: 3600000,
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
});
