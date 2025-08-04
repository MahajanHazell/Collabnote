import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NoteEditor from '../components/NoteEditor';
import NotesList from '../components/NotesList';
import MLPanel from '../components/MLPanel';
import { fetchNotes, createNote, deleteNote } from '../api/notesService';
import { getSummary, getTags, getSentiment } from '../api/mlService';
import { Container, Box, Snackbar, Alert } from '@mui/material';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [mlResults, setMlResults] = useState({ summary: '', tags: [], sentiment: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch notes from backend on mount
  useEffect(() => {
    setLoading(true);
    fetchNotes()
      .then(setNotes)
      .catch(err => setError('Failed to load notes: ' + err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSaveNote = async (text) => {
    setLoading(true);
    setError('');
    try {
      const newNote = await createNote(text);
      setNotes([newNote, ...notes]);
      setSelectedNote(newNote);
      setMlResults({
        summary: newNote.summary,
        tags: newNote.tags,
        sentiment: newNote.sentiment
      });
      setSnackbarOpen(true);
    } catch (err) {
      setError('Failed to save note: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async (id) => {
    setLoading(true);
    setError('');
    try {
      await deleteNote(id);
      const updatedNotes = notes.filter(note => note._id !== id);
      setNotes(updatedNotes);
      if (selectedNote && selectedNote._id === id) {
        setSelectedNote(null);
        setMlResults({ summary: '', tags: [], sentiment: '' });
      }
      setSnackbarOpen(true);
    } catch (err) {
      setError('Failed to delete note: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setMlResults({
      summary: note.summary,
      tags: note.tags,
      sentiment: note.sentiment
    });
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <Container maxWidth="sm">
      <Header />
      <Box sx={{ my: 4 }}>
        <NoteEditor onSave={handleSaveNote} />
        {loading && <Alert severity="info">Loading...</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <NotesList notes={notes} onSelect={handleSelectNote} selectedNote={selectedNote} onDelete={handleDeleteNote} />
        {(!loading && notes.length === 0) && <Alert severity="info">No notes yet. Start by adding one!</Alert>}
        <MLPanel {...mlResults} />
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Action successful!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
