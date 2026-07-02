const express = require('express');
const router = express.Router();
const Bookmark = require('../models/Bookmark');

// GET all bookmarks, sorted newest first
router.get('/', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find().sort({ createdAt: -1 });
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new bookmark
router.post('/', async (req, res) => {
  const bookmark = new Bookmark({
    title: req.body.title,
    url: req.body.url,
    tag: req.body.tag,
  });

  try {
    const newBookmark = await bookmark.save();
    res.status(201).json(newBookmark);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a bookmark by ID
router.delete('/:id', async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndDelete(req.params.id);
    if (!bookmark) {
      return res.status(404).json({ message: 'Bookmark not found' });
    }
    res.json({ message: 'Bookmark deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;