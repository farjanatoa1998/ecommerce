# Heroku-এ SmartCart AI Backend Deploy

## 🚀 Heroku ব্যবহার করে Backend Deploy

### **ধাপ ১: Heroku Account তৈরি করুন**
1. [heroku.com](https://heroku.com) এ যান
2. Free account তৈরি করুন
3. Heroku CLI install করুন

### **ধাপ ২: Heroku CLI Commands**
```bash
# Heroku CLI install করুন
# Windows: https://devcenter.heroku.com/articles/heroku-cli

# Login করুন
heroku login

# Heroku app তৈরি করুন
heroku create smartcart-ai-backend

# Environment variables সেট করুন
heroku config:set NODE_ENV=production
heroku config:set PORT=5000
heroku config:set MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart-ai
heroku config:set JWT_SECRET=your-super-secret-jwt-key-here
heroku config:set JWT_EXPIRE=7d
heroku config:set CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
heroku config:set CLOUDINARY_API_KEY=your-cloudinary-api-key
heroku config:set CLOUDINARY_API_SECRET=your-cloudinary-api-secret
heroku config:set OPENAI_API_KEY=your-openai-api-key-here
heroku config:set FRONTEND_URL=https://your-vercel-app.vercel.app

# Deploy করুন
git push heroku main
```

### **ধাপ ৩: Procfile তৈরি করুন**
`server/Procfile` ফাইল তৈরি করুন:
```
web: node server.js
```

### **ধাপ ৪: Package.json Scripts**
`server/package.json`-এ এই script যোগ করুন:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## ✅ **Heroku এর সুবিধা:**
- Very popular platform
- Good documentation
- Add-ons available
- Easy scaling
