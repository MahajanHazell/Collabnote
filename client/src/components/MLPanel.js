import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MLPanel = ({ summary, tags, sentiment }) => (
  <Card sx={{ my: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>AI Insights</Typography>
      <Typography variant="body1"><strong>Summary:</strong> {summary || 'N/A'}</Typography>
      <Typography variant="body1"><strong>Tags:</strong> {tags && tags.length ? tags.join(', ') : 'N/A'}</Typography>
      <Typography variant="body1"><strong>Sentiment:</strong> {sentiment || 'N/A'}</Typography>
    </CardContent>
  </Card>
);

export default MLPanel;
