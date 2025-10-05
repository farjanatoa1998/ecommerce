# SmartCart AI - Modern MERN E-Commerce Platform

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring AI-powered recommendations, modern UI/UX, and comprehensive admin functionality.

## 🚀 Features

### Core E-Commerce Features
- **Product Management**: Full CRUD operations for products with image upload
- **Shopping Cart**: Persistent cart functionality with real-time updates
- **Order Management**: Complete order processing and tracking system
- **User Authentication**: JWT-based authentication with role-based access control
- **Payment Integration**: Multiple payment methods (COD, Card, Bkash, Nagad)

### AI-Powered Features
- **AI Chatbot**: Intelligent shopping assistant for product recommendations
- **Smart Recommendations**: Personalized product suggestions based on user behavior
- **AI Content Generation**: Auto-generate product descriptions using OpenAI
- **SEO Optimization**: AI-powered content optimization for better search rankings

### Admin Dashboard
- **Product Management**: Add, edit, delete products with bulk operations
- **Order Management**: Track and update order status with tracking numbers
- **User Management**: Manage user accounts and permissions
- **Analytics Dashboard**: Sales statistics and performance metrics

### Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Modern Components**: Beautiful, accessible UI components
- **Smooth Animations**: Framer Motion for enhanced user experience

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Cloudinary** - Image storage
- **OpenAI API** - AI features
- **Multer** - File upload handling

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Query** - Data fetching
- **React Hook Form** - Form handling

## 📁 Project Structure

```
smartcart-ai-ecommerce/
├── server/                 # Backend API
│   ├── config/            # Database and service configurations
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js         # Server entry point
├── client/               # Frontend React app
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store and slices
│   │   ├── api/          # API service functions
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
└── package.json          # Root package configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smartcart-ai-ecommerce.git
   cd smartcart-ai-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   Create `.env` file in the `server` directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart-ai
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   OPENAI_API_KEY=your-openai-api-key-here
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 3000).

## 🔧 Configuration

### Database Setup
1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Update the `MONGO_URI` in your `.env` file

### Cloudinary Setup
1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update the Cloudinary credentials in your `.env` file

### OpenAI Setup
1. Get an OpenAI API key
2. Add it to your `.env` file for AI features

## 📱 Usage

### For Customers
1. **Browse Products**: Explore the product catalog with advanced filtering
2. **Add to Cart**: Add products to your shopping cart
3. **Checkout**: Complete your purchase with secure payment
4. **Track Orders**: Monitor your order status and tracking information
5. **AI Assistant**: Get personalized product recommendations

### For Administrators
1. **Dashboard**: View sales analytics and key metrics
2. **Product Management**: Add, edit, and manage products
3. **Order Management**: Process and track customer orders
4. **User Management**: Manage customer accounts and permissions
5. **AI Features**: Generate product descriptions and optimize content

## 🚀 Deployment

### Backend Deployment (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy the server

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy the frontend

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGO_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
OPENAI_API_KEY=your-openai-api-key
FRONTEND_URL=https://your-frontend-domain.com
```

## 🤖 AI Features

### AI Chatbot
- Intelligent product search and recommendations
- Natural language processing for customer queries
- Context-aware responses

### Smart Recommendations
- Personalized product suggestions
- Based on user behavior and preferences
- Machine learning algorithms

### Content Generation
- Auto-generate product descriptions
- SEO-optimized content creation
- Multi-language support

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS configuration
- Rate limiting
- Helmet.js security headers

## 📊 Performance Optimizations

- Image optimization with Cloudinary
- Lazy loading for components
- Code splitting
- Caching strategies
- Database indexing

## 🧪 Testing

```bash
# Run backend tests
cd server
npm test

# Run frontend tests
cd client
npm test
```

## 📈 Monitoring and Analytics

- Order tracking and status updates
- Sales analytics dashboard
- User behavior tracking
- Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- Cloudinary for image management
- MongoDB Atlas for database hosting
- Vercel/Netlify for deployment platforms

## 📞 Support

For support, email support@smartcart.ai or create an issue in the repository.

---

**SmartCart AI** - Your intelligent shopping companion 🛍️✨
