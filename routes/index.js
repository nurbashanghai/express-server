const express = require('express');

const router = express.Router();

const studentRoutes = require('./../routes/students.js');
const todosRoutes = require('./../routes/todos.js');

router.use('/students', studentRoutes);
router.use('/todos', todosRoutes);

module.exports = router;
