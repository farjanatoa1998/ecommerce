# Vercel-এ Full-Stack SmartCart AI Deploy

## 🚀 Vercel-এ Backend এবং Frontend একসাথে Deploy

### **ধাপ ১: Vercel Configuration**
Vercel-এ আপনার project-এ এই settings যোগ করুন:

### **ধাপ ২: vercel.json ফাইল তৈরি করুন**
Project root-এ `vercel.json` ফাইল তৈরি করুন:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/server.js",
      "use": "@vercel/node"
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "client/dist/$1"
    }
  ]
}
```

### **ধাপ ৩: Environment Variables**
Vercel dashboard-এ এই variables যোগ করুন:
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

### **ধাপ ৪: Build Settings**
```
Build Command: npm run build
Output Directory: client/dist
Install Command: npm run install-all
```

## ✅ **Vercel Full-Stack এর সুবিধা:**
- Single platform for both frontend and backend
- Automatic deployments
- Edge functions
- Global CDN
- Easy domain management
