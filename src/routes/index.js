import { createRouter, createWebHistory } from 'vue-router'
import Home from '../screens/Home.vue'
import NotFound from '../screens/404.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../screens/About.vue')
    },
    {
        path: '/data-structures',
        name: 'DataStructures',
        component: () => import('../screens/DataStructure.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router