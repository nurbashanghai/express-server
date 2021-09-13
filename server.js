require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/students', (req, res) => {
  console.log(req);

  res.status(203).send('this is students route');
});

app.post('/api/v1/orders', (req, res) => {
  console.log(req.body);

  res.send(`POST METHOD WORKED ON ${req.url}`);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
