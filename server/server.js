const express = require('express');
const app = express();
const routes = require('./controllers');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 3000;

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
});
