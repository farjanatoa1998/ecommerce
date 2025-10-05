const express = require('express');
const { body } = require('express-validator');
const { 
  generateProductDescription, 
  aiChat, 
  generateRecommendations, 
  generateSEOContent 
} = require('../controllers/aiController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/ai/describe
// @desc    Generate product description using AI
// @access  Private/Admin
router.post('/describe', protect, authorize('admin'), [
  body('title')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Product title must be between 2 and 100 characters'),
  body('category')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Category must be between 2 and 50 characters'),
  body('features')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Features must be less than 500 characters')
], generateProductDescription);

// @route   POST /api/ai/chat
// @desc    AI Chatbot for product search
// @access  Private
router.post('/chat', protect, [
  body('message')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Message must be between 1 and 500 characters'),
  body('conversationHistory')
    .optional()
    .isArray()
    .withMessage('Conversation history must be an array')
], aiChat);

// @route   POST /api/ai/recommendations
// @desc    Generate product recommendations
// @access  Private
router.post('/recommendations', protect, [
  body('userId')
    .isMongoId()
    .withMessage('Valid user ID is required'),
  body('userPreferences')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('User preferences must be less than 1000 characters'),
  body('purchaseHistory')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Purchase history must be less than 2000 characters')
], generateRecommendations);

// @route   POST /api/ai/seo-content
// @desc    Generate SEO-optimized content
// @access  Private/Admin
router.post('/seo-content', protect, authorize('admin'), [
  body('productName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Product name must be between 2 and 100 characters'),
  body('category')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Category must be between 2 and 50 characters'),
  body('keywords')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Keywords must be less than 200 characters')
], generateSEOContent);

module.exports = router;
