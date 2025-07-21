const express = require('express');
const router = express.Router();
const drivers = require('../data/drivers.json');

router.get('/', (req, res) => {
  res.json(drivers);
});

module.exports = router;
