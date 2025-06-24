import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/Projects.vue'),
        },
        {
            path: '/weather',
            name: 'weather',
            component: () => import('@/views/Weather.vue'),
        },
        {
            path: '/workout',
            name: 'workout',
            component: () => import('@/views/Workout.vue'),
        },
    ],
});
export default router;
