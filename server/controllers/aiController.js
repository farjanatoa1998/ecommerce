const OpenAI = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// @desc    Generate product description using AI
// @route   POST /api/ai/describe
// @access  Private/Admin
const generateProductDescription = async (req, res) => {
  try {
    const { title, category, features } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Product title is required' });
    }

    const prompt = `Generate a compelling product description for an e-commerce website. 
    Product: ${title}
    Category: ${category || 'general'}
    Key Features: ${features || 'not specified'}
    
    Requirements:
    - 2-3 sentences maximum
    - Highlight key benefits
    - Use persuasive language
    - Include relevant keywords
    - Make it SEO-friendly
    - Professional tone`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert e-commerce copywriter who creates compelling product descriptions that drive sales."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 200,
      temperature: 0.7
    });

    const description = completion.choices[0].message.content.trim();
    res.json({ description });
  } catch (error) {
    console.error('AI description generation error:', error);
    res.status(500).json({ message: 'AI service error' });
  }
};

// @desc    AI Chatbot for product search
// @route   POST /api/ai/chat
// @access  Private
const aiChat = async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const systemPrompt = `You are a helpful shopping assistant for an e-commerce website called SmartCart AI. 
    You can help customers with:
    - Product recommendations
    - Shopping advice
    - General questions about products
    - Order status inquiries
    - Return and refund policies
    
    Be friendly, helpful, and concise. If you don't know something specific about our inventory, 
    suggest they browse our product categories or contact support.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 300,
      temperature: 0.7
    });

    const response = completion.choices[0].message.content.trim();
    res.json({ response });
  } catch (error) {
    console.error('AI chat error:', error);
    res.status(500).json({ message: 'AI service error' });
  }
};

// @desc    Generate product recommendations
// @route   POST /api/ai/recommendations
// @access  Private
const generateRecommendations = async (req, res) => {
  try {
    const { userId, userPreferences, purchaseHistory } = req.body;

    const prompt = `Based on the following user data, generate 5 personalized product recommendations:
    
    User Preferences: ${userPreferences || 'Not specified'}
    Purchase History: ${purchaseHistory || 'No previous purchases'}
    
    Generate recommendations that are:
    - Relevant to their interests
    - Varied across different categories
    - Include both popular and unique items
    - Consider seasonal trends
    - Include price range variety
    
    Format as a JSON array with product suggestions including category and reasoning.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert product recommendation engine for e-commerce."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.8
    });

    const recommendations = completion.choices[0].message.content.trim();
    res.json({ recommendations });
  } catch (error) {
    console.error('AI recommendations error:', error);
    res.status(500).json({ message: 'AI service error' });
  }
};

// @desc    Generate SEO-optimized content
// @route   POST /api/ai/seo-content
// @access  Private/Admin
const generateSEOContent = async (req, res) => {
  try {
    const { productName, category, keywords } = req.body;

    const prompt = `Generate SEO-optimized content for an e-commerce product page:
    
    Product: ${productName}
    Category: ${category}
    Target Keywords: ${keywords || 'not specified'}
    
    Generate:
    1. Meta title (50-60 characters)
    2. Meta description (150-160 characters)
    3. H1 tag
    4. 3-5 bullet points for key features
    5. 2-3 FAQ questions and answers
    
    Make it SEO-friendly and conversion-focused.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert SEO content writer for e-commerce websites."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 600,
      temperature: 0.7
    });

    const content = completion.choices[0].message.content.trim();
    res.json({ content });
  } catch (error) {
    console.error('AI SEO content error:', error);
    res.status(500).json({ message: 'AI service error' });
  }
};

module.exports = {
  generateProductDescription,
  aiChat,
  generateRecommendations,
  generateSEOContent
};
