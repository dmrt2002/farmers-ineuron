import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Home from "../components/Home.vue"
import Admin from "../components/Admin.vue"
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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
