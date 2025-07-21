const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const bookingsPath = path.join(__dirname, '../data/bookings.json');

router.post('/', (req, res) => {
  const booking = req.body;

  let current = [];
  if (fs.existsSync(bookingsPath)) {
    current = JSON.parse(fs.readFileSync(bookingsPath));
  }

  current.push(booking);
  fs.writeFileSync(bookingsPath, JSON.stringify(current, null, 2));

  res.json({ status: 'success', booking });
});

router.get('/:zaloId', (req, res) => {
  const zaloId = req.params.zaloId;
  const data = fs.existsSync(bookingsPath) ? JSON.parse(fs.readFileSync(bookingsPath)) : [];
  const userBookings = data.filter(b => b.zaloId === zaloId);
  res.json(userBookings);
});

module.exports = router;
