def analyze_sentiment(text):
    """
    Simple sentiment analysis: counts positive/negative words.
    Replace with a real ML model for production.
    """
    positive_words = ['good', 'great', 'excellent', 'positive', 'fortunate', 'correct', 'superior']
    negative_words = ['bad', 'terrible', 'poor', 'negative', 'unfortunate', 'wrong', 'inferior']
    pos = sum(word in text.lower() for word in positive_words)
    neg = sum(word in text.lower() for word in negative_words)
    if pos > neg:
        return 'positive'
    elif neg > pos:
        return 'negative'
    else:
        return 'neutral'
