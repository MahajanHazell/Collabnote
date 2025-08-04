# 🚀 CollabNote Deployment Guide

This guide will help you deploy CollabNote to production using Railway and Vercel.

## 📋 Prerequisites

- GitHub account with the CollabNote repository
- Railway account (free tier available)
- Vercel account (free tier available)
- MongoDB Atlas account (free tier available)

## 🎯 Deployment Strategy

1. **Backend (Node.js)** → Railway
2. **ML Service (Python)** → Railway  
3. **Frontend (React)** → Vercel
4. **Database** → MongoDB Atlas

## 🗄️ Step 1: Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user with read/write permissions
5. Get your connection string
6. Add your IP to the whitelist (or use 0.0.0.0/0 for all IPs)

**Connection string format:**
```
mongodb+srv://username:password@cluster.mongodb.net/collabnote?retryWrites=true&w=majority
```

## 🔧 Step 2: Deploy Backend to Railway

1. Go to [Railway](https://railway.app/)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `collabnote` repository
5. Railway will detect it's a Node.js project
6. Set the following environment variables:

```env
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
ML_SERVICE_URL=https://your-ml-service-url.railway.app
NODE_ENV=production
```

7. Deploy the project
8. Note the generated URL (e.g., `https://collabnote-backend.railway.app`)

## 🤖 Step 3: Deploy ML Service to Railway

1. In Railway, create another new project
2. Select the same `collabnote` repository
3. Set the root directory to `ml-service`
4. Set the following environment variables:

```env
PORT=8000
```

5. Deploy the project
6. Note the generated URL (e.g., `https://collabnote-ml.railway.app`)

## ⚡ Step 4: Deploy Frontend to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `collabnote` repository
5. Set the root directory to `client`
6. Set the following environment variables:

```env
REACT_APP_API_URL=https://your-backend-url.railway.app/api/notes
REACT_APP_ML_API_URL=https://your-ml-service-url.railway.app
```

7. Deploy the project
8. Note the generated URL (e.g., `https://collabnote.vercel.app`)

## 🔄 Step 5: Update Backend Environment Variables

1. Go back to your Railway backend project
2. Update the `ML_SERVICE_URL` to point to your ML service URL
3. Redeploy if necessary

## 🧪 Step 6: Test Your Deployment

1. Visit your Vercel frontend URL
2. Try creating a note
3. Check if AI features work
4. Verify data is being saved to MongoDB

## 🔍 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Ensure your backend has CORS configured for your Vercel domain
   - Check that environment variables are set correctly

2. **ML Service Not Working**
   - Verify the ML service URL is correct
   - Check Railway logs for Python dependency issues
   - Ensure the ML service is accessible

3. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings
   - Ensure database user has correct permissions

### Checking Logs:

- **Railway**: Go to your project → "Deployments" → Click on deployment → "Logs"
- **Vercel**: Go to your project → "Deployments" → Click on deployment → "Functions" → "View Function Logs"

## 📊 Monitoring

### Railway Monitoring:
- CPU and memory usage
- Request logs
- Error tracking

### Vercel Analytics:
- Page views and performance
- User behavior
- Error tracking

## 🔒 Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **CORS**: Configure CORS to only allow your frontend domain
3. **Rate Limiting**: Consider implementing API rate limiting
4. **HTTPS**: All services use HTTPS by default

## 💰 Cost Estimation

### Free Tier Limits:
- **Railway**: $5/month free tier (sufficient for development)
- **Vercel**: Free tier with generous limits
- **MongoDB Atlas**: 512MB free tier

### Production Scaling:
- **Railway**: Pay-as-you-go pricing
- **Vercel**: Free tier usually sufficient
- **MongoDB Atlas**: $9/month for 2GB storage

## 🎉 Success!

Once deployed, you'll have:
- **Frontend**: `https://your-app.vercel.app`
- **Backend API**: `https://your-backend.railway.app`
- **ML Service**: `https://your-ml.railway.app`
- **Database**: MongoDB Atlas cluster

Share your frontend URL with others to showcase your CollabNote application!

---

**Need help?** Check the logs in Railway and Vercel dashboards for detailed error information. 