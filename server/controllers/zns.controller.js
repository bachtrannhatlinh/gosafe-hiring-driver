const express = require('express');
const router = express.Router();

// POST /api/zns/send-confirmation
router.post('/send-confirmation', (req, res) => {
  const { zaloId, driverName, driverPhone } = req.body;
  console.log('Received:', { zaloId, driverName, driverPhone });

  // Gọi service xử lý (nếu có)
  res.json({ success: true, message: 'ZNS sent!' });
});

module.exports = router;
