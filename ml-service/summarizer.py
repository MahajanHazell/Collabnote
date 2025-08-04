from transformers import pipeline

# Load the summarization pipeline once at startup
summarizer_pipeline = pipeline("summarization", model="facebook/bart-large-cnn")

def summarize_note(text):
    # HuggingFace models have a max input length; truncate if needed
    if len(text) > 1024:
        text = text[:1024]
    summary = summarizer_pipeline(text, max_length=60, min_length=20, do_sample=False)
    return summary[0]['summary_text']
