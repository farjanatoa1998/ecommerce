import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderAPI from '../api/orderAPI'

// Async thunks
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await orderAPI.createOrder(orderData)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create order')
    }
  }
)

export const getUserOrders = createAsyncThunk(
  'order/getUserOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderAPI.getUserOrders()
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get orders')
    }
  }
)

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await orderAPI.getOrder(orderId)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get order')
    }
  }
)

export const getAllOrders = createAsyncThunk(
  'order/getAllOrders',
  async (params, { rejectWithValue }) => {
    try {
      const response = await orderAPI.getAllOrders(params)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get orders')
    }
  }
)

export const updateOrderStatus = createAsyncThunk(
  'order/updateOrderStatus',
  async ({ orderId, statusData }, { rejectWithValue }) => {
    try {
      const response = await orderAPI.updateOrderStatus(orderId, statusData)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update order status')
    }
  }
)

export const getOrderStats = createAsyncThunk(
  'order/getOrderStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderAPI.getOrderStats()
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get order stats')
    }
  }
)

const initialState = {
  orders: [],
  currentOrder: null,
  orderStats: null,
  loading: false,
  error: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrderError: (state) => {
      state.error = null
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null
    }
  },
  extraReducers: (builder) => {
    builder
      // Create order
      .addCase(createOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false
        state.orders.unshift(action.payload)
        state.error = null
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get user orders
      .addCase(getUserOrders.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload || []
        state.error = null
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get single order
      .addCase(getOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false
        state.currentOrder = action.payload
        state.error = null
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get all orders (admin)
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload.orders || []
        state.error = null
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Update order status
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.loading = false
        const index = state.orders.findIndex(order => order._id === action.payload._id)
        if (index !== -1) {
          state.orders[index] = action.payload
        }
        state.error = null
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get order stats
      .addCase(getOrderStats.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getOrderStats.fulfilled, (state, action) => {
        state.loading = false
        state.orderStats = action.payload
        state.error = null
      })
      .addCase(getOrderStats.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearOrderError, clearCurrentOrder } = orderSlice.actions
export default orderSlice.reducer
