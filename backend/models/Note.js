const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  summary: { type: String },
  tags: [{ type: String }],
  sentiment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema); 