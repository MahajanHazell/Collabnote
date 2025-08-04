import React from 'react';
import { List, ListItem, ListItemButton, Paper, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NotesList = ({ notes, onSelect, selectedNote, onDelete }) => (
  <Paper sx={{ my: 2, p: 2 }}>
    <List>
      {notes.map((note, idx) => (
        <React.Fragment key={note._id || idx}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete && onDelete(note._id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              selected={selectedNote && selectedNote._id === note._id}
              onClick={() => onSelect && onSelect(note)}
            >
              {note.text.slice(0, 40)}{note.text.length > 40 ? '...' : ''}
            </ListItemButton>
          </ListItem>
          {idx < notes.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </Paper>
);

export default NotesList;
