def tag_note(text):
    """
    Simple tagger: returns keywords if found in text.
    Replace with a real ML model for production.
    """
    keywords = ['collaboration', 'meeting', 'project', 'deadline', 'AI', 'ML', 'note', 'summary']
    tags = [kw for kw in keywords if kw.lower() in text.lower()]
    return tags
