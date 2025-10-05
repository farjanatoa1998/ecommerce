# SmartCart AI - Deployment Guide

This guide will help you deploy the SmartCart AI e-commerce platform to production.

## 🚀 Quick Deployment

### Prerequisites
- GitHub account
- MongoDB Atlas account
- Cloudinary account
- OpenAI API key
- Render/Railway account (for backend)
- Vercel/Netlify account (for frontend)

## 📋 Step-by-Step Deployment

### 1. Backend Deployment (Render/Railway)

#### Option A: Render
1. **Create a new Web Service**
   - Connect your GitHub repository
   - Choose "Node" as the environment
   - Set build command: `cd server && npm install`
   - Set start command: `cd server && npm start`

2. **Environment Variables**
   ```env
   NODE_ENV=production
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart-ai
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   OPENAI_API_KEY=your-openai-api-key-here
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

#### Option B: Railway
1. **Deploy from GitHub**
   - Connect your repository
   - Railway will auto-detect the Node.js app
   - Set the root directory to `server`

2. **Environment Variables**
   - Add all the same variables as above

### 2. Frontend Deployment (Vercel/Netlify)

#### Option A: Vercel
1. **Import Project**
   - Connect your GitHub repository
   - Set framework preset to "Vite"
   - Set root directory to `client`

2. **Build Settings**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

3. **Environment Variables**
   ```env
   VITE_API_URL=https://your-backend-domain.onrender.com/api
   ```

#### Option B: Netlify
1. **Deploy from Git**
   - Connect your repository
   - Set base directory to `client`
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   ```env
   VITE_API_URL=https://your-backend-domain.onrender.com/api
   ```

### 3. Database Setup (MongoDB Atlas)

1. **Create Cluster**
   - Sign up for MongoDB Atlas
   - Create a new cluster
   - Choose your preferred region

2. **Database Access**
   - Create a database user
   - Set username and password
   - Note down the connection string

3. **Network Access**
   - Add IP address `0.0.0.0/0` for all IPs (or specific IPs for security)
   - Or use MongoDB Atlas IP whitelist

### 4. Image Storage (Cloudinary)

1. **Create Account**
   - Sign up for Cloudinary
   - Get your cloud name, API key, and API secret
   - These will be used in your environment variables

### 5. AI Features (OpenAI)

1. **Get API Key**
   - Sign up for OpenAI
   - Generate an API key
   - Add it to your environment variables

## 🔧 Configuration Files

### Backend Environment (.env)
```env
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart-ai
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
OPENAI_API_KEY=your-openai-api-key-here
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Frontend Environment (.env)
```env
VITE_API_URL=https://your-backend-domain.onrender.com/api
```

## 🚀 Deployment Commands

### Local Development
```bash
# Install dependencies
npm run install-all

# Start development servers
npm run dev
```

### Production Build
```bash
# Build frontend
cd client
npm run build

# Start production server
cd server
npm start
```

## 📊 Monitoring and Maintenance

### Health Checks
- Backend: `GET /api/health`
- Frontend: Check if the app loads correctly

### Logs
- Monitor application logs in your hosting platform
- Set up error tracking (Sentry, LogRocket, etc.)

### Performance
- Monitor database performance
- Set up CDN for static assets
- Optimize images with Cloudinary

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use strong, unique secrets for production
- Rotate API keys regularly

### Database Security
- Use strong passwords
- Enable IP whitelisting
- Enable MongoDB Atlas security features

### API Security
- Implement rate limiting
- Use HTTPS in production
- Validate all inputs
- Sanitize user data

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check `FRONTEND_URL` in backend environment
   - Ensure CORS is properly configured

2. **Database Connection**
   - Verify MongoDB URI
   - Check network access settings
   - Ensure database user has proper permissions

3. **Image Upload Issues**
   - Verify Cloudinary credentials
   - Check file size limits
   - Ensure proper CORS settings

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

### Debug Commands
```bash
# Check backend logs
npm run dev

# Test API endpoints
curl https://your-backend-domain.onrender.com/api/health

# Check frontend build
cd client && npm run build
```

## 📈 Scaling Considerations

### Database
- Use MongoDB Atlas auto-scaling
- Implement database indexing
- Monitor query performance

### Backend
- Use load balancers for multiple instances
- Implement caching (Redis)
- Monitor server resources

### Frontend
- Use CDN for static assets
- Implement service workers for caching
- Optimize bundle size

## 🔄 Updates and Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Update API keys when needed

### Backup Strategy
- Regular database backups
- Version control for code
- Environment variable backups

## 📞 Support

If you encounter issues during deployment:

1. Check the logs in your hosting platform
2. Verify all environment variables are set correctly
3. Test API endpoints manually
4. Check database connectivity
5. Review the troubleshooting section above

## 🎉 Success!

Once deployed, your SmartCart AI e-commerce platform will be live and ready to serve customers with:

- ✅ Modern, responsive UI
- ✅ Secure authentication
- ✅ AI-powered features
- ✅ Admin dashboard
- ✅ Order management
- ✅ Payment processing
- ✅ Image optimization

Your e-commerce platform is now ready for business! 🚀
