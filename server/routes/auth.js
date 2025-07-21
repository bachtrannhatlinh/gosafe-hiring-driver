const express = require('express');
const router = express.Router();
const axios = require('axios');

// Đăng nhập Zalo - dùng code để lấy access_token
router.get('/', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://oauth.zaloapp.com/v4/access_token',
      data: {
        app_id: process.env.ZALO_APP_ID,
        app_secret: process.env.ZALO_APP_SECRET,
        code,
        grant_type: 'authorization_code',
      },
    });

    const token = response.data.access_token;

    // Lấy user info
    const userInfo = await axios.get('https://graph.zalo.me/v2.0/me?fields=id,name,picture', {
      headers: {
        access_token: token,
      },
    });

    res.json({
      zaloId: userInfo.data.id,
      name: userInfo.data.name,
      avatar: userInfo.data.picture.data.url,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).json({ error: 'Zalo OAuth failed', detail: err.message });
  }
});

module.exports = router;
