const express = require('express');
const axios = require('axios');
const Note = require('../models/Note');
const config = require('../config');

const router = express.Router();
const ML_API_URL = config.ML_SERVICE_URL;

// Helper to get ML results
async function getMLResults(text) {
  const [summaryRes, tagsRes, sentimentRes] = await Promise.all([
    axios.post(`${ML_API_URL}/summarize`, { text }),
    axios.post(`${ML_API_URL}/tag`, { text }),
    axios.post(`${ML_API_URL}/sentiment`, { text })
  ]);
  return {
    summary: summaryRes.data.summary,
    tags: tagsRes.data.tags,
    sentiment: sentimentRes.data.sentiment
  };
}

// Create a note
router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    const mlResults = await getMLResults(text);
    const note = new Note({ text, ...mlResults });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single note
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a note
router.put('/:id', async (req, res) => {
  try {
    const { text } = req.body;
    const mlResults = await getMLResults(text);
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { text, ...mlResults },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 