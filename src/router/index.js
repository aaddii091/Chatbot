import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/login.vue')
        },
        {
            path: '/signup',
            component: () => import('../views/signup.vue')
        },
        {
            path: '/chat',
            component: () => import('../views/MainChat.vue')
        },
    ]
})

export default router