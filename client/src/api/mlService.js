const ML_API_URL = process.env.REACT_APP_ML_API_URL || 'http://127.0.0.1:8000';

export async function getSummary(text) {
  const res = await fetch(`${ML_API_URL}/summarize`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  return data.summary;
}

export async function getTags(text) {
  const res = await fetch(`${ML_API_URL}/tag`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  return data.tags;
}

export async function getSentiment(text) {
  const res = await fetch(`${ML_API_URL}/sentiment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  return data.sentiment;
}
