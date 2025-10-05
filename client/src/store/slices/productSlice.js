import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productAPI from '../api/productAPI'

// Async thunks
export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productAPI.getProducts(params)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get products')
    }
  }
)

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await productAPI.getProduct(productId)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get product')
    }
  }
)

export const getFeaturedProducts = createAsyncThunk(
  'product/getFeaturedProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productAPI.getFeaturedProducts()
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get featured products')
    }
  }
)

export const getCategories = createAsyncThunk(
  'product/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productAPI.getCategories()
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get categories')
    }
  }
)

export const searchProducts = createAsyncThunk(
  'product/searchProducts',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await productAPI.searchProducts(searchParams)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to search products')
    }
  }
)

const initialState = {
  products: [],
  featuredProducts: [],
  categories: [],
  currentProduct: null,
  searchResults: [],
  pagination: {
    page: 1,
    pages: 1,
    total: 0
  },
  filters: {
    category: '',
    minPrice: '',
    maxPrice: '',
    search: '',
    sort: ''
  },
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProductError: (state) => {
      state.error = null
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = {
        category: '',
        minPrice: '',
        maxPrice: '',
        search: '',
        sort: ''
      }
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null
    },
    clearSearchResults: (state) => {
      state.searchResults = []
    }
  },
  extraReducers: (builder) => {
    builder
      // Get products
      .addCase(getProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.products || []
        state.pagination = {
          page: action.payload.page || 1,
          pages: action.payload.pages || 1,
          total: action.payload.total || 0
        }
        state.error = null
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get single product
      .addCase(getProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false
        state.currentProduct = action.payload
        state.error = null
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get featured products
      .addCase(getFeaturedProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false
        state.featuredProducts = action.payload || []
        state.error = null
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get categories
      .addCase(getCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload || []
        state.error = null
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Search products
      .addCase(searchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.searchResults = action.payload.products || []
        state.pagination = {
          page: action.payload.page || 1,
          pages: action.payload.pages || 1,
          total: action.payload.total || 0
        }
        state.error = null
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { 
  clearProductError, 
  setFilters, 
  clearFilters, 
  clearCurrentProduct, 
  clearSearchResults 
} = productSlice.actions
export default productSlice.reducer
