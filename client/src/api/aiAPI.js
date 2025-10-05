import api from './api'

const aiAPI = {
  generateDescription: (data) => api.post('/ai/describe', data),
  chat: (data) => api.post('/ai/chat', data),
  getRecommendations: (data) => api.post('/ai/recommendations', data),
  generateSEOContent: (data) => api.post('/ai/seo-content', data),
}

export default aiAPI
