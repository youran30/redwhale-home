const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.query('SELECT * FROM admin WHERE username=? AND password=?', [username, password]);
  if (rows.length) {
    res.json({ token: 'admin-token-2026', message: '登录成功' });
  } else {
    res.status(401).json({ message: '用户名或密码错误' });
  }
});

module.exports = router;