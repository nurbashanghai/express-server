const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ todo: 'Help mom', id: 1 }]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `deleted id ${id}` });
});

module.exports = router;
