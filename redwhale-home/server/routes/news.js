const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM news ORDER BY created_at DESC');
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM news WHERE id=?', [req.params.id]);
  if (rows.length) res.json(rows[0]);
  else res.status(404).json({ message: '未找到' });
});

router.post('/', async (req, res) => {
  const { title, content, image_url } = req.body;
  const [result] = await db.query('INSERT INTO news (title, content, image_url) VALUES (?,?,?)', [title, content, image_url]);
  res.json({ id: result.insertId, message: '添加成功' });
});

router.put('/:id', async (req, res) => {
  const { title, content, image_url } = req.body;
  await db.query('UPDATE news SET title=?, content=?, image_url=? WHERE id=?', [title, content, image_url, req.params.id]);
  res.json({ message: '修改成功' });
});

router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM news WHERE id=?', [req.params.id]);
  res.json({ message: '删除成功' });
});

module.exports = router;