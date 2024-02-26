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
  faBasketShopping,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faXmark,
  faChevronRight,
  faBars,
  faCircleXmark,
  faChevronDown,
  faChevronUp,
  faPlus,
  faBasketShopping,
  faCheck,
);

// Vue Router
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import HostingPage from './pages/HostingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import DomainPage from './pages/DomainPage.vue';
import BuilderPage from './pages/BuilderPage.vue';
import HelpPage from './pages/HelpPage.vue';
import SignupPage from './pages/SignupPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ForgotPasswordPage from './pages/ForgotPasswordPage.vue';
import CheckEmailPage from './pages/CheckEmailPage.vue';
import SetPasswordPage from './pages/SetPasswordPage.vue';
import OrderDomainPage from './pages/OrderDomainPage.vue';

import Animation from './tests/Animation.vue';

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
    { path: '/forgot-password', component: ForgotPasswordPage },
    { path: '/check-email', component: CheckEmailPage },
    { path: '/set-password', component: SetPasswordPage },
    { path: '/order/domain', component: OrderDomainPage },
    { path: '/testing', component: Animation },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
});

// Event Bus
import mitt from 'mitt';

const emitter = mitt();

// Swiper
import { register } from 'swiper/element/bundle';

register();

// Pinia
import { createPinia } from 'pinia';

const pinia = createPinia();

// Vue
const app = createApp(App);

app.config.globalProperties.$emitter = emitter;

app.use(router);
app.use(pinia);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
