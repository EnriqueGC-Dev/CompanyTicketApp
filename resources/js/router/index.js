import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/Index.vue';
import Dashboard from '../components/pages/Dashboard.vue';

import error from '../components/pages/404.vue';

const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/:pathMatch(.*)*', component: error, name: 'not-found' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;