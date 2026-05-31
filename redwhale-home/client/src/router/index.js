import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Products from '@/views/Products'
import ProductDetail from '@/views/ProductDetail'
import News from '@/views/News'
import About from '@/views/About'
import Contact from '@/views/Contact'
import AdminLogin from '@/views/AdminLogin'
import AdminDashboard from '@/views/AdminDashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/product/:id', component: ProductDetail },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/admin', component: AdminLogin },
    { path: '/admin/dashboard', component: AdminDashboard }
  ]
})