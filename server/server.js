const express = require('express');
const app = express();
const routes = require('./controllers');
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
