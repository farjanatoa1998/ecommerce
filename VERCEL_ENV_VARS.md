# Vercel Environment Variables

## 🔧 Vercel Dashboard-এ এই Environment Variables যোগ করুন:

### **Backend Environment Variables:**
```
NODE_ENV=production
MONGO_URI=mongodb+srv://farjanatoa1998_db_user:aDwmmtiEewLeS7HO@cluster0.mongodb.net/smartcart-ai?retryWrites=true&w=majority
JWT_SECRET=smartcart-ai-super-secret-jwt-key-2024
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=576592272427717
CLOUDINARY_API_SECRET=5t2k7tpA13aGQY5Lr575cZAH6Dg
OPENAI_API_KEY=your-openai-api-key-here
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### **Frontend Environment Variables:**
```
VITE_API_URL=https://your-vercel-app.vercel.app/api
```

## 📋 Vercel-এ Environment Variables যোগ করার পদ্ধতি:

1. **Vercel Dashboard** → আপনার project সিলেক্ট করুন
2. **Settings** → **Environment Variables**
3. **Add New** বাটনে ক্লিক করুন
4. **Name** এবং **Value** দিন
5. **Save** করুন

## 🔐 Security Notes:

- ✅ MongoDB credentials সেট করা হয়েছে
- ✅ Cloudinary credentials সেট করা হয়েছে
- ⚠️ OpenAI API key যোগ করুন
- ⚠️ Cloudinary Cloud Name যোগ করুন
- ⚠️ JWT Secret production-এ পরিবর্তন করুন
