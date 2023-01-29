import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Home from "../components/ProductList.vue"
import Admin from "../components/Admin.vue"
import Products from "../components/products.vue"
import checkout from "../components/checkout.vue"
import orders from "../components/orders.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: checkout
    },
    {
        path: '/orders',
        name: 'orders',
        component: orders
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
