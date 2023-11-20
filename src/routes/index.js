import AdminPage from '../pages/AdminPage/AdminPage'
import Homepage from '../pages/HomePage/Homepage'
import NotfoundPage from '../pages/NotfoudPage/NotfoudPage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProducDetailPage from '../pages/ProductDetailPage/ProducDetailPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import ProfilePage from '../pages/Profile/Profile'
import SigninPage from '../pages/SigninPage/SigninPage'
import SignupPage from '../pages/SingupPage/SignupPage'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'
export const routes = [
  {
    path: '/',
    page: Homepage,
    isShowHeader: true
  },
  {
    path: '/Order',
    page: OrderPage,
    isShowHeader: true
  },
  {
    path: '/products',
    page: ProductsPage,
    isShowHeader: true
  },
  {
    path: '/:type',
    page: TypeProductPage,
    isShowHeader: true
  },
  {
    path: '/signin',
    page: SigninPage,
    isShowHeader: false
  },
  {
    path: '/signup',
    page: SignupPage,
    isShowHeader: false
  },
  {
    path: '/detail-product',
    page: ProducDetailPage,
    isShowHeader: true
  },
  {
    path: '/profile-user',
    page: ProfilePage,
    isShowHeader: true
  },

  {
    path: '/system/admin',
    page: AdminPage,
    isPrivated: true,
    isShowHeader: false
  },

  {
    path: '*',
    page: NotfoundPage
    // isShowHeader: false
  }
]
