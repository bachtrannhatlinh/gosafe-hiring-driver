const express = require('express');
const router = express.Router();
const znsController = require('../controllers/zns.controller');

// Mount zns controller at /api/zns
router.use('/api/zns', znsController);

module.exports = router;
