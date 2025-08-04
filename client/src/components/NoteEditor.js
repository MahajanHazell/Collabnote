import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const NoteEditor = ({ onSave }) => {
  const [text, setText] = useState('');
  const handleSave = () => {
    if (onSave) onSave(text);
    setText('');
  };
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        label="Write your note here..."
        multiline
        rows={4}
        fullWidth
        value={text}
        onChange={e => setText(e.target.value)}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSave}
      >
        Save Note
      </Button>
    </Box>
  );
};

export default NoteEditor;
