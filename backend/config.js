module.exports = {
  PORT: process.env.PORT || 5001,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/collabnote',
  ML_SERVICE_URL: process.env.ML_SERVICE_URL || 'http://localhost:8000'
}; 