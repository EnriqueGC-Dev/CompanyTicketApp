import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/Index.vue';

const routes = [
    { path: '/', component: Index, name: 'index' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;