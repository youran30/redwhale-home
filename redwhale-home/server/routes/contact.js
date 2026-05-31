const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  await db.query('INSERT INTO contacts (name, email, message) VALUES (?,?,?)', [name, email, message]);
  res.json({ message: '留言成功' });
});

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
  res.json(rows);
});

module.exports = router;