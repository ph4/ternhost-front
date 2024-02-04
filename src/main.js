import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';

// Swiper
import { register } from 'swiper/element/bundle';

register();

// Vue Router
import { createRouter, createWebHistory } from 'vue-router';

import NotFoundPage from '@/components/pages/NotFoundPage/NotFoundPage.vue';
import HomePage from '@/components/pages/HomePage/HomePage.vue';
import DomainPage from '@/components/pages/DomainPage/DomainPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/domain', component: DomainPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
