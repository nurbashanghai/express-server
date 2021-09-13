require('dotenv').config();

const express = require('express');

const app = express();

const routes = require('./routes/index.js');

const PORT = process.env.PORT;

let students = [];

app.use(express.json());

app.use('/makers', routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
