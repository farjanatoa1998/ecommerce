import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderStats } from '../store/slices/orderSlice'
import { getProducts } from '../store/slices/productSlice'
import { FiUsers, FiPackage, FiDollarSign, FiTrendingUp, FiShoppingCart, FiEye } from 'react-icons/fi'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

const AdminDashboard = () => {
  const dispatch = useDispatch()
  const { orderStats, loading: orderLoading } = useSelector((state) => state.order || { orderStats: null, loading: false })
  const { products, loading: productLoading } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getOrderStats())
    dispatch(getProducts({ limit: 5 }))
  }, [dispatch])

  if (orderLoading || productLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  const stats = [
    {
      name: 'Total Orders',
      value: orderStats?.totalOrders || 0,
      icon: FiShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      name: 'Total Revenue',
      value: `$${orderStats?.totalRevenue?.toFixed(2) || '0.00'}`,
      icon: FiDollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900'
    },
    {
      name: 'Total Products',
      value: products?.length || 0,
      icon: FiPackage,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900'
    },
    {
      name: 'Active Users',
      value: '1,234', // This would come from user stats
      icon: FiUsers,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to the SmartCart AI admin panel
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Orders
                </h2>
                <a
                  href="/admin/orders"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                >
                  View all
                </a>
              </div>
              <div className="space-y-3">
                {orderStats?.ordersByStatus?.map((status, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                      {status._id}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {status.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Products */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Products
                </h2>
                <a
                  href="/admin/products"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                >
                  View all
                </a>
              </div>
              <div className="space-y-3">
                {products?.slice(0, 5).map((product) => (
                  <div key={product._id} className="flex items-center space-x-3">
                    <img
                      src={product.images[0] || '/placeholder-product.jpg'}
                      alt={product.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        ${product.price}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiEye className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {product.stock}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin/products"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <FiPackage className="h-8 w-8 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Manage Products
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Add, edit, or remove products
                  </p>
                </div>
              </div>
            </a>

            <a
              href="/admin/orders"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <FiShoppingCart className="h-8 w-8 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Manage Orders
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    View and update order status
                  </p>
                </div>
              </div>
            </a>

            <a
              href="/admin/users"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <FiUsers className="h-8 w-8 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Manage Users
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    View and manage user accounts
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
