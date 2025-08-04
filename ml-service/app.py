from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from summarizer import summarize_note
from tagger import tag_note
from sentiment import analyze_sentiment

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "ML microservice is running!"}

@app.post("/summarize")
def summarize_endpoint(note: dict):
    text = note.get("text", "")
    summary = summarize_note(text)
    return {"summary": summary}

@app.post("/tag")
def tag_endpoint(note: dict):
    text = note.get("text", "")
    tags = tag_note(text)
    return {"tags": tags}

@app.post("/sentiment")
def sentiment_endpoint(note: dict):
    text = note.get("text", "")
    sentiment = analyze_sentiment(text)
    return {"sentiment": sentiment}
