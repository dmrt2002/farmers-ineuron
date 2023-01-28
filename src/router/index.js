import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Home from "../components/Home.vue"
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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
