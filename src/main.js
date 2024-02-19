import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronRight,
  faBars,
  faCircleXmark,
  faChevronDown,
  faChevronUp,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faBars, faCircleXmark, faChevronDown, faChevronUp, faPlus);

// Vue Router
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import HostingPage from './pages/HostingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import DomainPage from './pages/DomainPage.vue';
import BuilderPage from './pages/BuilderPage.vue';
import HelpPage from './pages/HelpPage.vue';
import SignupPage from './pages/SignupPage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/hosting', component: HostingPage },
    { path: '/login', component: LoginPage },
    { path: '/domain', component: DomainPage },
    { path: '/builder', component: BuilderPage },
    { path: '/help', component: HelpPage },
    { path: '/signup', component: SignupPage },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

// Event Bus
import mitt from 'mitt';

const emitter = mitt();

// Swiper
import { register } from 'swiper/element/bundle';

register();

// Vue
const app = createApp(App);

app.config.globalProperties.$emitter = emitter;

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
