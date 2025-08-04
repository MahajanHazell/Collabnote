# 📝 CollabNote

A full-stack collaborative note-taking application with AI-powered features, built for modern teams and individuals who want intelligent note management.

## 🚀 Features

### ✨ Core Features
- **Real-time Note Creation & Editing** - Create and edit notes with instant saving
- **AI-Powered Summarization** - Automatic note summarization using state-of-the-art NLP models
- **Smart Tagging** - Intelligent topic extraction and tagging
- **Sentiment Analysis** - Analyze the emotional tone of your notes
- **Modern UI** - Clean, responsive interface built with Material-UI
- **Persistent Storage** - Notes saved to MongoDB with automatic cleanup

### 🤖 AI/ML Capabilities
- **Abstractive Summarization** - Uses Facebook's BART model for high-quality summaries
- **Topic Extraction** - Automatically identifies key topics from note content
- **Sentiment Detection** - Analyzes emotional context of written content
- **Scalable ML Architecture** - Microservice-based ML pipeline

### 🏗️ Technical Architecture
- **Full-Stack Application** - React frontend, Node.js backend, Python ML service
- **Microservices Architecture** - Separate services for different functionalities
- **Real-time Communication** - Socket.io for live updates
- **Database Integration** - MongoDB with Mongoose ODM
- **CORS Enabled** - Cross-origin resource sharing for development

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI framework
- **Material-UI** - Professional component library
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **Mongoose** - MongoDB object modeling
- **Axios** - HTTP client for ML service communication

### ML Service
- **Python** - ML development
- **FastAPI** - Modern, fast web framework
- **Transformers** - HuggingFace library for NLP models
- **PyTorch** - Deep learning framework
- **Uvicorn** - ASGI server

### Database
- **MongoDB** - NoSQL database
- **TTL Indexes** - Automatic data expiration (10 minutes)

## 📁 Project Structure

```
collabnote/
├── backend/                 # Node.js Express server
│   ├── config.js           # Environment configuration
│   ├── index.js            # Server entry point
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   └── services/           # Business logic
├── client/                 # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── api/            # API service functions
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── App.js          # Main app component
│   └── package.json
├── ml-service/             # Python FastAPI ML service
│   ├── app.py              # FastAPI application
│   ├── summarizer.py       # Text summarization logic
│   ├── tagger.py           # Topic tagging logic
│   ├── sentiment.py        # Sentiment analysis logic
│   └── requirements.txt    # Python dependencies
├── package.json            # Root package.json
├── railway.json            # Railway deployment config
└── Procfile               # Process management
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MongoDB (local installation or cloud service)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MahajanHazell/collabnote.git
   cd collabnote
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up ML service**
   ```bash
   cd ml-service
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cd ..
   ```

### Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   brew services start mongodb-community  # macOS
   # or
   mongod  # Direct start
   ```

2. **Start the ML service** (Terminal 1)
   ```bash
   cd ml-service
   source venv/bin/activate
   uvicorn app:app --reload --port 8000
   ```

3. **Start the backend server** (Terminal 2)
   ```bash
   npm run dev
   ```

4. **Start the React frontend** (Terminal 3)
   ```bash
   cd client
   npm start
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001
   - ML Service: http://localhost:8000

## 📖 Usage

### Creating Notes
1. Type your note content in the text area
2. Click "Save Note" to create the note
3. The AI will automatically generate:
   - A concise summary
   - Relevant tags
   - Sentiment analysis

### Managing Notes
- View all notes in the left sidebar
- Click on a note to view its details
- Use the delete button to remove notes
- Notes automatically expire after 10 minutes

### AI Features
- **Summaries** appear in the AI Insights panel
- **Tags** help categorize and search notes
- **Sentiment** shows the emotional tone (positive/negative/neutral)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/collabnote
ML_SERVICE_URL=http://localhost:8000
```

### Database Configuration

The application uses MongoDB with the following features:
- **TTL Index**: Notes automatically expire after 10 minutes
- **Timestamps**: Automatic creation and update timestamps
- **Schema Validation**: Ensures data integrity

## 🚀 Deployment

### Railway Deployment
The project includes Railway configuration for easy deployment:

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the configuration
3. Set environment variables in Railway dashboard
4. Deploy with one click

### Environment Variables for Production
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
ML_SERVICE_URL=your_ml_service_url
NODE_ENV=production
```

## 🧪 Testing

### Backend API Testing
```bash
# Test the backend API
curl http://localhost:5001/api/notes

# Test ML service
curl -X POST http://localhost:8000/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "Your note content here"}'
```

## 🔍 API Endpoints

### Notes API (Backend)
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

### ML Service API
- `POST /summarize` - Generate note summary
- `POST /tag` - Extract topics and tags
- `POST /sentiment` - Analyze sentiment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Hazel Mahajan**
- GitHub: [@MahajanHazell](https://github.com/MahajanHazell)
- Email: hazelmah@buffalo.edu

## 🙏 Acknowledgments

- **HuggingFace** for the BART summarization model
- **Material-UI** for the beautiful component library
- **MongoDB** for the database solution
- **FastAPI** for the modern Python web framework

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Real-time collaborative editing
- [ ] Advanced ML features (semantic search, content recommendations)
- [ ] File upload and attachment support
- [ ] Mobile application
- [ ] Advanced analytics and insights
- [ ] Integration with external services (calendar, email, etc.)

---

**CollabNote** - Where AI meets collaboration for smarter note-taking! 🚀 