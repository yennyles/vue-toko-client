import Vue from 'vue'
import VueRouter from 'vue-router'
//Route untuk membuka masing2 halaman
import Product from '../views/product/index.vue'
import ProductDetail from '../views/product/detail.vue'
import Cart from '../views/cart/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
