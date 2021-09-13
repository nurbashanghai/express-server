require('dotenv').config();

const express = require('express');

const app = express();

const studentRoutes = require('./routes/students.js');
const todosRoutes = require('./routes/todos.js');

const routes = require('./routes/index.js');

const PORT = process.env.PORT;

let students = [];

app.use(express.json());

// ! --------- SEPARATE ROUTING SYSTEM ---------
// app.use('/api/v1', studentsRoutes)
// app.use('/api/v2', todosRoutes)
// ! ---------  ROUTING SYSTEM ---------

// ! UNION ROUTING SYSTEMA
app.use('/makers', routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
