const express = require('express');
const router = express.Router();
const db = require('../db');

// 获取所有产品
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products ORDER BY created_at DESC');
  res.json(rows);
});

// 获取单个产品详情
router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products WHERE id=?', [req.params.id]);
  if (rows.length) res.json(rows[0]);
  else res.status(404).json({ message: '未找到' });
});

// 新增产品
router.post('/', async (req, res) => {
  const { name, category, price, description, image_url, details } = req.body;
  const [result] = await db.query(
    'INSERT INTO products (name, category, price, description, image_url, details) VALUES (?,?,?,?,?,?)',
    [name, category, price, description, image_url, details]
  );
  res.json({ id: result.insertId, message: '添加成功' });
});

// 修改产品
router.put('/:id', async (req, res) => {
  const { name, category, price, description, image_url, details } = req.body;
  await db.query(
    'UPDATE products SET name=?, category=?, price=?, description=?, image_url=?, details=? WHERE id=?',
    [name, category, price, description, image_url, details, req.params.id]
  );
  res.json({ message: '修改成功' });
});

// 删除产品
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM products WHERE id=?', [req.params.id]);
  res.json({ message: '删除成功' });
});

module.exports = router;