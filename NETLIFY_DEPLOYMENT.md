# Netlify-এ SmartCart AI Deploy

## 🚀 Netlify Functions ব্যবহার করে Backend Deploy

### **ধাপ ১: Netlify Account তৈরি করুন**
1. [netlify.com](https://netlify.com) এ যান
2. GitHub account দিয়ে sign up করুন

### **ধাপ ২: Project Deploy করুন**
1. **"New site from Git"** ক্লিক করুন
2. GitHub repository সিলেক্ট করুন
3. Build settings:
   ```
   Build command: npm run build
   Publish directory: client/dist
   ```

### **ধাপ ৩: Netlify Functions Setup**
`netlify/functions/` folder তৈরি করুন এবং API functions যোগ করুন।

### **ধাপ ৪: Environment Variables**
Netlify dashboard-এ variables যোগ করুন:
```
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart-ai
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
OPENAI_API_KEY=your-openai-api-key-here
```

## ✅ **Netlify এর সুবিধা:**
- Free tier available
- Easy deployment
- Built-in CI/CD
- Form handling
- Edge functions
