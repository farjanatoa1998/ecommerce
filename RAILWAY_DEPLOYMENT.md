# Railway.app-এ SmartCart AI Backend Deploy

## 🚀 Railway.app ব্যবহার করে Backend Deploy

### **ধাপ ১: Railway Account তৈরি করুন**
1. [railway.app](https://railway.app) এ যান
2. GitHub account দিয়ে sign up করুন
3. Free plan সিলেক্ট করুন

### **ধাপ ২: Project Deploy করুন**
1. **"New Project"** বাটনে ক্লিক করুন
2. **"Deploy from GitHub repo"** সিলেক্ট করুন
3. আপনার repository সিলেক্ট করুন
4. **"Deploy Now"** ক্লিক করুন

### **ধাপ ৩: Environment Variables সেট করুন**
Railway dashboard-এ এই variables যোগ করুন:

```
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart-ai
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
OPENAI_API_KEY=your-openai-api-key-here
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### **ধাপ ৪: Build Settings**
Railway automatically detect করবে:
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: `server`

### **ধাপ ৫: Custom Domain (Optional)**
1. Railway dashboard-এ **"Settings"** → **"Domains"**
2. Custom domain যোগ করুন
3. DNS settings configure করুন

## ✅ **Railway.app এর সুবিধা:**
- Free tier available
- Automatic deployments
- Built-in database options
- Easy environment management
- Fast deployment
