# DigitalOcean App Platform-এ SmartCart AI Backend Deploy

## 🚀 DigitalOcean App Platform ব্যবহার করে Backend Deploy

### **ধাপ ১: DigitalOcean Account তৈরি করুন**
1. [digitalocean.com](https://digitalocean.com) এ যান
2. Account তৈরি করুন
3. App Platform সিলেক্ট করুন

### **ধাপ ২: App তৈরি করুন**
1. **"Create App"** বাটনে ক্লিক করুন
2. **"GitHub"** সিলেক্ট করুন
3. আপনার repository সিলেক্ট করুন
4. **"Next"** ক্লিক করুন

### **ধাপ ৩: App Configuration**
```
Name: smartcart-ai-backend
Source Directory: server
Build Command: npm install
Run Command: npm start
```

### **ধাপ ৪: Environment Variables**
DigitalOcean dashboard-এ এই variables যোগ করুন:
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

## ✅ **DigitalOcean এর সুবিধা:**
- Good performance
- Reliable infrastructure
- Easy scaling
- Good pricing
